  //   arrays in javascript

  // section 7 arrays in javascript

  // when we use car we can use omly in valuse at a time
   // when we feel like storing multiple valuues in one variable

   // instead of vaar we will use an array
   // in javascript we have an array class
   // arrays are the prototype of this class

   // example
//    var  myFriend1 = 'umar';
//    var  myFriend2 = 'ali';
//    var  myFriend3 = awais;
   //  var myfriends = new Array; // optioniol
   // var myfriends = ['umar' , 40 , 'male' , 'ali' , 26  , 'male' ,'awais' , 20 , 'male'];






















   // array subsection 1 traversal  in array 
   // navigate through an array

   // if we want to get single data at a tume also
   // if we wamt to change the data 

   
   
   // var myfriends = ['umar', 'talha' , 'awais' , 'ali'];
   
   // console.log(myfriends[2]);
   // console.log(myfriends[myfriends.length - 1]);
   
   // if we want to check the length of elements of array

   // console.log(myfriends.length);

   // we use for loop to navigate

//    var myfriends = ['umar', 'talha' , 'awais' , 'ali'];

//    for(var i = 0; i < myfriends.length ; i++){
//  console.log(myfriends[i]);

//    } 








   // after es6 we have for..in and for..of loop to

   var myfriends = ['umar', 'talha' , 'awais' , 'ali'];

   // for(let elements in myfriends){
   //    console.log(elements);
      
   // }


   // for(let elements of myfriends){
   //    debugger;
   //    console.log(elements);
      
   // }



   // Array.prototype.forEach()
   // calls a function for each element in an array

//    myfriends.forEach(function (element ,index,  array ){
// console.log(element + ' index :' + index + " arrray :" + array );
//    });

   // myfriends.forEach( (element ,index,  array) =>{
   //    console.log(element + ' index :' + index + " arrray :" + array );
   //       });

   // array subsection 2 searching and filter in array

   // arrray . prototype .indexof()
   // return the first (least) index of an element withiin the array equal
   // to an element or -1 if none is found it seacrch the element from the 
   // 0th index number


   // var myfriends = ['talha' , 'awais' , 'umar' , 'ali' , 'tyre', 'umar']

   // console.log(myfriends.indexOf('umar',5));













   // Array.prototype.lastIndexOf()
   // returns the last (greatest ) index of an  element within the array equal

   // to an element or -1 if none is found it search the elemnt last to first  





   // var myfriends = ['talha' , 'awais' , 'umar' , 'ali' , 'tyre','awais' ]

   // console.log(myfriends.lastIndexOf('awais',3));












   // Array.prototype.includes()
   // determines whether the array contains a value
   // returning true or false as appropriate

   // var myfriends = ['talha' , 'awais' , 'umar' , 'ali' , 'tyre','awais' ]

   // console.log(myfriends.includes('awais',3));















   // Array.prototype.find()
   // arr.find(callback(element[, array]])[, thisArg]
   // returns the found element in an array if some element in an array
   // satisfies the testing function or undefined id not found
   // only the problem is that it returns only one statment



   const prices = [200, 300 , 400 ,500 , 600 ,700];


   // price < 400;
   const findelm = prices.find((element) => {
      element > 400;
   });
   console.log(findelm);
   // 
   // const findelm = prices.find((Elements) => Elements > 400);

   // console.log(findelm);

   // console.log( prices.find((Elements) => Elements > 400 ));



   // Array.prototype.findIndex()
   // returns the find index in an array if an element in the 
   // array satisfies the testing function or -1 if not found
  
  
   // console.log( prices.findIndex((Elements) => Elements <  400 ));

   




   // Array.prototype.filter()
   // returns a new array containing all the elements of the calling function
   // Array for which the provided filtering function returns true





   // const prices = [200, 300 , 400 ,500 , 600 ];
   // const newPricetag = prices.filter((Elements , index , Array , Number) => {
   //    return Elements  > 400;
   // })
   // console.log(newPricetag);


   // array subsection 3 how to sort an array

   // Array . prototype . sort()

   // the sort () method sorts the element of an array in place and 
   // returns the sorted array the default sort order is ascendind , built
   // upon converting the elements into strings,

   // then comparing there sequences on UTF -16 code units values


   // const months = ['jan', 'feb' , 'march', 'april', 'may'];

   // console.log(months.sort());
   
    // however if the numbers are sorted as string 
    // 25 is bigger than 100 ,  because 2 is bigger than 1

    // because of this sort() method will produce an incorrect
    // result when sorting numbers
    
    


   // const array1 = [1 , 10000 , 200 , 300 , 400 ,900];

   // console.log(array1.sort());












   // array subsection 4  perform CRUD


   // array.prototype.push()
   // the push method adds one or more elements too the
   // end of an array and returns the new length of an array


//    const animals = ['pigs', 'goats' , 'sheep'];

//     const count = animals.push('chicken', 'cats' , 'cow');
//    console.log(animals);
// console.log(count);








// Array.prototype.unshift()
// the unshift method adds one or more elements to tthe 
// beggining of an array and returns the new length of an array

// const animals = ['pigs', 'goats' , 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('cicken ', 'egga');
// console.log(animals);













// 2nd example

// const mynumbers = [1,2,3,4,7];

// mynumbers.unshift(4,5);
// console.log(mynumbers);




// Array.prototype.pop();
// the pop () method remoces the last element from an array and returns
// that element this method changes the length of an array 

// const palns = ['broxoli' , 'cailiglower' , 'gale' , 'tomato' , 'cabbage'];

// console.log(palns);
// console.log(palns.pop());
// console.log(palns);









// Array.prototype.shift();
// the shift () method removes the first element of an array and then returns

// that removed element thos method changes the length of an array




// const palns = ['broxoli' , 'cailiglower' , 'gale' , 'tomato' , 'cabbage'];

// console.log(palns);
// console.log(palns.shift() );
//    console.log(palns);























   // challenge time

   // Array.prototype.splice()
   // add or removes elements from an Array
   
   // 1.add dec aat the end of an array
   //  2.what is the return value of splicse method
   //  3.update march to March
   // 4.delete june from an array



   // const months = ['jan', 'march','april','june','july'];

   // // sol 1.
   // const newmonths = months.splice(months.length,0,'dec');
   // console.log(months);


   // sol2.
   // console.log(newmonths);



   // sol3.

   // const indexof = months.indexOf('june');

   // if(indexof != -1){

   //    const newmonths = months.splice(indexof,1,'Junw');
   //    console.log(months);
   // }
   // else {
   //    console.log('no such data founded');
   // }

   //sol.4
   // const indexof = months.indexOf('june');

   // if(indexof != -1){

   //    const newmonths = months.splice(indexof,1);
   //    console.log(months);
   //    console.log(newmonths);
   // }
   // else {
   //    console.log('no such data founded');
   // }


   // use of infinity
   // 
   // const indexof = months.indexOf('june');

   // if(indexof != -1){

   //    const newmonths = months.splice(indexof,Infinity);
   //    console.log(months);
   //    console.log(newmonths);
   // }
   // else {
   //    console.log('no such data founded');
   // }













 // array subsection 4 map and reduce method
//  Array.prototype.map()
//  let newarray = arr.map(callback(cuerrntvalue[,index[,array]])){
//     returns elements for new array , after executing something
//  } [,thisArg];)

//returms a new array containing the results of calling a function
// function on every element on this array


// const array1 = [1, 4, 9,16,25];

// num > 9

// let newarr = array1.map((currentelements,index,arr) => {
//    return currentelements > 9 ;

// })
// console.log(array1);
// console.log(newarr);











// let newarr =  array1.map((currentelements,index,arr) => {
//    return `index no = ${index} and the value is ${currentelements} and the array is ${arr} `
// })
// console.log(newarr);


// check the difference
// let newarrfor =  array1.forEach((currentelements,index,arr) => {
//    return `index no = ${index} and the value is ${currentelements} and the array is ${arr} `
// })
// console.log(newarrfor);


// it returns the new array without mutating the original array







   






// challlenge time
// 1. find the square root of each elemrnt in an array
// 2. multiply each elemnts by 2 and return only those elemnts which are greater than 10?





// sol1.

// let arr = [25,36, 49 , 64, 81];


// let arrsqr = arr.map((currentelements,index, array) =>
//      Math.sqrt(currentelements) );

// console.log(arrsqr);

// sol2.

// let arr = [2, 3, 4, 5 ,6 ,8];

// we can use chaining method

// let arr1 = arr.map((currentelements) => {
//    return currentelements * 2;
// }).filter((currentelements) => {
//    return currentelements > 10;
// })

// console.log(arr1);























// reduce method 
// flatten an array to convert the 3d or 2d array into a 
// single dimenson arraay



// the reduce method executes a reducer function (that you provide)
// on each elemnt of the array resulting in a single output valaue

// the reducer functtion takes four arguments

// accumulator
// current value
// current index
// source array





// 4 subj = 1 sub =7
// 3sub = ?


// let arr = [4,6,2];

// let sum = arr.reduce((accumulator,currentelements,index,array) =>{
//    debugger;
//     return accumulator += currentelements ;
    

// },7)
// console.log(sum);

//  how to flatten an array
// converting 2d and 3d array into a dimensional array








// const arr = [
   
//    ['zone_1','zone_2' ],
//    ['zone_3','zone_4' ],
//    ['zone_5','zone_6' ],
//    ['zone_7','zone_8'],
// ];
// debugger;
// let flatarr = arr.reduce((accumulator,currentvalue) => {
//            return accumulator.concat(currentvalue);
// })
// console.log(flatarr);
