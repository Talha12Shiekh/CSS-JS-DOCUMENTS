  // data and time in javascript

  // section 8 data and time  in javascript 

  //  javascript date objects represets a single moment in time in a 
  // platform - independent format , date objects contain a number 
  // that represents milliseconds since 1 january 1970 UTC 


  // creating date objects
//   there are four ways to create a new date Object


//1, new date ()
//2. new Date(years , months , day , hours , minutes , seconds , milliseconds)
// it takes 7 arguments

//  3. new Date(milliseconds)
// we cannot avoid month selection
// 4. new date(data string)











// new data ()
// date objects are created with the new date () condtructors

// let currentdate = new Date();
// console.log(currentdate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// Date.now()
//  returns the numeric value corresponding to the currrent time the number of milliseconds since january 1 , 1970 00:00:00 UTC

// console.log(Date.now());



// new date (year , month ,.....)
// 7 number specify year, month , hour , minutes , seconds
// and milliseconds (in that order )
// note:javascript counts months from 0 to 11




// var date = new Date(2022, 2 , 10 , 24 , 60, 0 )
// // var date = new Date(2022, 2)
// console.log(date.toLocaleString());














// new Date(date String)
// new Date(date String) creates a new date object from a date string

// var date = new Date("march 30, 2022 15:11:00")
// console.log(date.toLocaleString());




// new Date(milliseconds)
// new Date(milliseconds) creates a new data object as zero time plus milliseconds



// var date = new Date(0);
// var d = new Date(1648635464474);
// console.log(d.toLocaleString());
// console.log(date.toLocaleString());

// var dage = new Date(864000000 + 1);
// console.log(dage.toLocaleString());













// dates method

const curdate = new Date();

// how to  get the individual date

// console.log(curdate.toLocaleString());
// console.log(curdate.getFullYear());
// console.log(curdate.getMonth());
// console.log(curdate.getDate());
// console.log(curdate.getDay());




// how to set the individual date


// // how to set the individual date
// console.log(curdate.setFullYear(2022));
// // the set full year method can optionally set month and day
// console.log(curdate.setFullYear(2022,10,5));
// let setmonth = curdate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curdate.setDate(5)); 
// console.log(curdate.toLocaleString()); 











// time methods

// uper wala use kr raha hun

// how to get the individual time

// console.log(curdate.getTime());
// // the gettime() method returns the number of milliseconds
// // since january 1 ,1970

// console.log(curdate.getHours());
// // the getHours() mehtod returns the hour of a date as a number (0-23)

// console.log(curdate.getMinutes());
// console.log(curdate.getSeconds());
// console.log(curdate.getMilliseconds());







// how to set the individual time

// uper wala hi use kr raha hun

// console.log(curdate.setTime());
// console.log(curdate.setHours(5));
// console.log(curdate.setMonth(5));
// console.log(curdate.setMinutes(5));
// console.log(curdate.setSeconds(5));
// console.log(curdate.setMilliseconds(5));




      


// practice time 
// new Date().toLocaleTimeString();  // time
// new Date().toLocaleDateString();  // date
// new Date().toLocaleString();  // date and time



























// section 9 math object in javascript

// the javascript math object allows you to perform mathematical tasks on numbers

// console.log(Math.PI);




// Math.round()
// returns the value of x rounded to its nearest integer


// let num = 10.565;
// console.log(Math.round(num));





// Math.pow();
// Math.pow(x,y)returns the value x to the powet of y   ;

// console.log(Math.pow(2,3));
// console.log(2**3);



// Math.sqrt()
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));










// Math.abs()
// Math.abs(x) returns the absolute (positive)value

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(2-5));












// Math.ceil();
// Math.ceil(x); returns the value of x rounded up to its nearest Integer




// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));


// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));













// Math.floor()
// Math.floor(x) returns the value of x rounded from its nearest integer 

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.14));











// Math.min()
// Math.min(X) can be used to find a lowest value in a list of arguments



// console.log(Math.min(0,140,39,20,-8,-200));

// Math.max()
// Math.max(X) can be used to find a highest value in a list of arguments

// console.log(Math.max(0,140,39,20,-8,-200));








// Math.random()
// Math.random() returns a random number between 0  and 1 



// console.log(Math.floor(Math.random()*10));





// Math.trunc()
// Math.trunc() method returns the integer part of a number



// console.log(Math.trunc(4.9950490956));
// console.log(Math.trunc(-23.9950490956));









// practice time
// if the argument is a positive number , Math.trunc() is equivalent to Math.floor()

// otherwise Math.trunc() is equivalent to Math.ceil()










