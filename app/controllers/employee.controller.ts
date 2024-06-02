import { Request, Response } from 'express';
import { UserAttributes } from '../db/models/user.model';
import { EmployeeAttributes } from '../db/models/employee.model';
import employeeService from '../services/employee.service';

const createEmployeeController = async (req: Request, res: Response) => {
  const {
    password,
    role,
    firstName,
    middleName,
    lastName,
    contactNumber,
    email,
    jobTitle,
    branch,
  } = req.body;

  const userData: UserAttributes = { username: email, password, role };
  const employeeData: EmployeeAttributes = {
    firstName,
    middleName,
    lastName,
    contactNumber,
    email,
    jobTitle,
    branch,
  };

  const employee = await employeeService.createEmployeeService(
    userData,
    employeeData
  );

  return res.status(201).json(employee);
};

const getEmployeesController = async (req: Request, res: Response) => {
  const employees = await employeeService.retrieveEmployeesService();
  return res.status(200).json(employees);
};

const getEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employee = await employeeService.retrieveEmployeeByIdService(id);
  return res.status(200).json(employee);
};

const updateEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const details = req.body;

  const employee = await employeeService.updateEmployeeService(id, details);
  return res.status(200).json(employee);
};

const deleteEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await employeeService.deleteEmployeeService(id);
  return res.status(200).json(result);
};

export default {
  createEmployeeController,
  getEmployeesController,
  getEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
};
