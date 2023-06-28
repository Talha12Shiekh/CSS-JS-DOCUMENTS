//        now its time for modern javascript

//        feaatures of ecma script 2015 also known as es6

//        let vs const vs var 

// var myname = 'talha' ;
// console.log(myname);

//  myname = 'shiekh' ;
// console.log(myname);


// let myname = 'talha' ;
// console.log(myname);

//  myname = 'shiekh' ;
// console.log(myname);// 

// const myname = 'talha' ;
// console.log(myname);

//  myname = 'shiekh' ;
// console.log(myname);// 









// var ==> function scope 
// let and const  ==> block scope 



// function biodata(){
//     let firstname = "talha";
//     console.log(firstname); 
//     if(true){
// let lstname = "shiekh";
// console.log("inner " + lstname);
// console.log("inner " + firstname);
//     }
//     console.log("innerouter " + lstname);
// }
// // console.log(firstname);

// biodata();

































// template literals (template strings)

// javascript program to print table for a givevn umber 8?


// for(var num = 1; num <= 10; num++ ){

    // var table = 12;
    // // console.log( table + " x " + num + " = " + table * num);
    // console.log(` ${table} x ${num} = ${table * num}`);
// }




















// default parameters
// defailt fuction parameters allow named parameters to be 
// initialized with default value if no value or undefined is passed




// function mult(a,b=4){
// return a*b;
// }
// console.log(mult(34));























// fat arrow function 

// a normal way of writing function

// function sum(){
//     let a = 5; b = 6;
//     let sum = a+b;
//     return `the sum of two values is ${sum}`;
// }

// now comverting it into arrrow function

// const sum = () => 
//     // let a = 5; b = 6;
//     // let sum = a+b;
//     // return `the sum of two values is ${(a=5) + (b=6)}`;
//      `the sum of two values is ${(a=5) + (b=6)}`;

// console .log(sum());










// destructing in es6
// the destructing assignment synatx is a javascrit expression 
// that makes it possible to unpack values from arrays
// or properties from Objects into distinct variables

// array destructing

// const mybiodata = ["talha", 'shiekh', 16]

// let myfname = mybiodata[0];
// let mylname = mybiodata[1];
// let myage = mybiodata[2];


// let [myfname,mylname,myage] = mybiodata;
// console.log(myage);



// we can add values to 

// let [myfname,mylname,myage,mydegree = "10class"] = mybiodata;
// console.log(mydegree);






// Object destructig
// const Object = {
//     myname : 'talha',
//     mynname : "shiekh",
//     myage : 16
// }

// let myage = Object.myage;
// console.log(myage);


// let {myfname,mylname = "k shiekh",myage,mydegree = "10class"} = Object;
// console.log(mylname);






// Object properties 
// we can now use dynamic properties


// let myname = "talha ";
// const mynams = {
//     [myname] : "k shiekh",
//     [10 + 6] : "is my age"
// }
// console.log(mynams);


// no need to write key and value if both are same


// let myname = 'talha';
// let myage = 16;

// const mybiodata = {
//     myname,myage
// }
// console.log(mybiodata);










// spread operator

// const color = ['red' , 'blue' , 'green' , 'purple' , 'talha' , 'shikeh'];

// const colors = ['red' , 'blue' , 'green' , 'purple','yellow' , 'orange' ];

// 2 nd time add onse more color on top and tell we need to write it again
// on colors array too 


// const myfavcolors = [...color,'yellow' , 'green']


// console.log(myfavcolors);












// es7  features

// 1: array includes

// const color = ['red' , 'blue' , 'green' , 'purple' , 'talha' , 'shikeh'];
// const ispresesnt = color.includes('fdkdfkd');
// console.log(ispresesnt);






// 2: exponentiation operator (**)

// console.log(2**3);



// es8 features
// String padding
// Object.values()
// Object.enteries()




// let message = "my name is talha".padStart(9);
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));




// const person = {name : "talha",age : 16};
// console.log(Object.entries(person));
// //  console.log( Object.values(person));







// es2018

// const person = {name : "talha",age : 16,degere : "10class"};
// const sperson = {...person,name1 :"shiekh"};

// console.log(person);
// console.log(sperson);











// es2019

// how to flatten an Array



// const arr = [
//     ["zone1","zone1"],
//     ["zone1","zone1"],
//     ["zone1","zone1"],
//     ["zone1",["zone1",["zone1","zone1"], ["zone1","zone1"], ["zone1","zone1"]]],
// ];
// let flararr = arr.reduce((accum,currvalue) => {
//     return accum.concat(currvalue);
// })
// console.log(arr.flat(Infinity));
// console.log(arr.flat(Infinity));
// Array.prototype.{flat,flatmap}




// Object.fromEntries();

// const person = {name : "talha",age : 16};
//  const arrobj = Object.entries(person);
// console.log(Object.fromEntries(arrobj));









// let a = "      talha     ";
// console.log(a.trimStart(4));


// es2020
// 1:bigint
// let oldnum = Number.MAX_SAFE_INTEGER;
// console.log(oldnum);
// console.log(oldnum + 15);
// console.log(9007199254741006n + 15n);
// const letnum = 9007199254741006n + 12n;
// console.log(letnum);
// console.log(typeof letnum);

// const fooo = nul ?? 'default strung';
// console.log(fooo);







// es2014
// "use strict";
//  let x = "3.14";
// console.log(x);







                    // advanced javascript finished



