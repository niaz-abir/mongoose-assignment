import { UsersModel } from './users.model';
import Users, { fullOrders } from './users.interface';

const createUserDb = async (users: Users) => {
  const result = await UsersModel.create(users);
  return result;
};

const getUsersDb = async () => {
  const selectedFields = 'userName fullName age email address';
  const result = await UsersModel.find().select(selectedFields);
  console.log(result);
  return result;
};

const getSingleUserDb = async (userId: number) => {
  const result = await UsersModel.findOne({ userId }).select({ orders: 0 });
  console.log(result);
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

const findUserOrders = async (userId: number) => {
  const existingUser = UsersModel.getExitingUser(userId);

  if (!existingUser) {
    throw new Error('data not fined');
  }

  return await UsersModel.findOne({ userId }).select({ orders: 1 });
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
  findUserOrders,
};
