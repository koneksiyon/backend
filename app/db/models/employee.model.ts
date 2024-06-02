import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

export interface EmployeeAttributes {
  id?: string;
  userId?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  contactNumber: string;
  email: string;
  jobTitle?: number;
  branch?: string;
}

class Employee extends Model<EmployeeAttributes> implements EmployeeAttributes {
  public id!: string;
  public userId!: number;
  public firstName!: string;
  public middleName?: string;
  public lastName!: string;
  public contactNumber!: string;
  public email!: string;
  public jobTitle?: number;
  public branch?: string;
}

Employee.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    jobTitle: DataTypes.INTEGER,
    branch: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Employee',
    underscored: true,
    timestamps: true,
    paranoid: true,
  }
);

export default Employee;
