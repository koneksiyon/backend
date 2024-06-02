import { Sequelize } from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV || 'development';
// @ts-ignore
const sequelize = new Sequelize(config[env]);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

sequelize
  .sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to synchronize models:', err);
  });

export default sequelize;
