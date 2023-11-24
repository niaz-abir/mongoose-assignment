import { UsersModel } from './users.model';
import Users from './users.interface';

const createUserDb = async (users: Users) => {
  const result = await UsersModel.create(users);
  return result;
};

const getUsersDb = async () => {
  const result = await UsersModel.find();
  return result;
};
const getSingleUserDb = async (userId: number) => {
  const result = await UsersModel.findOne({ userId });
  return result;
};
const updateUserDb = async (userId: number, updates: any) => {
  const updateUser = await UsersModel.findOneAndUpdate(
    { userId: userId },
    updates,
    { new: true },
  );
  return updateUser;
};
const deleteUserDb = async (userId: number) => {
  const deleteUser = await UsersModel.findOneAndDelete(userId);
  return deleteUser;
};
export const services = {
  createUserDb,
  getUsersDb,
  getSingleUserDb,
  updateUserDb,
  deleteUserDb,
};
