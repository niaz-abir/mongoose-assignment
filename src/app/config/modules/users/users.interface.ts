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
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: allAddress;
  orders?: fullOrders;
  isDeleted: boolean | undefined;
};

export default Users;
