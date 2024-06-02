import { NextFunction, Request, Response } from 'express';
import { UserAttributes } from '../db/models/user.model';
import { EmployeeAttributes } from '../db/models/employee.model';
import employeeService from '../services/employee.service';

const createEmployeeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    username,
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

  const userData: UserAttributes = { username, password, role };
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

export default {
  createEmployeeController,
};
