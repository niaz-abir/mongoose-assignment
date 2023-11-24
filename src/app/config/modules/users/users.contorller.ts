import { Request, Response } from 'express';
import { services } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await services.createUserDb(user);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await services.getUsersDb();
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userNumber = parseInt(userId);
    // console.log(userNumber);
    const result = await services.getSingleUserDb(userNumber);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: 'User single find ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const updates = req.body;

    const result = await services.updateUserDb(userId, updates);

    res.status(200).json({
      success: true,
      message: 'User single find ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userID = parseInt(req.params.userId);
    const result = await services.deleteUserDb(userID);

    res.status(200).json({
      success: true,
      message: 'deleted successfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const controllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  updateSingleUser,
  deleteUser,
};
