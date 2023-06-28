console.log("learning document object model in javascript");

// let a = document;
// a = document.all;
// a = document.body;
// a = document.forms[0];
// a = document.anchors;
// a = document.baseURI;
// a = document.cookie;
// a = document.doctype;
// a = document.documentElement;
// a = document.documentMode;
// a = document.documentURI;
// a = document.embeds;
// a = document.implementation;
// a = document.title;
// Array.from(a).forEach((element) =>{
//     console.log(element);
// })
// a = document.links[0];
// a = document.links[0].href;
// console.log(a);

// // task of harry
// let b = document.images;
// let c = document.scripts;
// Array.from(b).forEach((element) =>{
//     console.log(element);
// })
// Array.from(c).forEach((element) =>{
//     console.log(element);
// })
// console.log(b);
// console.log(c);


// exercise 1

// let a = document.links;
// // console.log(a);

// let b = "codewithharry";
// let c = "javascipt";

// Array.from(a).forEach((element)=>{
//     if(element.href.includes(b)){
//         console.log(element.href);
//     }
// })



// different document Object models

// Element selectiors :

// 1.single element selector
// 2.multi element selector


// 1.single element selector
// let element = document.getElementById('firstchild');

// element = element.className
// element = element.childNodes;
// element = element.parentNode;
// element.style.border = '1px solid black';
// element.innerText = "talha nai yai text likha hai";
// element.innerHTML = "ye text <b> talha </b> nai likha hai";


// let selector = document.querySelector("#firstchild");
// let selector = document.querySelector(".child");
// let selector = document.querySelector("h1");
// selector.style.color = 'green';
// selector.innerHTML = "<i>learning dom manupualtion </i>"
// console.log(selector);



// 2.multi element selector
// let elms = document.getElementsByClassName('child');
// let elms = document.getElementsByClassName('child');
//  elms = elms[0].getElementsByClassName('container');
// elms = elms[0].getElementsByTagName('div');
// elms = document.getElementsByClassName('container');
// elms = document.getElementsByTagName('div');

// console.log(elms);


// for (let index = 0; index < elms.length; index++) {
//     const element = elms[index];
//         console.log(element);
//     element.style.color = 'red';

// }

// Array.from(elms).forEach(element => {
//     console.log(elms);
//     element.style.color = 'red';
// });





// child and parent elemnets and Traversing the DOM in js

// let cont = document.querySelector('.no');
// cont = document.querySelector('.container');
// let nodename = cont.childNodes[3].nodeName;
// let nodetype = cont.childNodes[1].nodeType;
// console.log(nodetype);
// console.log(nodename);
// console.log(cont.childNodes);
// console.log(cont.children);
// node types
// 1.Element
// 2. attribute
// 3.textnode
// 8. comment
// 9. document
// 10. doctype


// let container = document.querySelector('.container');
// console.log(container.children[1].children[0].children[0].children[0]);

// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);
// console.log(container.children.length);






// ***************************************************************

//                 creating and removing Elements in js 

// ***************************************************************

let element = document.createElement('li');

let ndtext = document.createTextNode('this is a created text node');
element.appendChild(ndtext);

// adding class and id 
element.className = 'ulchild';
element.id = 'ulchild';
element.setAttribute('title', 'created li')
// element.innerText = 'hello this is created li using javascipt'
// element.innerHTML = '<u>hello this is created li using javascipt</u>'
// console.log(element);

let ul = document.querySelector('.list');
ul.appendChild(element);

let element2 = document.createElement('h1');
element2.id = "elm2";
element2.className = "elm2";

let tndoe = document.createTextNode('this is a heading that is replaced with li');

element2.appendChild(tndoe);
// console.log(element2);
element2.style.color = 'red';
element.replaceWith(element2);


let ulelement = document.querySelector('.list');
ulelement.replaceChild(element, document.getElementById('fui'));
ulelement.removeChild(document.getElementById('lui'));

let gid = element2.getAttribute('id');
let gclass = element2.getAttribute('class');
let hasclass = element2.hasAttribute('class');
element2.removeAttribute('class');
// console.log(element2);

// console.log(gid);
// console.log(gclass);
// console.log(hasclass);
// console.log(remclass);


// quick quiz

// create an heading element with text as go to 'code with harry' and create an a tag outside it with href 'https://www.CodeWithHarry.com'

// let container = document.querySelector('.container1');

// let atag = document.createElement('a');

// atag.setAttribute('href','https://www.CodeWithHarry.com');
// atag.setAttribute('target','_blank');

// let text = document.createTextNode('go to code with harry');

// let h1tag = document.createElement('h1');

// h1tag.appendChild(text);

// atag.appendChild(h1tag);
// container.appendChild(atag);
// console.log(atag);




// ***************************************************************

//  learning events in javscipt         

// ***************************************************************
// learned events:
// 1.click
// 2.mouseover
// 3.dblclick
// 4.mousedown
// 5.mouseenter
// 6.mouseleave
// 7.change
// 8.input

// document.getElementById('btn').addEventListener('click', function (e) {
//     let variable;
//     console.log("you have clicked the heading");
//     // location.href= '//CodeWithHarry.com'
//     variable = e.target;
//     variable = e.target.innerHTML;
//     // variable = e.target.className;
//     // // variable = Array.from(e.target.classList).forEach((element) =>{
//     // //     console.log(element);
//     // // });
//     // variable = e.target.classList;
//     // variable = e.target.id;
//     // variable = e.offsetX;
//     // variable = e.offsetY;
//     // variable = e.clientX;
//     // variable = e.clientY;
//     console.log(variable);
// })

// learning more events 
// let inputbtn = document.getElementById('inputbtn');
// inputbtn.addEventListener('click',func1);
// inputbtn.addEventListener('dblclick',func2);
// inputbtn.addEventListener('mousedown',func3);
// inputbtn.addEventListener('mouseenter',func4);
// let container = document.querySelector('.container');
// container.addEventListener('mouseover',func6);

// function func1(e) {
//     console.log("you have single clicked",e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("you have double clicked",e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("you have trigerred the mousedown event",e);
//     e.preventDefault();
// }

// function func4(e) {
//     console.log("you have trigerred the mouseenter event",e);
//     e.preventDefault();
// }

// function func5(e) {
//     console.log("you have trigerred the mouseleave event",e);
//     e.preventDefault();
// }

// function func6(e) {
//     // console.log(e.offsetX,e.offsetY);
//     // console.log("you have trigerred the mouseover event",e);
//     document.body.style.background = `rgb(${e.offsetX},${e.offsetY},255)`;
//     e.preventDefault();
// }



// exercise solving 
// making an editable div 
console.log("creating ann editable div");

let divelm = document.createElement('div');

let value = localStorage.getItem('text');
let text;
if(value == null){
 text = document.createTextNode('this is my element click to edit it');
}else{
    text = document.createTextNode(value);
}

divelm.id = 'element';

divelm.className = 'elm';

divelm.appendChild(text);

divelm.setAttribute('style','border:2px solid black;margin:34px;width:154px;padding:28px;');

let container = document.querySelector('.container');

let child = document.querySelector('.child');

// console.log(divelm , container , child);

container.insertBefore(divelm , child);

divelm.addEventListener('click',() =>{
    let textareas = document.getElementsByClassName('text-area').length;
    if(textareas == 0){
        // console.log(textareas);
        let HTML = divelm.innerHTML ;
        // console.log(HTML);
        divelm.innerHTML = `<textarea class="text-area" id="text-area">${HTML}</textarea>`;
    }
    let textarea = document.getElementById('text-area');
    textarea.addEventListener('blur' ,function () {
        divelm.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
})



