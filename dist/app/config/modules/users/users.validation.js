"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersValidationSchema = exports.ordersValidationSchema = void 0;
const zod_1 = require("zod");
const addressValidationSchema = zod_1.z.object({
    street: zod_1.z.string(),
    city: zod_1.z.string(),
    country: zod_1.z.string(),
});
exports.ordersValidationSchema = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
const userSchemaValidationSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    fullName: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
    }),
    age: zod_1.z.number(),
    email: zod_1.z.string().email(),
    isActive: zod_1.z.boolean(),
    hobbies: zod_1.z.string().array().min(1, 'Hobbies are  required here.'),
    address: addressValidationSchema,
    orders: exports.ordersValidationSchema.optional(),
    isDeleted: zod_1.z.boolean().default(false),
});
exports.UsersValidationSchema = userSchemaValidationSchema;
