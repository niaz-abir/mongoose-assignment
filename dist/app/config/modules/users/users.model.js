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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = exports.ordersSchema = void 0;
const mongoose_1 = require("mongoose");
const __1 = __importDefault(require("../.."));
const bcrypt_1 = __importDefault(require("bcrypt"));
const addressSchema = new mongoose_1.Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});
exports.ordersSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
    },
    hobbies: {
        type: [String],
        required: true,
    },
    address: addressSchema,
    orders: exports.ordersSchema,
    isDeleted: {
        type: Boolean,
        default: true,
    },
});
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(__1.default.bcrypt_salt_rounds));
        next();
    });
});
userSchema.post('save', function (doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        doc.password = '';
        next();
    });
});
userSchema.pre('find', function (next) {
    this.find({ isDeleted: { $eq: true } });
    next();
});
userSchema.statics.getExitingUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.UsersModel.findOne({ userId });
});
userSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $eq: true } });
    next();
});
exports.UsersModel = (0, mongoose_1.model)('Users', userSchema);
