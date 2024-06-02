import Employee, { EmployeeAttributes } from '../db/models/employee.model';
import { UserAttributes } from '../db/models/user.model';
import employeeRepo from '../repositories/employee.repo';

const createEmployeeService = async (
  userData: UserAttributes,
  employeeData: EmployeeAttributes
) => {
  return await employeeRepo.create(userData, employeeData);
};

const retrieveEmployeesService = async () => {
  return await employeeRepo.retrieveAll();
};

const retrieveEmployeeByIdService = async (id: string) => {
  return await employeeRepo.retrieve({ id });
};

const updateEmployeeService = async (
  id: string,
  details: Partial<Employee>
) => {
  return await employeeRepo.update({ id }, details);
};

const deleteEmployeeService = async (id: string) => {
  return await employeeRepo.destroy(id);
};

export default {
  createEmployeeService,
  retrieveEmployeesService,
  retrieveEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
};
