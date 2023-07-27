"use strict";
// // const msg = function () {
// //   console.log("hey this is meghna");
// // };
// // // console.log(msg);
// // setTimeout(msg, 1000);
// // const funcdec = function (birthyear) {
// //   return birthyear - 2023;
// // };
// // console.log(funcdec(1998));

// // const inmportantaction = function (username, cb) {
// //   setTimeout(() => {
// //     cb(`${username} has subscribed`);
// //   }, 1000);
// // };
// // const likethevedio = function (vedio, cb) {
// //   setTimeout(() => {
// //     cb(`subcribe to ${vedio}`);
// //   }, 1000);
// // };
// // const sharethevedio = function (vedio, cb) {
// //   setTimeout(() => {
// //     cb(`share the ${vedio}`);
// //   }, 2000);
// // };
// // const msg = inmportantaction("megh", (msg) => {
// //   console.log(msg);
// //   likethevedio("javascript vedio", (action) => {
// //     console.log(action);
// //     sharethevedio("javascript vedio", (action) => {
// //       console.log(action);
// //     });
// //   });
// // });
// function inmportantaction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve(`${username} has subscribed`);
//       reject("failed");
//     }, 1000);
//   });
// }
// function likethevedio(vedio) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe the ${vedio}`);
//     }, 1000);
//   });
// }
// // inmportantaction("meghna")
// //   .then((res) => console.log(res))
// //   .catch((err) => console.error(err));
// // likethevedio("javascript vedio")
// //   .then((res) => console.log(res))
// //   .catch((err) => console.error(err));
// const result = async () => {
//   const msg1 = await inmportantaction("megh");
//   console.log(msg1);
// };

// result();
// const user = {
//   name: "piyush",
//   age: 24,
// };
// console.log(JSON.stringify(user));
// console.log(JSON.parse(JSON.stringify(user)));
// function fn(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }
// console.log(fn(5)(6));
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }
// console.log(add(2)(3)());
// const msg = function () {
//   console.log("hello this is");
// };
// setTimeout(msg, 1000);
// const inmportantaction = function (username, cb) {
//   setTimeout(() => {
//     cb(`${username} has subscribed`);
//   }, 1000);
// };
// const message = inmportantaction("meghna", (msg) => {
//   console.log(msg);
// });
// function inmportantaction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${username} has subsc`);
//     });
//   });
// }
// inmportantaction("meghna")
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const sub = new Promise((resolve, reject) => {
//   setInterval(() => {
//     const result = false;
//     if (result) resolve("subscribed");
//     else reject(new Error("not"));
//   }, 1000);
// });
// sub.then((res) => console.log(res)).catch((err) => console.error(err));
// const person = {
//   name: "xyz",
//   age: 23,
//   hello: function (param) {
//     console.log(this.name + "says hello" + param);
//   },
// };
// const altobj = {
//   name: "meghna",
// };
// console.log(person.hello.call(altobj, "world"));
// console.log(person.hello.apply(altobj, ["world"]));
// const newarray = person.hello.bind(altobj);
// console.log(newarray("world"));

// const arr = [1, 2, 3, 4];
// const multiplytwo = arr.map((par) => {
//   return par * 2;
// });
// console.log(multiplytwo);
// const arr1 = [1, 2, 3, 4];
// const morethantwo = arr1.filter((par) => {
//   return par > 2;
// });
// console.log(morethantwo);
// const arr2 = [1, 2, 3, 4];
// const sum = arr2.reduce((acc, curr, i, ar) => {
//   return acc + curr;
// }, 0);
// console.log(sum);
// fn();
// let x;
// function fn(param) {
//   console.log(`${x} is a number`);
// }

// var x = 6;
// var y = "6";
// if (x === y) {
//   console.log("both are equal");
// }
// var x = "hi";
// console.log(x);
// var x = "hello";
// console.log(x);
// var x = 3;
// var y = "thre3";
// console.log(x - y);
// var x = "hello";
// var y = "hey";
// var z = undefined;
// console.log(x || y);
// console.log(typeof isNaN("Hello"));
// (function () {
//   setTimeout(() => {
//     console.log("hello");
//   }, 1000);
// })();

// function higherOrder(fn) {
//   fn();
// }
// higherOrder(function () {
//   console.log("hello");
// });
// function high() {
//   return function () {
//     console.log("helll");
//   };
// }
//  const x=high();
// x
// const person = {
//   name: "xyz",
//   age: 23,
//   hello: function (param) {
//     console.log(this.name + "" + "says hello " + param);
//   },
// };
// const altobj = {
//   name: "megh ",
// };
// const newobj = person.hello.bind(altobj);
// console.log(newobj("world"));
// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }
// console.log(sum(8)(8)(9)());
// function fn(a) {
//   return function (b) {
//     if (b) return fn(a + b);
//     return a;
//   };
// }
// console.log(fn(2)(4)(9)());

// const cbex = setTimeout(() => console.log("hey this callback"), 1000);
// console.log(cbex);

// function add(number) {
//   if (number <= 0) {
//     return 0;
//   } else {
//     return number + add(number - 1);
//   }
// }
// console.log(add(3));

// function Person(name, gender, age) {
//   (this.name = name), (this.age = age), (this.gender = gender);
// }
// const person1 = new Person("vivk", "male", 67);
// console.log(person1);

// function addNode() {
//   var newP = document.createElement("p");
//   var textNode = document.createTextNode(" This is other node");
//   newP.appendChild(textNode);
//   document.getElementById("parent1").appendChild(newP);
// }

// call apply Bind manipulate context
// const obj1 = {
//   name: "xyz",
//   age: 23,
//   hello: function (thing) {
//     console.log(this.name + "says hello" + thing);
//   },
// };
// const contextobj = {
//   name: "megh",
// };
// const out1 = obj1.hello.call(contextobj, "world");
// const out2 = obj1.hello.apply(contextobj, ["world"]);
// console.log(out1);
// const out = obj1.hello.bind(contextobj);
// const newfun = out("goobe");
// console.log(newfun);

// map filter reduce
// const arr = [1, 2, 3];
// const multiplytwo = arr.map((param) => {
//   return param * 2;
// });
// console.log(multiplytwo);

const arr1 = [1, 2, 3, 4];
const morethantwo = arr1.filter((param) => {
  return param > 2;
});
console.log(morethantwo);

const arr3 = [1, 2, 3];
const sum = arr3.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum);
