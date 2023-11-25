import { UsersModel } from './users.model';
import Users, { fullOrders } from './users.interface';

const createUserDb = async (users: Users) => {
  const result = await UsersModel.create(users);
  return result;
};

const getUsersDb = async () => {
  const selectedFields = 'userName fullName age email address';
  const result = await UsersModel.find().select(selectedFields);
  return result;
};
const getSingleUserDb = async (userId: number) => {
  const result = await UsersModel.findOne({ userId });
  return result;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateUserDb = async (userId: number, updates: any) => {
  const updateUser = await UsersModel.findOneAndUpdate(
    { userId: userId },
    updates,
    { new: true },
  );
  return updateUser;
};

const insertNewOrder = async (userId: number, order: fullOrders) => {
  const existingUser = await UsersModel.getExitingUser(userId);

  if (existingUser.orders) {
    return await UsersModel.updateOne(
      { userId },
      { $push: { orders: order } },
      { new: true },
    );
  }
  return await UsersModel.updateOne(
    { userId },
    { $set: { orders: [order] } },
    { upsert: true },
  );
};

const deleteUserDb = async (userId: number) => {
  const deleteUser = await UsersModel.findOneAndDelete({ userId });
  return deleteUser;
};
export const services = {
  createUserDb,
  getUsersDb,
  getSingleUserDb,
  updateUserDb,
  deleteUserDb,
  insertNewOrder,
};
