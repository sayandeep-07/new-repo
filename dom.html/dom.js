// document.getElementsByClassName("oldImg");//you can call your class by using this attribute//
// document.getElementById("");//you can call your id by using this attribute//
// document.getElementsByTagName("");//you can call your tag by using this attribute//
// document.querySelector('p');//select first p element//
// document.querySelectorAll("p");//select all p element//
// document.querySelector('#my id');//you can select first element with id=my id//
// document.querySelector('.my class');//you can select first element with class=my class//
// document.querySelectorAll("div a");//you can acces your <a> tag from <div> tag//



let smallimages=document.getElementsByClassName("oldImg");
for(i=0;i<=smallimages.length;i++){
    console.dir(smallimages[i]);
    console.dir(document.querySelector("h1"));
    console.dir(document.querySelectorAll("div a"))

}
let heading=document.querySelector('h1');
heading.innerText;//It shows that the visible text contained in a node;//
heading.textContent;//it shhows that all the full text in coad//
heading.innerHTML="<u>spider man</u>";//it shows the full markup in html coad//
heading.innerHTML=`<u>${heading.innerText}</u>`;//you can use the bactik(`)  if you can not remember the text//"<u>"half part you use this in string
                                                //other(${heading.texting})this part you use for variable type//
    //manipulating  Attributes//
   // Object.getAttribute(attr);
  // Object.setAttribute(attr,val);
//   let img=document.querySelector('img');
//   img.setAttribute('id','spiderman');//it help you change your id ,class,src,or create your id,in setattribute you can only use one class or one single value//
//   img.setAttribute('src',"creation_1.png");
//   img.getAttribute('class');//you set a obj in this attribute//
//   img.setAttribute('class','images');
//   img.getAttribute('class');//get attribute helps a spicefice obj value set //you can easily found that what is attribute in the coad//
  //Manipulating style//
  //you can use style property//
 // Object.style;
 //in css you can use background-color (-)you can use //
 //but in javascript you cannot use(-) you only use camlecase;ex=backgroundColor,backgroundImage//
 img.style;
 heading.style='yellow';
 let links=document.querySelectorAll(".box a");
//  for(let i=0;i<links.length;i++){
//     links[i].style.color="green";
//  }
for(link of links){
    link.style.color="blue";
}
let img=document.querySelector('img');
img.classList;
let h=document.querySelector('h1');
// h.classList;
h.classList.add("abc");//you can add your class//
let c=document.querySelector('a');
c.classList;
c.classList.add("abc");
c.classList.remove('green');//you can remove your class or inner class  and you  also change your propertity. 
                            //ex=in css you wrote color="blue"that situation you can remove your color in blue.in add method you also add color // 
c.classList.contains('underline');//contain method is to check if the class is exit//
c.classList.toggle('green');//toggle is between add &  remove.it only return only true or false value;Yes --->No,No--->yes;
 // it kind of switch where switch is on you press the switch than the switch is off,same as opposite switch is on press the switch it was off //
     //toggle works those attribute are stilexit he will remove it,and those attribute not exit he will add it//   
     let h4=document.querySelector('h4');
     h4.parentElement;//it help you find parent element//
     h4.children;//it help you find child element//

     let box=document.querySelector('box');
     box.childElementCount;//it shows how many child element //
     box.children[0];//you also acces in index method//
     box.children[2].previousElementSibling;//it shows previous element//
     box.children[2].nextSibling;//it shows next element//
     //Adding element//
     document.createElement('p');//create a new element;
     let a=document.createElement('p');//output will be -<p></P>
     console.dir(a);
     a.innerText="hiii guys";
     let body=document.querySelector('body');
     //append child//
     //in obj he will add nested type in new element//
     body.appendChild(a);//in case  output will be - <p> hii guys</p>
     body.append("this is new text");//apend is use to append/create, a new element or child or nested from and also add new text (string)type
                                //append add new element in last/ending//
      body.prepend(a);// add a new element in first/start //
    body.insertAdjacentElement("beforebegin",a);//(where,element)//where you add your element and which element you want to add//
     //Removing element//
     //removing element just like append method in append you will add in remove you will remove
  body.removeChild(a);
  
  body.remove//you also choose this method//
  
