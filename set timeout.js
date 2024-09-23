// console.log("hi there");
// setTimeout( ()=>{
//     console.log("santu")
// },4000);




// console.log("welcome to");
// let id=setInterval(() => {
//     console.log("santu")
// }, 2000);
// console.log(id);
// clearInterval(id);
// let student={
//     name:"aman",
//     mark:95,
//     prop:this,//global scope//
//     getName: function(){
//    console.log(this);
//    return this.name;
//     },
//     getMark:()=>{
        
//         console.log(this);
//    return this.mark;

//     }

// }
// const square =(n)=>n*n;
//  console.log(square);
//  let id=setInterval(()=>{
//     console.log("hello world");
// },2000);
// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval");
//     console.log(id);
// }, 10000);
//question anaswer//
//even number//
let num=5;
let iseven=(num)=>num%2==0;
//array average//
let arrayaverage=(arr)=>{
    let total=12;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length;
};
let arr=[1,2,3,4,5,6];
console.log(arrayaverage(arr));

