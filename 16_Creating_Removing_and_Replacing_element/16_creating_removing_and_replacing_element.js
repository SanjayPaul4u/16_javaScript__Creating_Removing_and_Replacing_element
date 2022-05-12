console.log("This tutorial is for creating, removing and replacing element");

// // // CREATING ELEMENT📌📌📌

let element = document.createElement("li");//First Create📌
console.log(element);
element.className = "list";
element.id= "createListElement";
element.setAttribute("title", "myTitle");

// element.innerText = "THIS ELEMENT IS CREATED BY JAVA-SCRIPT";
// element.innerHTML = "<b>THIS ELEMENT IS CREATED BY JAVA-SCRIPT</b>";

//We can create textNode instead of innerText and innerHTML📌
let text = document.createTextNode("The element is created by createTextNode in javaScript.")
element.appendChild(text);


element.setAttribute("style","color:red");
element.setAttribute("style","background:red");



//Select main element where created element will be send;📌
let mainElement = document.querySelector("#forList");
console.log(mainElement);
mainElement.appendChild(element);//send on main element



// // // REPLACE ELEMENT📌📌📌
let elementForRep = document.createElement("h3");
console.log(elementForRep);
elementForRep.id ="elementForRep";
elementForRep.className ="element2";

let tNode = document.createTextNode("This Element is for replace...");

elementForRep.appendChild(tNode);

element.replaceWith(elementForRep)// here 'element' is alread created first.

// // Replace with child to child
let mainEle = document.getElementById("forList");
console.log(mainEle);

mainEle.replaceChild(element, document.getElementById("list1"));

mainEle.replaceChild(document.getElementById("list5"), document.getElementById("list3"));// for replace with 3 to 5



// // // REMOVE ELEMENT📌📌📌

//remove------
let a = document.getElementById("mainContainer");
console.log(a);
// a.removeChild(document.getElementById("myUl"));📌

//some attributs rule-------
let elementIn_a = a.children[1].children[0].children[1];
console.log(elementIn_a);
console.log(elementIn_a.getAttribute('id'));// class and style also.
console.log(elementIn_a.hasAttribute('kjjn'));
console.log(elementIn_a.removeAttribute('id'));
console.log(elementIn_a.setAttribute('id', 'list_list'));




// // // Quick Quiz📌📌📌
let QuickQuizElement = document.createElement("h1");//---HEADING ELEMENT
console.log(QuickQuizElement);
QuickQuizElement.setAttribute("id", "QQId");
QuickQuizElement.setAttribute("style", "background: pink");


let aTag= document.createElement("a");//---A TAG ELEMENT
// console.log(aTag);
QuickQuizElement.appendChild(aTag);


let textNode = document.createTextNode("Go to Code With Harry");
aTag.appendChild(textNode);
aTag.setAttribute("href", "https://www.codewithharry.com");
aTag.setAttribute("id", "aTag");


let head = document.getElementById("head");
// console.log(head);
head.appendChild(QuickQuizElement);