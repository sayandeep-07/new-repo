// let color="yellow";

// if(color==="red"){


// console.log("stop");
// }
// if(color==="yellow"){
//     console.log("slow down");
// }
// if(color==="green"){
//     console.log("go fast");
// }

let mode="light"
let color;
if(mode==="dark"){
    color= "black";
}
if(mode==="light"){
    color= "white";
}
console.log(color);
let num=10;
if(num%2===0){
    console.log("even");
}
else{
    console.log("odd");
}

let age=25;
let result=age>=18?"adult":"not adult";
console.log(result);
console.log("odd" );
for(let i=1;i<=15;i=i+2){
    console.log(i);
    

}
console.log("odd backward" );
for(let i=15;i>=1;i=i-2){
    console.log(i);
}
console.log("even");
for(let i=2;i<=10;i=i+2){
    console.log(i);
}
console.log("even backward");
for(let i=10;i>=2;i=i-2){
    console.log(i);
}
console.log("print 5 multipication table");
for(let i=5;i<=50;i=i+5){
    console.log(i);
}
 let n=prompt("write your number");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}
for(let i=1;i<=3;i++){
    console.log('outer loop  $(i)');
    for(let j=1;j<=3;j++);{
        console.log(j);
    }
}