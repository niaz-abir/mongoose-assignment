import mongoose from 'mongoose';
import Users, { allAddress, fullOrders } from './users.interface';
const { Schema, model } = mongoose;

const addressSchema = new Schema<allAddress>({
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

const ordersSchema = new Schema<fullOrders>({
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

const userSchema = new Schema<Users>({
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
  orders: ordersSchema,
});

export const UsersModel = model<Users>('Users', userSchema);
