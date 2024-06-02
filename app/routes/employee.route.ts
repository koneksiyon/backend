import express, { Router, Request, Response } from 'express';
import employeeController from '../controllers/employee.controller';
const router: Router = express.Router();

router.post('/', employeeController.createEmployeeController);

router.get('/', (req: Request, res: Response) => {
  res.send(`Hello from ${process.env.NODE_ENV}`);
});

export default router;
