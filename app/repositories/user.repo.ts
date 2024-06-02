import { WhereOptions } from 'sequelize';
import User, { UserAttributes } from '../db/models/user.model';

const create = async (data: UserAttributes) => {
  return await User.create(data);
};

const retrieveAuth = async (filters: WhereOptions<UserAttributes>) => {
  return await User.findOne({
    attributes: ['username', 'password'],
    where: filters,
  });
};

export default { create, retrieveAuth };
