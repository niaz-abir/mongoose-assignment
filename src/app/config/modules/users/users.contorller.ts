import { Request, Response } from 'express';
import { services } from './users.service';
import {
  UsersValidationSchema,
  ordersValidationSchema,
} from './users.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const userBody = UsersValidationSchema.parse(user);
    const result = await services.createUserDb(userBody);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'data is not created',
      error: error,
    });
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await services.getUsersDb();
    console.log(result);
    res.status(200).json({
      success: true,
      message: '"Users fetched successfully! !',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'data is not fetch',
      error: error,
    });
  }
};

const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userNumber = parseInt(userId);

    const result = await services.getSingleUserDb(userNumber);

    res.status(200).json({
      success: true,
      message: 'User fetched successfully! ',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'data is not fetch',
      error: error,
    });
  }
};
const updateBooking = async (req: Request, res: Response) => {
  try {
    const { userId, body } = req.params;
    const userNumber = parseInt(userId);
    const validateBody = ordersValidationSchema.safeParse(body);

    if (!validateBody.success) {
      return res.status(200).json({
        success: true,
        message: 'User updated successfully!  ',
        result: validateBody,
      });
    }

    const result = await services.insertNewOrder(
      userNumber,
      validateBody?.data,
    );

    res.status(200).json({
      success: true,
      message: 'User single find ',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'data is not fetch',
      error: error,
    });
  }
};
const updateFindBooking = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userNumber = parseInt(userId);
    const orders = await services.findUserOrders(userNumber);

    return res.status(200).json({
      success: true,
      message: 'success find easily  ',
      result: orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'data is not fetch',
      error: error,
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const updates = req.body;

    const result = await services.updateUserDb(userId, updates);

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'data is not find',
      error: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userID = parseInt(req.params.userId);

    const result = await services.deleteUserDb(userID);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully! ',
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'data is not deleted',
      error: error,
    });
  }
};

export const controllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  updateSingleUser,
  deleteUser,
  updateBooking,
  updateFindBooking,
};
