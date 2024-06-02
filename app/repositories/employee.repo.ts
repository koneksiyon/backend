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

    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export default { create };
