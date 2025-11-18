// var a;
// const b = 1;
// let a;

// a = 2;
// a = 5;

// console.log(a);

// if (a === 0) console.log(a);
// else if (a === 1) console.log(cl);
// else console.log(b);

// a === 0 ? console.log(a) : a === 1 ? console.log(cl) : console.log(b);

// for (let a = 0; a < 6; a++) {
//   console.log(a);
// }

// let a = 0;
// while (a < 5) {
//   console.log(a++);
// }

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 0);

// let a = null

// console.log(b);

// let b = false;
// let a = null;

// if (a || b) {
//   console.log(123);
// }

// function aa(a, b) {
//   return a + b;
// }

// aa("asdfkljas", 2);

// let arr = [
//   2,
//   "adfasdf",
//   [1, 2, 4, "asdf"],
//   true,
//   1.87,
//   null,
//   undefined,
//   { name: "jhon" },
// ];

// for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// console.log(obj.arr[1]);

// const api = [
//   {
//     id: 1,
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
//   {
//     name: "jhone",
//     age: 23,
//     email: "jhon@gmai.com",
//     password: "1234567890",
//   },
// ];

// // function add(a, b) {
// //   const sum = a + b;
// //   return sum;
// // }

// const add = (a, b) => a + b;

// // console.log(add(1, 2));

// let obj = {
//   name: "jhon deo",
//   age: 12,
// };

// const myFun = (a, b) => {
//   console.log(a);
//   console.log(b);
// };

// myFun(3, () => {
//   return 5;
// });

let i = 0;
const myInterval = setInterval(() => {
  console.log(i++);
  if (i === 12) {
    clearInterval(myInterval);
  }
}, 1000);

const myTimeout = setTimeout(() => {
  console.log("This is timeout");
}, 2000);
clearTimeout(myTimeout);

const api = [
  {
    id: 1,
    name: "jhone",
    age: 23,
    email: "jhon@gmai.com",
    password: "1234567890",
  },
];

// const jsonData = JSON.stringify(api);
// console.log(jsonData);

const obj = JSON.parse(api);
