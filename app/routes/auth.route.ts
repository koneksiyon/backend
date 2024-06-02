import express, { Router, Request, Response } from 'express';
import authController from '../controllers/auth.controller';

const router: Router = express.Router();

router.post('/login', authController.login);

router.get('/', (req: Request, res: Response) => {
  res.send('Hello from Auth');
});

export default router;
