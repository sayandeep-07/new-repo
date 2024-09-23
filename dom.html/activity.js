let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let randomcolor=getrandomcolor();
    h1.innerText=randomcolor;
    // console.log("gerate random color");
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
    console.log("color updated");
});

function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgba(${red},${green},${blue})`;
    return color;
}