import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './app/routes';
dotenv.config();

const app: Application = express();
app.use(express.json());

// Custom error handling middleware
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

app.use(errorHandler);

app.use('/api', routes);

if (process.env.NODE_ENV === 'development') {
  app.listen(3000, () => console.log(`Listening on port: 3000`));
}

export default app;
