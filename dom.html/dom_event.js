// let n=document.querySelector('button');
// console.dir(n);
// n.oneclick=function(){    //one click-(when an element is clicked)//
//     console.log("button was clicked");
// };
// let btn=document.querySelector('button');
// console.dir(btn);
// btn.onclick=function(){
//   console.log("click by me")
// //   alert("click me");
// };
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//    btn.onclick=sayhello;
//    btn.onmouseenter=function(){ //   <!-- //onmouseenter-(when mouse enters an element)
//     //if you hover in element or tag it show how many time you clicked//
//     console.log("you liked");
//    }
//     console.dir(btn);
// }
// function sayhello(){
//     alert("hello");
// }
// //even listener//
// //addEventListener//-element.addEvenListener(event,callback)// event listener is kind of linten to the event
//  let btn1=document.querySelectorAll("button");
//  for(btn2 of btn1){
//     btn2.addEventListener("click",hello);//one click work only one function 
//     // //but addEventListener work multiple function//
//      btn2.addEventListener("click",sayname);
//     // btn2.addEventListener("dbclick",function(){
//     //     console.log("you double clicked");
//     // });
    
//  }
//  function hello(){
//     alert("hello");
//  }
// function sayname(){
//     alert("say your name");
// // }
// let p=document.querySelector("p");//you can also call your element in addevenlistenter atttribute//
// p.addEventListener("click",function(){
//    console.log("para was clicked");

// });
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//   console.log("mouse inside the div");
// });
// //'this'- in event listener//
// //when 'this'is used in a callback of event handler of something,it refers to that something.
// //this is obj//
// let btn =document.querySelector("button");
//  function changecolor(){
//    console.dir(this.innerText);
//    this.style.backgroundColor="blue";

// }
// // btn.addEventListener("click",function(){
// //    // console.log(this);
// //    // console.dir(this.innerText);
// //    // this.style.backgroundColor="blue";
// // });
// btn.addEventListener("click",changecolor);
  let btn=document.querySelector("button");
  btn.addEventListener("click",function(event){
    console.log(event);//event  obj tell triggerd obj all information//
    //it mainly use in keyboard event//
    console.log("button was clicked");
  });
  // let inp=document.querySelector("input");
  // inp.addEventListener("keydown",function(){
  //   console.log("key was pressed");//it shows how many time you  press the key//

  // });
  // let inp=document.querySelector("input");
  // inp.addEventListener("keyup",function(){
  //   console.log("key was pressed");//it shows how long time you  press the key//
    
  // });
  let inp=document.querySelector("input");
  inp.addEventListener("keydown",function(event){
    console.log(event);//you must go to the console and focues key word and code, it shows which word or input you can press in the code//
                       //code shows that particular input chachater which one you press//
       console.log(event.key);//it shows which input or word you clicked
       console.log(event.code);//event is pointer keyboard//
    console.log("key was pressed");
    
  });

  // let from=document.querySelector("form");
  let from=this.element[1];//from.element[1] is same//
  from.addEventListener("submit",function(event){
    event.preventDefault();//you can not go to action url//
      console.log("from was submitted");
      console.log(from.value);//you acces your from//(example you will track your password,username )
                              //in simple word you saw what you write in uasername or password or anything//
  });


