// let arr=[1,2,3,4,5];
// let print =function(el){
//    console.log(el);
// };
// arr.forEach(print);
// let arr=[
//     {
//       name:"sayandeep",
//       age:19
//     },
//     {
//         name:"rash",
//         age:19
//     },
//     {
//         name:"mrunal",
//         age:19

//     },
// ];
// arr.forEach((student) => {
//     console.log(student);
// });
// let num=[1,2,3,4]
// let double=num.map((el)=>{
//   return el*2;
// });
// let nums=[1,2,4,5,6,7,8,9,10,11,12,13];
// let ans=num.filter((el)=>{
//    return el%2!==0;
// });
// let arr=[2,3,4,5,6,7].every((el)=>el%2==0);
// let arr=[1,2,3,4,5,6,7,8];
// let num=arr.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(num);

// let num=[1,2,3,4,5];
//  let finalvalue=num.reduce((res,el)=>res+el);
//  console.log(finalvalue);
 // (program explanation )rel+el-
 //(0+1)=1;
 //(1+2)=3;
 //(3+3)=6;
 //(6+4)=10;
 //(10+5)=15(final output )
//  let num=[1,2,3,4,5];
//  let finalvalue=num.reduce((res,el)=>{
//     console.log(res);
//      return res+el;
// });
//  console.log(finalvalue);
// let num=[10,20,30,40];
// let min=num.reduce((min,el)=>{
//     if(min<el){
//       return min;
//     }else{
//       return el;
//     }
// })
// console.log(min);
// //default paramiter//
// function sum(a,b=20){// output will be 21 because a value is 1 and b value is 20 
//    return a+b;//return a+b;
// }
// sum(1); 
// sum(1,3);

//spread array//
//expands an iterable into multiple value//
//   let arr=[1,2,3,4,5,6,7,8,9,10,34];
//   Math.min(...arr);
//   console.log(arr);
//   console.log(...arr);
//   //spread also use in string//
//   console.log(..."sayandeep");
  //speard also use in array literles//
//   let arr=[1,2,3,4,5];
//   let newarr=[...arr];
//   let chars=[..."hello"];
//   let odd=[1,2,3,4,5,6,7,8];
//   let even=[2,3,4,5,6,7,8];
//   let num=[...odd,...even];
//speard with obj literal//
// let data={
//    email:"sayandeep9@gmail.com",
//    password:"abcd",
// };
// let  num={...data};
// let arr=[1,2,3,45,56,,77,8,];
// let obj={...arr};//obj--->keyval
// let obj1={..."hello"};
// function sum(...arr){
//     for(let i=0;i<arr.length;i++){
//       console.log("you gave us" ,arr[i]);
//     }
// }
// function min(a,b,c,d){ 
//    console.log(arguments);//you also print argument length//
// }

function sum(...args){
   return args.reduce((sum,el)=>sum+el)
}


