import { UserAttributes } from '../db/models/user.model';
import userRepository from '../repositories/user.repo';

const createUserService = async (data: UserAttributes) => {
  return await userRepository.create(data);
};

const getUserByUsername = async (username: string) => {
  return await userRepository.retrieveAuth({ username });
};

export default {
  createUserService,
  getUserByUsername,
};
