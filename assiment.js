let age=prompt("enter your age");
let name=prompt("enter your name");
alert('${name} is $(age) year old')
console.log("welcome",age,name);

let month=1;
switch(month){
    case 1:
        console.log("january,febuary,march");
        break;
        case 2:
        console.log("april,may,june");
        break;
        case 3:
        console.log("july,auguest,septembar");
        break;
        case 4:
        console.log("october,november,december");
        break;
        default:
            console.log("not in the list");
}
// let a=23;
// let b=30;
// let c=70;
// if(a>c){
//     console.log( a,"  is largest number")
// }
// else {
//     console.log(c," is largest");
// }
//    if(b>c){
    
//     console.log( b," largest number");
// }
// else{
//     console.log(c,"largest number");
// }
let a=15;
let b=14;
let c=18;
if(a>b){
    if(a>c){
    console.log(a,"islargest");
}else{
    console.log(c,"islargest");

}
}else{if(b>c){

    console.log(b,"islargest");

}else{
    console.log(c,"islargest");

}
}
let  num=20;
if(num%10===0){
    console.log("good");
}
else{
    console.log("bad");
}
let str="apple";
if(str[0]==='a'||( start[0]=='A')&& (str.length>5)){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}
let score1=32;
let score2=47852;
if((score1%10)===(score2%10)){
    console.log("number have the same last digit which is",score1%10);
}
else{
    console.log("number dont have the same last digit");
}


