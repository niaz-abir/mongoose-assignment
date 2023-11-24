export type allAddress = {
  street: string;
  city: string;
  country: string;
};
export type fullOrders = {
  productName: string;
  price: number;
  quantity: number;
};

export type Users = {
  userId: number;
  userName: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: [string];
  address: allAddress;
  orders: fullOrders;
};

export default Users;
