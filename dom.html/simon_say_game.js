let gameseq=[];
let userseq=[];
let btn=["yellow","red","green","purple"]
let started=false;
let level=0;
document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game is started");
    started=true;
    levelup();
  }
});
function btnflash(btn){
 btn.classlist.add("flash");
 setTimeout(function(){
    btn.classlist.remove("flash");
 },1000);
}
function levelup(){
  level++;
  h2.innertext=`Level $ {level}`;
  
  //chose random buttom//
  let random=Math.floor(Math.random()*3);
  let randcolor=btns[randIdx];
  let randbtn=document.querySelector(`.${randcolor}`);
  console.log(randIdx);
  console.log(randcolor);
  console.log(randbtn);
  btnflash(randbtn);
}