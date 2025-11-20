
const obj = {
  id: 121,
  name: "Jhon deo",
  email: "jhon@gmail.com",
  address: "Pokhara",
  password: "123456789",
};

const { password, ...res } = obj;
console.log(res);