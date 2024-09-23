// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis =document.querySelectorAll("li");
// div.addEventListener("click",function(){
//   console.log("div was clicked");
// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");  
//   });
//   for(li of lis){
//   li.addEventListener("click",function(event){
//     console.log("li was clicked");
//   });
// }
//Todo app makeing//
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=input.value;
  let deletbtn=document.createElement("button");
  deletbtn.innerText="delete";
  deletbtn.classList.add("delet");
  item.appendChild(deletbtn);
  ul.appendChild(item);
   console.log(input.value,"button was clicked");
   input.value=" ";//blank  string show that you clicked the input text(something youn wrote)you wrote "sleep"in input  text blank string erase the word//
});
let delet=document.querySelectorAll(".delet");
for(deletbtn of delet){
  deletbtn.addEventListener("click",function(){
    let par=this.parentElement;
    console.log(par);
    par.remove();
   console.log("button was delete");
  });
}
ul.addEventListener("click",function(event){
  console.log(event.target);//this mean that who is trigged by event//or what button you clicked
  // event is default arggument or default perameter//
   console.log("button was clicked");
});

  

