import { Request, Response } from 'express';
import userService from '../services/user.service';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await userService.getUserByUsername(username);
  if (user) {
    if (password === user.password) {
      return res.status(200).send({ message: 'Logged in successfully' });
    }
  }
  return res.status(400).send({ message: 'Invalid credentials' });
};

export default { login };
