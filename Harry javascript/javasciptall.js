// ********************************************************************************

//                         promises in javascript 

// ********************************************************************************
// function talha() {
// return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = true;
//             if (!error) {
//                 // console.log("your problem has been resolved");
//                 resolve('congradulations');
//             }
//             else {
//                 // console.log("your problem has not been resolved");
//                 reject('sorry try it again');
//             }
//         }, 2000);
//     })
// }
// talha().then(function (resolve) {

//     // console.log("thanks for resolving my problem " + resolve);
// }).catch(function (error) {
//     // console.log("your problem is rejected " + error);
// })




// ***********************************************************

//             async await in javascript

// ***********************************************************


//     async  function talha() {
//         // console.log("inside the function");
//         let response = await fetch("https://icanhazdadjoke.com");
//         // console.log("after exexuting fetch api");
//         let users = await response.json();
//         // console.log("users resolved");
//         return data;
//         // return "talha shiekh";
//     }
// // console.log("before calling the function");
// let a = talha();
// // console.log("after calling the function");
// // console.log(a);
// a.then((data) => {
//     // console.log(data);
// })
// // console.log("last line of  the function");






// ********************************************************************************

//                         destructing in javascript 

// ********************************************************************************

// console.log("learning destructring in javascript");

// let a,b;
// [a,b] = [34,56];
// // console.log(a,b);

// [a,b,c,...d] = [1,2,3,4,5,6,7,8,9,10];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// ({a,b,c,...d}={a:34,b:45,c:56,d:67,e:78});
// console.log(a,b,c,d);

//Array destructring
// let jsbranches = ["React js","Vue js","Kaboom js"];
// [a,b,c,d="angular"] = jsbranches;
// // console.log(a,b,c,d);

// //Object destructring
// let jsBranches = {
//     first :"React js",
//     second : "Vue js",
//     third : "Kaboom js",
//     fourth : "Next js",
//     fifth: function () {
//         console.log("languages finished");
//     }
// }
// let {first ,second ,third ,fourth, sixth="anuglar",fifth} = jsBranches;
// console.log(first ,second ,third ,fourth,sixth,fifth);
// fifth();
// *****************************************************************

//      logs in javascript 

//*************************************************************
// console.time("your code took");
// // console.log("hello console");
// // console.log(34+3);
// // console.log(34);
// // console.log(!true);
// // console.log(true);
// // console.log([1,2,3]);
// // console.log({talha : "cool",marks: 485});
// console.table({talha : "cool",marks: 485});
// console.warn("this is a warning");
// // console.clear();
// console.timeEnd("your code took");
// console.assert(24>596,"your condition is true");
// console.error("this is an error");







// *****************************************************************

//      data types in javascript 

//*************************************************************


// primitive data types in javascript

// string data type 
// let string = "talha";
// // console.log("data type is",(typeof string));


// number data type 
// let number = 34;
// // console.log("data type is",(typeof number));


// // boolean data type 
// let boolean = true;
// // console.log("data type is",(typeof boolean));


// // null data type 
// let null1 = null;
// // console.log("data type is",(typeof null1));


// // undefined data type 
// let undef = undefined;
// // console.log("data type is",(typeof undef));




// Reference data types

// Arrays
// let arr = [1,"talha",true,null,undefined];
// // console.log("data type is",(typeof arr));


// // Objects
// let marks = {
//     khurram: "34",
//     shiekh: "36",
//     harry: "38",
//     talha: "40",
// }
// // console.log("data type is",(typeof marks));


// data Object
// const date = new Date();
// // console.log("data type is",(typeof date));


// // funtion 
// function talha() {

// }
// // console.log("data type is",(typeof talha));



// ************************************************************

//      conversion  in javascript 

//*************************************************************


// let myvar = 34;

// // String()method is useed to convert anything into string 
// myvar = String(34);
// // console.log(myvar ,(typeof myvar));

// let boolean = true; 
// boolean = String(true);
// // console.log(boolean ,(typeof boolean));


// let date = new Date(); 
// date = String(date);
// // console.log(date ,(typeof date));

//                     // or 
// let date1 = String(new Date()); 
// // console.log(date1 ,(typeof date1));


// let arr = String([1,2,3,4,5]);
// // console.log(arr.length ,(typeof arr));
// // // console.log(arr ,(typeof arr));


// let i = 35;
// // console.log(i.toString() ,(typeof date1));



// to convert a string into number 

// let str = Number("3434");//3434
// str = Number("talha");//NaN
// str = Number(false);//0 
// str = Number([1,2,3,4,5,6]);
// // in javascsript 0 stands for false and 1 stands for true 
// // console.log(str, (typeof str));


// // let number = parseInt('34.0876');
// let number = parseFloat('34.0876');
// // console.log(number.toFixed(6), (typeof number));


// ************************************************************

//      coresion in javascript 

//*************************************************************

// let mymarks = Number("34");
// // let mymarks = "34";
// let mygrades = 23;

// // console.log(mymarks + mygrades);//3423




// ************************************************************

//      string properties and methods in javascript 

//*************************************************************


// // console.log("i am learning string properties and methods");
// let name = "talha";
// let greeting = "good morning";

// // console.log(greeting + " " + name);

// let html;
// html = "<h1>this is my Heading</h1> " + 
// "<p>this is my paragraph</p>";
// // console.log(html);
// // console.log(html.concat("talha"," shiekh"));
// // console.log(html.toLowerCase());
// // console.log(html.toUpperCase());



// // console.log(html[0]);
// // console.log(html.indexOf("paragraph"));
// // console.log(html.lastIndexOf("h1"));
// // console.log(html.charAt(42));
// // console.log(html.endsWith("</p>"));
// // console.log(html.includes("is"));
// // console.log(html.substring(42,51));//returns the string which starts and ends between the written number
// // console.log(html.substring(-1));// returns the whole string
// // console.log(html.slice(0,-1));
// // console.log(html.split('is'));// makes an array anywhere that number is in your string which you have written

// // console.log(html.replace("<h1>","<p>"));


// let name = "talha";
// let subname = "shiekh";
// let fruit = "mango";
// let screen = `<h1> my "name" is ${name} my "subname" is ${subname}
//  my favourite "fruit" is ${fruit}`;
// //  document.body.innerHTML =  screen;
// // console.log(screen);


// quick quiz of harry 
// let literal = `"talha"`;
// // console.log(literal);




// ************************************************************

//      arryays and objects in javascript 

//*************************************************************


// // console.log("learning arrays and objects in js");

// // let marks = [23,34,56,778,123];
// let fruits = ['mango','orange','banana','strawbery','apple'];
// let mixed = [1,2,3,"str","talha",[4,5,6]];

// let arr = new Array(12,34,56,'kiwi');

// // console.log(marks);
// // console.log(mixed);
// // console.log(arr);

// // console.log(fruits[1]);
// // console.log(fruits.length);
// // console.log(Array.isArray(fruits));// tells that it is array or not


// fruits[0] = "talha";
// let newvar = fruits[0];
// // console.log(newvar);

// let index = fruits.indexOf("apple");
// // console.log(index);

// // console.log(fruits);
// mutating or modiying an arrary 
// fruits.push(12);
// fruits.unshift(12);
// fruits.pop();
// fruits.shift();
// fruits.splice(0,3);
// fruits.reverse();
// // console.log(fruits);


// let marks2 = [45,98,67];
// fruits = fruits.concat(marks2);
// // console.log(fruits);

// objects
//  let myobj = {
//     'nicknname' : "shiekh",
//     name : "talha",
//     class : 10,
//     school : "dar e arqam",
//     marks : 485,
//  } 

// // console.log(myobj.class); 
// // or
// // console.log(myobj['class']); 
// // console.log(myobj['myname']); 


// ************************************************************

//      if else or condittional methods in javascript 

//*************************************************************

// let age = '18';
// age = +age;
// let classs  = 10;
// let name = "talha";

// if (!name) {
//     // console.log("hi bi");
// }
// else{
//     // console.log("nothing");
// }

// if (typeof var1 !== "undefined") {
//     // console.log("it is defined");
// }
// if(typeof var1 == "undefined"){
//     // console.log("it is not defined");
// }
// else if(var1 == 12){
//     // console.log("succes");
// }
// else{
//     // console.log("your all conditions are invalid");
// }

// if (name == "talha" || classs == 13 || age == 18) {
//     // console.log("all are true");
// } else {
//     // // console.log("one is false");
// }

// let ternary = 12;
// // console.log(ternary === 12? "your ans is true" : "your ans is false");

// switch ( ternary = 16){
//     case 15:
//         // console.log("your ans is 15");
//         break;
//     case 16:
//         // console.log("your ans is 16");
//         break;
//     case "talha":
//         // console.log("your are talha");
//         break;

//     default:
//         // console.log("your all conditions are invalid");
//         break;
// }



// / ************************************************************

//               loops in javascript 

//*************************************************************

// // console.log("we are learning loops of javscript");

// general three kinds of loop : for loop,while loop , dowhile loop 

// let a = 34;
// a += 1;
// a++;
// // console.log(a);
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         i++;
//         continue;
//     }
//     // console.log(i + 1);
// }
// // console.log("breaked");


// let k = 0;

// while (k<10) {
//     // console.log(k);
//     k++; // k += 1;
// }


// let j = 0;
// do {
//     // console.log(j + 1);
//     j++; 
// } while (j<10);



// foreach 
// let arr = [2,4,6,8,9];

// using for 
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     // console.log(element);
// }


// arr.forEach(function (element,index,array) {
//     // // console.log(element,index,array);

// })


// let obj = {
//     name : "talha",
//     age : 16,
//     type : "beginner",
// }

//     for (let key in obj) {
//         // console.log(`the ${key} of object is ${obj[key]}`);
// }   



// / ************************************************************

//               functions in javascript 

//*************************************************************


// // console.log("learning functions in javascipt");
// function gift(string, thanks) {
//    let inside =  // console.log(`thank for your service ${string} ${thanks}`);
//    return inside;
// };
// // gift("talha","thank your");
// let gift1 = gift("talha","thanks a lot");
// // console.log(gift1);


// let add1 = function(speed,time) {
//     return speed*time;
// }
// var distance = add1(3,4);
// // console.log(distance);

// let obj = {
//     name : "talha",
//     game : function () {
//         return `gta`;   
//      }
// }
// // console.log(obj.game());



// / ************************************************************

//               window object in javascript 

//*************************************************************
// // console.log("learning window object in javascipt");


// let a = window.document;
// let a = window.innerHeight;
// let a = window.innerWidth;
// a = scrollX;
// a = scrollY;
// a = location.toString();
// alert("hi how are you");

// a = prompt("you should leave this place otherwise typeyour name ")

// a = confirm('are you sure you do not want to leave this place');
// // console.log(a);




// / ************************************************************

//    localestorage and session storage  in javascript 

//*************************************************************

// // console.log("learning local storage in javascript");

// localStorage.clear();

// let fruits = ["apple","banana" ,"strawbery"];
// let fruitsobj = {
//     mango : "yellow",
//     banana : "yellow and black",
//     strawbery : "pink",
// }

// // adding a value inside localstorage
// localStorage.setItem('name','talha');
// localStorage.setItem('nickName','shiekh');

// let gettting = localStorage.getItem('name');
// // // console.log(gettting);

// localStorage.setItem('fruits are',JSON.stringify(fruits));

// let convert = JSON.parse(localStorage.getItem('fruits are'));
// // console.log(convert);

// localStorage.setItem("key",JSON.stringify(fruitsobj));

// let objconvert = JSON.parse(localStorage.getItem('key'));
// // // console.log(objconvert);

// localStorage.removeItem('name');

// sessionStorage.setItem('sessionName', 'talha');
// sessionStorage.setItem('sessionName2', 'shiekh');
// sessionStorage.setItem('sessionfruits', JSON.stringify(fruits));

// let session = JSON.parse(sessionStorage.getItem('sessionfruits'))
// // console.log(session);

// sessionStorage.removeItem('sessionName');





// / / ************************************************************

//    Math object  in javascript 

//*************************************************************

// // console.log("learning math object in javscript");

// let x = 3;
// let y = 9;

// let a;
// a = x + y;
// a = x - y;
// a = x * y;
// a = x / y;

// a = Math;
// a = Math.PI;
// a = Math.E;
// a = Math.round(5.5);
// a = Math.ceil(5.1);
// a = Math.floor(-5.9);
// a = Math.sqrt(16);
// a = Math.pow(2, 3);
// a = Math.min(2, 3, 4, 5, 6, 7, 8);
// a = Math.max(2, 3, 4, 5, 6, 7, 8);
// a = Math.random();
// a = 100 * Math.random();// if i want to get a random value till 100
// a = Math.floor(50 + (100 - 50) * Math.random());// if i want to get a random between 50 and 100
// a = Math.log(3);
// a = Math.sin(2);
// e =2.718
// a = Math.exp(2);
// // console.log(a);

// 1
// 2.8
// 2
// 3
// 0
// -1
// -2
// -2.8
// -3


// ********************************************************

//         Date object  in javascript 

//*********************************************************

// // console.log("Date object  in javascript");

// let today = new Date();
// // // console.log(typeof today);
// let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
// // console.log(otherDate);
// let d;
// d = otherDate.getDay();
// d = otherDate.getDate();
// d = otherDate.getMinutes();
// d = otherDate.getSeconds();
// d = otherDate.getHours();
// d = otherDate.getTime();
// d = otherDate.getMilliseconds();
// d = otherDate.getMonth();
// // // console.log(d);
// otherDate.setDate(23);
// otherDate.setMonth(0);
// otherDate.setFullYear(1900);
// otherDate.setMinutes(2);
// otherDate.setHours(1);
// otherDate.setSeconds(3);
// // console.log(otherDate);


// / ********************************************************

//       object oriented  in javascript 

//*********************************************************

// // console.log("learning object oriented programming");

// object literal for creating objects
// let car = {
//     name: "corollla",
//     topspeed: 90,
//     run: function () {
//         // console.log("car is running");
//     }
// }

// // creating a constructor for cars 
// function generalcar(name, speed) {
//     this.givenname = name,
//         this.topspeed = speed,
//         this.run = function () {
//             // console.log(`${this.givenname} is running`);
//         }
//     this.analyze = function () {
//         // console.log(`this car is slower ${500 - this.topspeed} by than  mercedis`);
//     }
// }
// let car1 = new generalcar('wagonr', 180);
// let car2 = new generalcar('corolla', 280);
// let car3 = new generalcar('city', 380);
// // console.log(car3);

// // console.log(car);


// ********************************************************

//          object prototypes in javascript 

//*********************************************************

// // console.log("learning object prototypes in javascript");

// let obj = {
//     name: "talha",
//     channel: "shiekh palace",
//     address: "jupiter"
// }
// // making constructor
// function constructor(givenname) {
//     this.name = givenname;
// }

// constructor.prototype.getname = function () {
//     return this.name;
// }

// constructor.prototype.Setname = function (setname) {
//     this.name = setname;
// }

// let obj2 = new constructor("shiekh");
// // console.log(obj2);

// ********************************************************

//         prototypes inheritance in javascript 

//*********************************************************

// // console.log("learning prototypes inheritance in javascript");

// const proto = {
//     slogan : function () {
//         return `this company is the best`;
//     },
//     changename : function (name) {
//         this.name = name;
//     }
// }

// const talha = Object.create(proto);
// talha.name = "harry";
// talha.role = "beginner";
// talha.changename("talha shiekh");


// const talha = Object.create(proto , {
//     name : {value : "talha",writable: true},
//     role : {value : "beginner"}
// });
// talha.changename("shiekh");
// // // console.log(talha);



// function employee(name,salary,experience) {
//     this.name = name;
//     this.salary = salary;
//     this.experience = experience;
// }
// employee.prototype.slogan = function () {
//     return `this company is the best ${this.name}, regards`;
// }

// // let talhash = new employee("talha",200, 1);
// // // console.log(talhash);

// function programmer(name,salary,experience,language) {
//     employee.call(this,name,salary,experience);
//     this.language = language;
// } 

// programmer.prototype = Object.create(employee.prototype);

// // manually setting the constructor
// programmer.prototype.constructor = programmer;

// let shiekh = new programmer("shiekh",200, 1,"javscript");
// // // console.log(shiekh);


// // quiz of harry 

// function flour(egg,bakingpowder,whitesugar) {
//     this.egg = egg;
//     this.bakingpowder = bakingpowder;
//     this.whitesugar = whitesugar;
// }

// flour.prototype.slogan = function () {
//     return `this cake is the best ft ${this.whitesugar}`;
// }

// let make = new flour(2,300,7);
// // // console.log(make.slogan());


// function cake(egg,bakingpowder,whitesugar,water,oven) {
//     flour.call(this,egg,bakingpowder,whitesugar);
//     this.water = water;
//     this.oven = oven;
// }

// cake.prototype = Object.create(flour.prototype);

// cake.prototype.constructor = cake;

// let cooking = new cake(12,2,2,"1glass",1);
// // console.log(cooking);


// ********************************************************

//         ES6 Classes and Inheritance in javascript 

//*********************************************************

// console.log("learning ES6 Classes and Inheritance in javascript");

// class employee {
    // constructor(name, experience, division) {
    //     this.name = name;
    //     this.experience = experience;
    //     this.division = division;
    // }
    // slogan() {
    //     return `this company is the best regards ${this.name}`
    // }

    // joiningyear() {
    //     return 2020 - this.experience;
    // }

    // static add(a, b) {
    //     return a + b;
    // }
// }

// let talha = new employee('talha',54,'division');
// // console.log(talha);
// // console.log(employee.add(32,1));

// class programmer extends employee {
//     constructor(name, experience, division, language) {
//         super(name, experience, division);
//         this.language = language;
//     }
//     favouritelanguage() {
//         if (this.language == "python") {
//             return `"python"`;
//         }
//         else {
//             return `"javscript"`;
//         }
//     }
//     static multiply(a, b) {
//         return a * b;
//     }
// }
// let shiekh = new programmer("shiekh", 40, "rightdivison", "c language");
// console.log(shiekh);
// // console.log(shiekh.favouritelanguage());
// console.log(programmer.multiply(2,3));


// / ********************************************************

//         asynchronus programming in javascript 

//*********************************************************

// console.log("learning asynchronus programming in javascript");

// setTimeout(() => {
//     for (let i = 0; i < 4; i++) {
//         const element = i;
//         console.log("this is index number " + element);  
//     }
// }, 100);

// console.log("done printing");

// / ********************************************************

//         learning ajax in javascript 

//*********************************************************

// console.log("learning ajax in javascript");

// let fetchbtn = document.getElementById('fetchbtn');
// fetchbtn.addEventListener('click', buttonclickhandler);

// function buttonclickhandler() {
//     console.log("you have clicked the fetchbtn");
//     // making an xhr object
//     const xhr = new XMLHttpRequest();

//     // open the object
//     // xhr.open('GET', 'talha1.txt', true);

//     //use this for POST request
//     xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
//     xhr.getResponseHeader('content-type', "application/json")
//     // xhr.getResponseHeader('content-type',"application/x-www-forms-urlencoded")

//     //use this for get request
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

//     //what to do on progress(optional)
//     xhr.onprogress = function () {
//         console.log("on progress");
//     }

//     // xhr.onreadystatechange = function () {
//     //     console.log("ready state is ",xhr.readyState);
//     // }


//     // what to do when the response is ready
//     xhr.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText);
//         }
//         // else {
//         //     console.log("some error ocurred");
//         // }
//     }
//     // sending the request
//     parms = `{"name":"test4567","salary":"123","age":"23"}`;
//     xhr.send(parms);
//     console.log("we are done!");
// }

// let populate = document.getElementById('backupbtn');
// populate.addEventListener('click', populatehandler);


// function populatehandler() {
//     console.log("you have clicked the pophandler");
//     // making an xhr object
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             let list = document.getElementById('listis');
//             str = "";
//             for (key in obj)
//              {
//                 str += `<li>${obj[key].employee_name}</li>`;
//             }
//             list.innerHTML = str;
//         }
//     }
//     xhr.send();
//     console.log("we are done fetching employess");
// }

// console.log("exercise solution ");

// create a library class and implement the following:
/*
constructor must take the book list as an argument
getbooklist()
issuebook(bookname,user)
returnbook(bookname)
*/

// class Library {
//     constructor(booklist) {
//         this.Booklist = booklist;
//         this.givenbooks = {};
//     }
//     getbooklist() {
//         this.booklist.forEach(element => {
//             console.log(element);
//         });
//     }
//     issuebook(bookname, user) {
//         if (this.givenbooks[bookname] == undefined) {
//             this.givenbooks[bookname] = user;
//         }
//         else {
//             console.log("your book has already been issued");
//         }
//     }
//     returnbook(bookname) {
//         delete this.givenbooks[bookname];
//     }

// }


// console.log("callbacks functions in javascript");

// pretend that this response is coming from server
// const students = [
//     { name: "talha", subject: "javscript" },
//     { name: "shiekh", subject: "python" }
// ]

// function entrollstuents(student,callback) {
//     setTimeout(function () {
//         students.push(student);
//         console.log("students have been enrolled");
//         callback();
//     }, 5000);
// }

// function getstudents() {
//     setTimeout(function () {
//         let str = "";
//         students.forEach(function (student) {
//             str += `<li>${student.name}</li>`
//         });
//         let ul = document.getElementById('students');
//         ul.innerHTML = str;
// console.log("students have been fetched");
//     }, 3000);
// }

// let newstudent = { name: "babar", subject: "cricket" };
// // delete newstudent.name;
// entrollstuents(newstudent,getstudents);
// // getstudents();




// console.log("learning arrow functions in javscript");

// //no need of writing return in one line case
// // const talha =  () =>  "good morning";
// // const talha =  () =>  ({name : "talha"});
// // const talha =  name =>  "good morning " + name;
// const talha =  (name,ending) =>  "good morning " + name + " " + ending;

// console.log(talha("shiekh","bye"));




// console.log("learning fetch api in javascript");
// let mybtn = document.getElementById('mybtn');

// let content = document.getElementById('content');

// function getdata() {
//     url = "talha.txt"
//     fetch(url).then((response) =>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// function getdata() {
//     url = "https://api.github.com/users"
//     fetch(url)
//     .then((response) =>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// }
// getdata();
// function postdata() {
//     url = "	https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"testtalha","salary":"123","age":"23"}';
//     parms = {
//         method : 'post',
//         Headers:{
//             "Content-Type" : "application/json"
//         },
//         body : data
//     }
//     fetch(url,parms).then(response => response.json()).then(data => console.log(data));
// }
// postdata();




// console.log("learning regular expression in js");

let reg = /talha/; // This is a regular expression literal in js
reg = /talha/g; // g means global
reg = /talha/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source);

let s = "This is great code with talha and also talha bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
console.log(result); //---> We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
// let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
// let result3 = s.match(reg) // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
// let result4 = s.search(reg) // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

// let result5 = s.replace(reg, 'SHUBHAM');
// console.log(result5);


// console.log("metacharacters in javascript");

// let regex = /talha/;

// // looking into some metcharacter symbols

// regex = /^tal/; // ^ means "starts with "
// regex = /talha$/; // $ means "ends with" 
// regex = /t.lha/; // . means matches "anyone character"
// regex = /t*lha/; //  matches "any zero or more characters"
// regex = /t?lha?/; //  ? means "optional"
// regex = /tal\*ha/; //  \ means "escape character"



// let str = "talha is talha and there is no one like talha";

// let result = regex.exec(str);
// // console.log(result);

// if (regex.test(str)) {
//     console.log(`the string ${str} matches the expression ${regex.source}`);
// } else {
//     console.log(`the string ${str} does not matches the expression ${regex.source}`);
// }


// console.log("learning regular expressions in javascript");

// let regex = /t[ashk]lha/; // can be a s h or k;
// regex = /t[a-z]lha/;// can be any character from a -z
// regex = /t[^ashk]lha/; // means a s h or k nai hona chahiye or koi bhi ajai
// regex = /t[ashk]lh[ashiekh]/; // can be multiple sets also
// regex = /t[a-zA-Z]lh[ashiekh]/; // can be multiple sets also
// regex = /t[a-zA-Z]lh[ashiekh0-7][1-3]/; // can be multiple sets of numbers also

// // quantifiers
// regex = /tal{2}/; // l can occur exactly two times
// regex = /tal{0,2}ha/; // l can occur exactly 0 to 2 (0 or or 1 or 2) times


// groupings - we use parantheses for (groupings)

// regex = /(tal){2}([0-9]h){3}a/;

// const str = "taltal1h2h3ha shiekh";



//  let result = regex.exec(str);
// console.log(result);

// if (regex.test(str)) {
//     console.log(`the string ${str} matches the expression ${regex.source}`);
// } else {
//     console.log(`the string ${str} does not matches the expression ${regex.source}`);
// }


// console.log("learning shorthand characters in javascript");

// let regex = /\wal/; // word character  - _ or alphabet or numbers
// regex = /\w+1h2/; // \w means one or more word characters
// regex = /\Wshiekh/; // \w means no word characters
// regex = /\W+shiekh/; // \w means more than one  no word characters

// regex = /result \d999/; // \d means digit

// regex = /result \d+/; // \d means digit

// regex = /\D999/; // \D means non digit

// regex = /\D+999/; // \D means more than one  non digit

// regex = /\stalha ka/; // matches whitespace charcters

// regex = /\s+talha ka/; // matches one or more whitespace charcters

// regex = /\Stalha ka/; // / matches non-whitespace charcters

// regex = /\S+talha ka/; // / matches one or more than one non-whitespace charcters

// regex = /result\b/; // / matches one or more than one non-whitespace charcters


// // Assertions
// regex = /re(?=sult)/;
// regex = /re(?!sult)/;


// let str = "hal5&a61h2h3ha $$$@shiekhytalha ka result alhaby999";


// let result = regex.exec(str);
// // console.log(result);

// if (regex.test(str)) {
//     // console.log(`the string ${str} matches the expression ${regex.source}`);
// } else {
//     // console.log(`the string ${str} does not matches the expression ${regex.source}`);
// }



// console.log("learninng iterators in javascript");


function fruitsiterator(values) {
    let nextindex = 0;
    return {
        next: function () {
            if (nextindex < values.length) {
                return {
                    value: values[nextindex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}


// const myarray = ['apples', 'oranges', 'bananas', 'grapes'];
// console.log(myarray);

// const fruits = fruitsiterator(myarray);
// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);


// console.log("learning generators in js");

// function* numbergenerator() {
//     let i = 0;


    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
//     while (i <= 10) {
//         yield i++;
//     }
// }

// let gen = numbergenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);


// console.log("learning for loops in js");

// let jslang = ["react js", "kaboom js", "angular", "vue js", "electron js", "jquery", "next js"];

// purana for loop
// for(let i = 0; i < jslang.length; i++){
//     const element = jslang[i];
//     console.log(element);
// }

// let languages = {
//     first: "javascript",
//     second: "react js",
//     third: "kaboom js"
// };
// for (let i = 0; i < Object.keys(languages).length; i++) {
//     const element = languages[Object.keys(languages)[i]];
//     console.log(element);  
// }

// for(let key in languages){
//     console.log(languages[key]);
// }

// mystring = "this is my string";

// for (let i = 0; i < mystring.length; i++) {
//     const element = mystring[i];
//     console.log(element);
// }

// for(let char in mystring){
//     console.log(mystring[char]);
// }


// jslang = ["react js","kaboom js","angular","vue js","electron js","jquery","next js"];
// for (const language of jslang) {
//     console.log(language);
// }

// console.log("learning maps in javascript");

// const myMap = new Map();
// const key1 = "string", key2 = {}, key3 = function () { };

// myMap.set(key1, "this is a string");
// myMap.set(key2, "this is a blank object");
// myMap.set(key3, "this is a blank function");

// console.log(myMap);
// let value1 = myMap.get(key1);
// console.log(value1);

// for(let [key,value] of myMap){
//     console.log(key,value);
// }
// for(let key of myMap.keys()){
//     console.log(key);
// }
// for(let value of myMap.values()){
//     console.log(value);
// }
// myMap.forEach((value,key)=>{
//     console.log('key is ',key);
//     console.log('value is ',value);
// });
// let myMapArray = Array.from(myMap);
// console.log(myMapArray);
// let mapKeys = Array.from(myMap.keys());
// console.log(mapKeys);
// let mapValues = Array.from(myMap.values());
// console.log(mapValues);


// console.log("learning sets in javascript");

// // set stores unique values
// const mySet = new Set();

// mySet.add('this');
// mySet.add('MyName');
// mySet.add("this"); // ye nai dalay ga dusri dafa
// mySet.add(34);
// mySet.add(false);
// mySet.add(true);

// console.log(mySet);


// let mySet2 = new Set([1 ,45,'this',false,{a:4,b:8}]);
// console.log(mySet2.size);
// console.log(mySet2.has(45));
// console.log(mySet2.delete(45));
// console.log(mySet2);
// iterating a set
// for (let item  of mySet2) {
//     console.log("talha",item);
// }
// mySet2.forEach((item)=>{
//     console.log(item);
// })
// let arr = Array.from(mySet);
// console.log(arr);

// let a = console.log
// console.log("learning symbols in javascript");

// let symbol = Symbol('my identifier');
// let symbol2 = Symbol('my identifier');// symbol is just a unique identifier of a string or any other value
// // a(symbol);
// // a(symbol === symbol2);

// const k1 = Symbol();
// const k2 = Symbol();

// obj = {};
// obj[k1] = "talha";
// obj[k2] = "shiekh";
// obj["name"] = "good boy";

// // symbols are ignored in for in loop
// for(let key in obj){
//     console.log(key,obj[key]);
// }


// a(JSON.stringify(obj));
