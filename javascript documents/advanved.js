// advanced javascript

// 1:event propagation (event bubbling and event capturing)

// check html file 

// 2:// high order function

// function which takes another function as an argument is callled hof 
// wo function jo dusray function ko as argument accept krta hai 

// 3:callback function 
// function that get passed to an argument to another function is called cbf
// a callback function is a function that is passed as an argument to 
// another function to be 'called back' at a  later time
// jis bhi function ko ham kisi or function ke under arguments paseed 
// krte hain then usko hum callback function boltay hain 

// we need to create a calculator


// const add = (a,b) =>{
//     return a+b;
// }
// const multi = (a,b) =>{
//     return a*b;
// }
const subs = (a,b) =>{
    return Math.abs(a-b);
}


// const calculator = (num1,num2,operator) =>{
// return operator(num1,num2);
// }
// //  calculator(3,2,subs);

//  console.log(calculator(3,2,subs));






// hoisting in javascript

// we have a creation phase and an execution phase 
// hoisting in javscript is a mechanism where variables and functions
// declarations are moved to the top of their scope before the function executes

// for example
// console.log(myname);
// var myname;
// myname = 'talha';

// how it will be in output during creation phase
// var mynaem = undefined;
// console.log(mynaem);
// mynaem = 'talha';



// in es2015 hoisting is avoided by using let keyword
// instead of var (the other difference is that variables declared)
// with let arelocal to the surrounding block not the entirr function







// scope chain and lexical scoping in javascript

// the scope chain is used to resolve the value of variable name in js 

// scope chain in js is lexically defined which means that we can see what the scope chain will be by looking at the code 

// at the top we have the glbal scope which is the window Object in the browser

// lexical scopping means now the inner function can get access to their parent function variables b ut the viceversa is not true 


// for examples 

// let a = "hello world"; // global scope

// const first = () =>{
//     let b = 'how are you';

// const second = () =>{
//     let c = 'hi iam fine thank you';
//     // console.log(a+b+c);
// }

// second();
// console.log(a+b+c);
// }

// first();





// what is closure in javascript

// a closure is the combination of a function bundled together (enclosed) with references to its local enviroment

// in other words a closure gives you 
// access to an outer function a scope you from an inner function

// in javascript closure are crerated every time a function is created at function creation time 

// for example

// const outerfun = (a) =>{
//     let b = 10;
//     const innerfun = () =>{
//         let sum = a+b;
//         console.log(`the sum of the inner and the outer function is ${sum}`);
//     }
//     innerfun();
// }
// outerfun(5);


// it same like lexicall spring 

// one more example


// const outerfun = (a) =>{
//     let b = 10;
//     const innerfun = () =>{
//         let sum = a+b;
//         console.log(`the sum of the inner and the outer function is ${sum}`);
//     }
//      return innerfun;
// }
// let checkclsr = outerfun(5);
// console.dir(checkclsr);




// uses strict mode 
//   'use strict'
// x = "talha";
// console.log(x);




// syncchronus and asyncchronus javascriptt

// syncchronus javascript
//  const fun2 = () =>{
//      console.log(`function 2 is called`);
//  }

//  const fun1 = () =>{
//      console.log(`function 1 is called`);
//      fun2();
//      console.log(`function 1 is called again`);
//  }

// fun1();

// asyncchronus javascriptt

//  const fun2 = () =>{
//      setTimeout(() =>{
//         console.log(`function 2 is called`);
//      },2000);
     
//  }

//  const fun1 = () =>{
//      console.log(`function 1 is called`);
//      fun2();
//      console.log(`function 1 is called again`);
//  }

// fun1();









// curyying technique

// const sum = (num1) =>{
//     // console.log(num1);
//     return function(num2) {
//         // console.log(num1,num2);
//         return function(num3) {
//             console.log(num1+num2+num3);
//         }
//     }
// }

// sum(5)(3)(8);



// in short form 

// const sum = (num1) => (num2) => (num3) =>  console.log(num1+num2+num3); 

// const sum1 = (num1) => (num2) => (num3) => console.log(num1*num2*num3); 

// sum(5)(3)(8);
// sum1(5)(3)(8);













// call back hell the thing we want to avoid by using call back hell function

// setTimeout(() => {
//     console.log('work 1 is done');
//     setTimeout(() => {
//         console.log('work 2 is done');
//         setTimeout(() => {
//             console.log('work 3 is done');
//             setTimeout(() => {
//                 console.log('work 4 is done');
//                 setTimeout(() => {
//                     console.log('work 5 is done');
//                     setTimeout(() => {
//                         console.log('work 6 is done');
//                     }, 1000);
//                 }, 1000);
//             }, 1000);          
//         }, 1000);
//     }, 1000);
// }, 1000);













// bonus JSON

// JSON.stringify turns a javascript Object into JSON text and stores that JSON text in a string,eg 


var myobj = {key1 : 'talha', key2 : 'shiekh'};


var Objectasstring = JSON.stringify(myobj);

console.log(Objectasstring);

console.log( typeof  Objectasstring);
// it will be a String

// to convert it into object we will use 

var Objectasstring = JSON.parse(myobj);

console.log(Objectasstring);

  

























