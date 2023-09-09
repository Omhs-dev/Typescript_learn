"use strict";
// let a: any;
// let u: unknown;
// a.splice();
// // u.splice();
// //arrays
// const string = ['Omhs', 'typescript'];
// string.push('javascript');
// const numbers = [23, 4, 14];
// numbers.push(9);
// //mixed array
// const mixed = ['Omhs', 4, 'hello'];
// mixed.push('hello');
// mixed.push(6);
// let person = {
//     name : "John",
//     age : 32,
// }
// person.name = "Omhs";
// person.age = 45;
// person = {
//     name : "Omhs",
//     age : 34,
// }
// //explicit types
// let handle: string;
// let ages: number;
// let presence: boolean;
// handle = "John";
// ages = 34;
// presence = false;
// // union types
// let mixe: (string | number | boolean)[] = [];
// mixe.push("test");
// mixe.push(23);
// mixe.push("hello");
// mixe.push(false);
// //any type
// let surname: any = "Omhs";
// surname = true;
// surname = "hello";
// surname = {agess: 23};
//funtion basics
let funtionOne;
funtionOne = () => {
    console.log("hello One");
};
funtionOne();
const functionTwo = (a, b) => {
    console.log(a + b);
};
functionTwo(3, 4);
