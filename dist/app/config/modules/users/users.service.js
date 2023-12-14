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
exports.services = void 0;
const users_model_1 = require("./users.model");
const createUserDb = (users) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.UsersModel.create(users);
    return result;
});
const getUsersDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const selectedFields = 'userName fullName age email address';
    const result = yield users_model_1.UsersModel.find().select(selectedFields);
    // console.log(result)
    return result;
});
const getSingleUserDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.UsersModel.findOne({ userId }).select({ orders: 0 });
    return result;
    console.log(result);
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateUserDb = (userId, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const updateUser = yield users_model_1.UsersModel.findOneAndUpdate({ userId: userId }, updates, { new: true });
    return updateUser;
});
const insertNewOrder = (userId, order) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield users_model_1.UsersModel.getExitingUser(userId);
    if (existingUser.orders) {
        return yield users_model_1.UsersModel.updateOne({ userId }, { $push: { orders: order } }, { new: true });
    }
    return yield users_model_1.UsersModel.updateOne({ userId }, { $set: { orders: [order] } }, { upsert: true });
});
const findUserOrders = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = users_model_1.UsersModel.getExitingUser(userId);
    if (!existingUser) {
        throw new Error('data not fined');
    }
    return yield users_model_1.UsersModel.findOne({ userId }).select({ orders: 1 });
});
const deleteUserDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield users_model_1.UsersModel.findOneAndDelete({ userId });
    return deleteUser;
});
exports.services = {
    createUserDb,
    getUsersDb,
    getSingleUserDb,
    updateUserDb,
    deleteUserDb,
    insertNewOrder,
    findUserOrders,
};
