// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// const name = "Jhon";
// const address = "Pokhara";
// const age = "23";

// console.log(
//   "My name is " +
//     name +
//     "." +
//     "i am from " +
//     address +
//     "." +
//     "i am " +
//     age +
//     " years old"
// );

// console.log(`My name is ${name}. I am from ${address}. I am ${age} years old.`);

const obj = {
  id: 121,
  name: "Jhon deo",
  email: "jhon@gmail.com",
  address: "Pokhara",
  password: "123456789",
};

const { password, ...res } = obj;
console.log(res);

// const userId = obj.id;
// const userName = obj.name;
// const userEmail = obj.email;
// const userAddress = obj.address;
// const userPassword = obj.password;

// const { id, name, address, password, email } = obj;

// console.log(id, name, email, address, password);

// const myFun = (details) => {
//   const { name } = details;
//   console.log(name);
// };
// myFun(obj);

// const arr = [1, 3, 5, 7, 8, 3, 5, 8, 9, 3];
// const [first, second, third, ...others] = arr;
// console.log(first, second, third, others);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

console.log(...arr1);

let arr3 = [...arr1, ...arr2];

// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   let j = arr3.length;
//   arr3[j] = arr2[i];
// }

console.log(arr3);
