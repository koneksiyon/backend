import Employee, { EmployeeAttributes } from '../db/models/employee.model';
import { UserAttributes } from '../db/models/user.model';
import employeeRepo from '../repositories/employee.repo';

const createEmployeeService = async (
  userData: UserAttributes,
  employeeData: EmployeeAttributes
) => {
  return await employeeRepo.create(userData, employeeData);
};

export default {
  createEmployeeService,
};
