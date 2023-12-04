import { z } from 'zod';

const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

export const ordersValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userSchemaValidationSchema = z.object({
  userId: z.number(),
  userName: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.string().array().min(1, 'Hobbies are  required here.'),
  address: addressValidationSchema,
  orders: ordersValidationSchema,
  isDeleted: z.boolean().default(false),
});

export const UsersValidationSchema = userSchemaValidationSchema;
