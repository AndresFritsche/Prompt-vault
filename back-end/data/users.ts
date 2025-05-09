import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jhon Doe",
    email: "johndoe@gmail.com",
    password: bcrypt.hashSync("abccba", 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    password: bcrypt.hashSync("cbaabc", 10),
    isAdmin: false,
  },
];
export default users;
