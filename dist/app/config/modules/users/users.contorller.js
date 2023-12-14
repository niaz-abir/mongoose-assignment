"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const users_service_1 = require("./users.service");
const users_validation_1 = require("./users.validation");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const userBody = users_validation_1.UsersValidationSchema.parse(user);
        const result = yield users_service_1.services.createUserDb(userBody);
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'data is not created',
            error: error,
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_service_1.services.getUsersDb();
        console.log(result);
        res.status(200).json({
            success: true,
            message: '"Users fetched successfully! !',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'data is not fetch',
            error: error,
        });
    }
});
const getSingleUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userNumber = parseInt(userId);
        const result = yield users_service_1.services.getSingleUserDb(userNumber);
        res.status(200).json({
            success: true,
            message: 'User fetched successfully! ',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'data is not fetch',
            error: error,
        });
    }
});
const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, body } = req.params;
        const userNumber = parseInt(userId);
        const validateBody = users_validation_1.ordersValidationSchema.safeParse(body);
        if (!validateBody.success) {
            return res.status(200).json({
                success: true,
                message: 'User updated successfully!  ',
                result: validateBody,
            });
        }
        const result = yield users_service_1.services.insertNewOrder(userNumber, validateBody === null || validateBody === void 0 ? void 0 : validateBody.data);
        res.status(200).json({
            success: true,
            message: 'User single find ',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'data is not fetch',
            error: error,
        });
    }
});
const updateFindBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userNumber = parseInt(userId);
        const orders = yield users_service_1.services.findUserOrders(userNumber);
        return res.status(200).json({
            success: true,
            message: 'success find easily  ',
            result: orders,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'data is not fetch',
            error: error,
        });
    }
});
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const updates = req.body;
        const result = yield users_service_1.services.updateUserDb(userId, updates);
        res.status(200).json({
            success: true,
            message: 'User updated successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'data is not find',
            error: error,
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = parseInt(req.params.userId);
        const result = yield users_service_1.services.deleteUserDb(userID);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'User deleted successfully! ',
                data: null,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'data is not deleted',
            error: error,
        });
    }
});
exports.controllers = {
    createUser,
    getAllUsers,
    getSingleUsers,
    updateSingleUser,
    deleteUser,
    updateBooking,
    updateFindBooking,
};
