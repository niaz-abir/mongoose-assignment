"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = exports.ordersSchema = void 0;
const mongoose_1 = require("mongoose");
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
    username: {
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
        default: false,
    },
});
// userSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });
// userSchema.post('save', async function (doc, next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   doc.password = '';
//   next();
// });
// userSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $eq: true } });
//   next();
// });
// userSchema.statics.getExitingUser = async (userId: number) => {
//   return await UsersModel.findOne({ userId });
// };
// userSchema.pre('findOne', function (next) {
//   this.find({ isDeleted: { $eq: true } });
//   next();
// });
exports.UsersModel = (0, mongoose_1.model)('Users', userSchema);
