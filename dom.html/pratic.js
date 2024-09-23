 //add the element  to the container using only javascript and the dom method//
 //<p> with red text says "hii  guys"//
 let paral=document.createElement('p');
paral.innerText="hii guys";
document.querySelector('body').append(paral);
paral.classList.add('red');
//<h3>with blue text and say "i am blue"//
let h3=document.createElement("h3");
h3.innerText="hey iam blue";
document.querySelector("body").append(h3);
h3.classList.add("blue");
//<div> with a black border and blueviolet background color with the following element inside of it//
  //another <h1> that says "i am div"//
  //<p> that says"me too"//
let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");
h1.innerText="i am in  a div";
para2.innerText="me too";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);

