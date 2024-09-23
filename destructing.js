// let arr=["santu","rash","mrunal","vijay","petter"];//destructing//
// let winner= arr[0];
// let runner=arr[2];
// let secondrunnerup=[3];
// let[winner,runnerup,...others]=arr;
//destructing in obj//
let student={
    name:"sayandeep" ,
    roll:-316,
    age:19,
    subject:["english","hindi","computer","math"],
    password:1234,

};
// let password=student.password;
// let age=student.age;
let{name:username,age:age,password,city:place="kolkata"}=student;
//asigement//
let nums=[1,2,3,4,5];
let square=nums.map((num)=>num*num);
console.log(square);
let sum=square.reduce((acc,cur)=>acc+cur,0);
let avg=sum/nums.length;
console.log(avg);
