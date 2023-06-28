                 //control statments and loops//

    // 1.if..else statments
    //the if statment executes a statment if a specified condition is true
    //if the condition is false then  another statment id executed

// var tom = "sunnys";
// if(tom == "rain"){
// console.log("take a raincoat");
// }
// else{
// console.log("no need to take raincoat");
// }


// challenge if else statments

//write a program that wprks out whether if a given yeaar is a leap year or not
//a normal year has 365 days leap year has 366 days with an extra day that is 29th of feburary

// var year = 2020;
// if(year % 4 === 0){
//    if(year % 100 === 0){
//        if(year % 400 === 0){
//         console.log("the year" + year + "is  a leap year");
//        }
//        else{
//         console.log("the year" + year + "is not a leap year");
//     } 
//    }
//    else{
//     console.log("the year" + year + "is  a leap year");
// }
// }
// else{
//     console.log("the year" + year + "is not a leap year");
// }



// what is truthy and falsy in javascript
//we have total five fallsy values in javascript
// 0 , "", undefined ,null , NaN,false**,is false anyway


// if(score = 0){
    // if( true){
    // if( false){
    // if( undefined){
    // if( null){
    // if( NaN){
//     console.log("we loss the game");
// }
// else{
//     console.log("we won the game 😃 " );
// }




//Conditional (ternary) operator
////the conditional ternary operaator is the only javascript operator
//that takes three operands 

// structure of ternary operators
// "variablename = (condition)?value1:value2"


// var age = 26;
// console.log((age >= 18 && age <= 25)? "you can play cricket":"you can not play cricket" );














                      // switch statments
 //evaluates an expression maataching the expressions value to a 
 //case clause and executes statments associated with that case

 // 1st without break statment
 //find the area of circle triangle rectangle


//  var area = "rectanglee";
//  var pi = 3.142; l=5, b=4, r=3;

//  if(area === "circle")
// {
//     console.log("the area of circle is :" + pi*r**2);
// } 
//   else if(area === "triangle")
// {
//     console.log("the area of traingle is :" + (l*b)/2);
// } 
//   else if(area === "rectangle")
// {
//     console.log("the area of rectangle is :" + l*b);
// } 

// else{
//     console.log("please enter the valid data");
// }

 
// var area = "circle";
//  var pi = 3.142; l=5, b=4, r=3;

//  switch(area){
// case 'circle':

//     console.log("the area of circle is :" + pi*r**2);
        
//     break;
//     case 'rectangle':

//         console.log("the area of rectangle is :" + l*b);
        
//         break;
//     case 'traingle':
//         console.log("the area of triangle is :" + (l*b)/2);
        
//         break;
//         default:

//             console.log("please enter the valid data");
//     }





//break
// terminates the current loop switch or label
//statmentsand transfers
//program control to the statment following the terminated statment




                   //while loop statments
//the while statment creates a loop that executes a specified condition
//as long as the test condition evaluates to be true


// var num = 0;
// debugger;
// // block scope
// while(num <= 10){
//     console.log(num); //infinite loop
//     num++;
// }




             //do- while loop
// var num = 20;

// do{
//     debugger;
//    console.log(num); //infinite loop
//   num++; 
// }while(num <= 10);




      //for loop
// structure of for loop
// for(initializer;ConditionRule;iteration)
// {
// code to be executed
// }



// for(var num = 0; num <= 10; num++){
//     debugger;
// console.log(num);    
// }


// challenge time
// java script to print table for a given number(8)?


// for(var num = 1; num <= 10; num++ ){

//     var table = 12;
//     console.log( table + " x " + num + " = " + table * num);
// }






