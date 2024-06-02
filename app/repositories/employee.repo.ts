import { Options, UpdateOptions, WhereOptions } from 'sequelize';
import sequelize from '../db';
import Employee, { EmployeeAttributes } from '../db/models/employee.model';
import User, { UserAttributes } from '../db/models/user.model';

const create = async (
  userData: UserAttributes,
  employeeData: EmployeeAttributes
) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const user = await User.create(userData, { transaction: t });
      const employee = await Employee.create({
        ...employeeData,
        userId: user.id,
      });
      return employee;
    });
    return result;
  } catch (error) {
    return error;
  }
};

const retrieveAll = async () => {
  try {
    const result = await Employee.findAll({ order: [['user_id', 'DESC']] });
    return result;
  } catch (error) {
    return error;
  }
};

const retrieve = async (
  filter: WhereOptions<Employee>
): Promise<Employee | null> => {
  try {
    const result = Employee.findOne({ where: filter });
    return result;
  } catch (error: any) {
    return error;
  }
};

const update = async (
  filter: WhereOptions<Employee>,
  details: Partial<Employee>
) => {
  try {
    const result = await Employee.update(details, { where: filter });
    return result;
  } catch (error) {
    return error;
  }
};

const destroy = async (id: string) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const employee = await retrieve({ id });
      await Employee.destroy({ where: { id }, transaction: t });
      await User.destroy({ where: { id: employee?.id } });
      return employee;
    });
    return result;
  } catch (error) {
    return error;
  }
};

export default { create, retrieveAll, retrieve, update, destroy };
