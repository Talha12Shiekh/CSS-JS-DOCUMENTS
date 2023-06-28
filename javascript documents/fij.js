//section5 functions in javascript
// a javascript is a block of code designed to perform a particular task 


                     //function defination
//befoore we use a function we need to define it 

// a function defination (also called a function declaration or function statment)
// consists of the functions keyword, followed by

// the name of the function 
// a list of parameters to the funvtion,enclosed in parantheses and seperated by commas
// the javascript statments that define the function enclosed in curly braces {....}

// structure of the function

// function functionname()
// {
//     statment
// }







// var a =10;
// var b =20;
// var sum = a+b;
// console.log(sum);



// function sum (){
//  var a =10;
//  var b =20;
//  var sum1 = a+b;
//  console.log(sum1);
// }

// sum ();


// calling a function
// defining a function does not executes it
// a javascript function is executed when something invokes it (calls it)


// console.log(sum());





// functions parameters vs function arguments
// function parameters are the names listed in the function defination

// function arguments are the real values passed to the functon




// function sum (a,b){
//     var total = a+b;
//     console.log(total);
//    }
   
// sum ();
// sum (20,30);
// sum (50,50);


//            interview question
//   why functions?
// you cam reuse code:define the code onnce and use it many times
// you can usse same code many times with difefernt arguments 
//to produce different results

// or

//a functiom is a group of reuseable code which can be called anywhere
//in your program this eliminates the need of writing the same code
//again and again

// DRY ==> do not repeat yourself













// funtions expressions
// functon expression simply means
// create a function and put it into variables

// function sum (a,b){
//         var total = a+b;
//         console.log(total);
//        }
       
//     sum (5,10);

// var funExp = sum (5,10);
// funExp;







// return keyword
// when javascript reaches a return statment
// the function will stop executing
// function often computes a return value
// the return value is returned back to the caller


// function sum (a,b){
//     // var total = a+b;
//     // console.log(total);
//     return total = a+b;
//    }


// var funExp = sum (5,10);
// console.log("the sum of two numbers is " + funExp);














// anonymus function

// a functon expression is similar to and has athe same syntax
// as fuction declaration one can define the "named"
// function expresson(where the name of the expression may be used in the call stack for example)
// or "anonymus" function expression



var funExp = function sum (a,b){
    return total = a+b;
   }


 var sum = funExp(4,6);
 var sum1 = funExp(5,6);


console.log("the sum of two numbers is " + sum);

console.log( sum > sum1 );







