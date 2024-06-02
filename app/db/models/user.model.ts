import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

export interface UserAttributes {
  id?: number;
  username: string;
  password: string;
  role: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public role!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'User',
    underscored: true,
    timestamps: true,
  }
);

export default User;
