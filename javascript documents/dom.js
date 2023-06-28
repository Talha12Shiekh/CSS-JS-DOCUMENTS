// section 10 document object model in javascript

// windows is the main container or we can say the 
// global object and any operations related to entire
// browser window can be a part of a window object

// for ex the history ot to find the url etc.

// whereas the dom is the child of the window Object

// all the members like objects , methods , or properties 
// if they are the part of a window object than we do not want to refer
// the window object since window is the global object
// so you do not have to write down window


// it will be figured by the runtime

// for example
// window.screen  or just screen is a small information
// object about physical screen dimensions

// window.location giving the current url
// window.document or just document is the main Object
// of the potentially visible (or better rendered)
// document Object model/DOM


// where in the dom we need to refer the document
//if we need to use the document objrect methods or properties
// for example
// document.getElementById()

// windows has method propperties and Object
// ex setTimeout() or setInterval() are the methods
// where as document is the object of the window and 
// it also has a screen object properties 
// describing the physical display

// now i know you have a doubt like we have seen the methods 
// and objects of the global object that is window but what about
//the properties of the window object

// so example of the window Object properties are 
// innerHeight
// innerWidth and there are many more

// let us see the practical example of DOM in html file














                        //   DOM VS BOM
// the DOM is th edocument object model which deals with the document
// the HTMLL  elements themselves e.g document and all traversal you 
// would do in it events   e.t.c  

// for ex
// change the background color to red
// document.body.style.backgroundColor = "red"




// the BOM is the browser Object model , which deals with the browser components
// aside from the document , like history,location , navigator, and screen
// (as well as some others that vary by browser) 0r
// in simple meaning all the window operations which comes under BOM are perfomed using BOM



// let see more practical on history object

// function alert / confirm / prompt / are also a part of BOM
// they are directly not related to the document
// but represnts pure browser methods for communicating with the user



// alert(location.href);//shows the current URL
//     if (confirm("want to visit thapa technical")) {
//         location.href = "https://www.youtube.com/thapatechnical";//redirect the browser to another URL
        
//     }























// section 3 : navigate through the BOM

// 1:document.documentElement
            // returns the element that is the root element of the document
// 2: document.head
// 2: document.body
// 2: document.body.childnodes (include tab,enter and whitespace)
              // list of the direct children only

// 5: document.children(without text nodes , only regular elments)
// 6: document.childNodes.length

// practice time 
// how to check whether an element has child nodes or not?
// we will use haschildnodes()

// practice time 
// how to find the child in DOM tree
// firstchild vs firstelementchild
// lastchild vs lastelementid
// const data = document.body.firstElementChild;
// undefined
// data
// Data.firstelementchild
// Data.firstelementchild.firstelementid
// Data.firstelementchild.firstelementid.style.color = "red";


// vs
// const childtwo = document.querySelector('.child-two');

// how to find the parent nodes
// document.body.parentNode
// document.body.parentelement

// how to find or acces the siblings
// document.body.nextSibling
// document.body.nextelementSibling
// document.body.previousSibling
// document.body.previouselementSibling



// section 4 how to search the Elements and the references
// we will see the new file










// diffference between getelementbyid and quuery selector

// what is getelementbyid()?
// syntax:

// Element = document.getElementById(id)


// returns a reference to the Element by its id
// if the element with the specified id is not in the document
// it will return null

// what is quuery selector()?
// syntax:
// Element = document.querySelector(selectors)

// returns the first Element within the document
// that matches the specified group of selectors
// or null if no matches are found

// for example

// getElementById vs quuery selector:similarities


// to help you understand better let us look at the following example

console.log("talha");


