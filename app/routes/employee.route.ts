import express, { Router, Request, Response } from 'express';
import employeeController from '../controllers/employee.controller';
const router: Router = express.Router();

router.post('/', employeeController.createEmployeeController);

router.get('/', employeeController.getEmployeesController);

router.get('/:id', employeeController.getEmployeeController);

router.put('/:id', employeeController.updateEmployeeController);

router.delete('/:id', employeeController.deleteEmployeeController);

export default router;
