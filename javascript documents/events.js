// section 11 events in javascript

// HTML events are things that happen to HTML Elements
// when javascript is used in HTML pages javascript can react on these events


// HMTL Events
// an html event can be something a browser does or something a user does

// a html webpage has finished loading
// an HTML input field will be changed
// an html button was clicked
// oftten whrn Events happen you may do something

// javascript lets you execute code when events are detected

// html allows Event handler attributes with javascript code to be added to html Element


// section 1 4 ways of writing Events in javascript 

// 1:using inlilne events alert();
// 2: by calling a function (we already seen most comon way of writing)

// using inlilne events (HTML onclick propperty and Element.onclick)

// 4:using Event listeners (addEventListener and IE' attachevent)

// check the events html file








// "section 2 what is event Object"
// event Object is the parent Object of the  event Object
// for example
// MouseEvent, FocusEvent, KeyboardEvent

// section 3 MouseEvent in javascript
// the MouseEvent Object
// event that occurs when the mouse interacts with the html
// document belongs to the MouseEvent Object


// "section4 KeyboardEvent in javascript"
// event that occurs when the user pressees the key on the keyboard
// belongs to the KeyboardEvent Object





// section 4 inputevents in javascript

// the onchange event occurs whrn the value of an Element has been changed

// for radiobuttons and checkboxes the onchange event occurs whe the 
// check state has been changed 




















// javascript timing events 


// the window Object allows execution of code at specified time intervals

// the time intervals are called time events

// the two methods to use it with javascrit are

// setTimeout(function,milliseconds)

// executes a number after waiting a specified number of milliseconds

// setInterval(function,milliseconds)


// same as setTimeout() but repeats the execution of the functioon continuously


// 4 methods 

// setTimeout()
// setInterval()
// clearInterval()
// clearTimeout()



























// Object oriented javascript




// 1:what is Object literal
// Object literal is simply a key:value pair data structure 
// storing variables and functions together in one container we can refer it as an object

// "Object = school bag "

// how to create an Object

// 1st way

// let object = {
//     myname : "talhatechnical",
//     myage : 16,
//     getdata : function () {
//         console.log(`my name is ${object.myname} my age is ${object.myage}`);
//     }
// }



// // console.log(object.myname);
// object.getdata()







// 2nd way no need to write a function as well after es6





// let object = {
//     myname : "talhatechnical",
//     myage : 16,
//     getdata  () {
//         console.log(`my name is ${object.myname} my age is ${object.myage}`);
//     }
// }
//     // console.log(object.myname);
//     object.getdata();







// // what if we want Object as a value inside an Object
//  let object = {
//         myname : {
//             myrealname : "talha shiekh",
//             mycahneelname : "shiekh palace",
//         },
//         myage : 16,
//         getdata  () {
//             console.log(`my name is ${object.myname} my age is ${object.myage}`);
//         }
//     }
//         // console.log(object.myname);

// console.log(object.myname.mycahneelname);




















// what is this Object?

// the defination of this Object is that it contains the current context 
// the this Object can hava differernt values depending on where it is placed

// for example


    // console.log(this.alert('talha shiekh'));
// it refers to the current context and that is window global object 


// ex2
// function myname() {
//     console.log(this);
// }
// myname();



// ex3

// var myNames = "talha";
// const myname = () =>{
//     console.log(this.myNames);
// }
// myname();



// ex4
// const object = {
// myage : 16,
//  myname() {
//     console.log(this.myage);
//     // console.log(this);
// }

// }
// object.myname();




// ex5

// this Object will not work with arrow function

// const obj = {
// myage : 16,
//  myname : () =>{
//     console.log(this);
// }

// }
// obj.myname();




// ex 6
// let biodata = {
// myname : {
//     realname : "talha",
//     chaneelname : "shiekhpalace",
// },
// myage : 16,
// getdata(){
//     console.log(`my channel name is ${this.myname.chaneelname} my age is ${this.myage}`);
// }
// }

// biodata.getdata();



// output
// "my channel name is shiekhpalace"









