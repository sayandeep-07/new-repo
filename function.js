function hello(){//"hello is function name"//
    console.log("hello");
}
hello();
hello();//you also use your function many time in your coad//
function printname(){
    console.log("sayandeep");
}
printname();
function adult(){
    let age=18;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}
adult();
function printpoem(){
    console.log("TWinkle Twinkle little star");
    console.log("how i wonder what you are");
    console.log("up above the world so high");
    console.log("like a diamond in the sky");
}
printpoem();
function dice(){
   let rand=Math.floor(Math.random()*6)+1;
  console.log(rand);

}
dice();
function printinfo(name,age){
    console.log(`${name}'s age is${age}`);
}
printinfo("sayandeep" ,23);
function sum(a,b){
    console.log(a+b);
}
sum(1,2);
sum(4,5);
function callavg(a,b,c){
    let avg=(a+b+c)/3;
   console.log(avg);
    
}
callavg();
function printtable(n){
    for( let i=n;i<=n*10;i+=n){
    console.log(i);
    }

}
printtable();
 let arr=[2,3,4]
 console.log(arr);
 function sum(a,b){
    return a+b;
 }
 
 console.log(sum(3,4));
 console.log(sum(sum(1,2),3));
 function printadult(age){
    if(age>=18){
        return "adult";
    }
    else{
        return"non adult";
    }
 }
 
 function printsum(n){
    let sum=0;
    for( let i=1;i<=n;i++){
        sum=sum+i;//sum+=1;//same meaning//
    }
    return sum;

 }
  let str=["hello","bye","welcome"]
  function congrate(){
    let result="";
    for(let i=0;i<=str.length;i++){
       result=result+str[i];
    }
    return result;
  }
//   let sum=54;//global scope ,it will be use in any other line in the program //
  function calsum(a,b){
    let sum=a+b;//function scope , it only work on function only//
    console.log(sum);
    calsum(9,1);
    
  }
  {
    //var a=25;// 
    let a=25;
    console.log(a);
    for(let i=1;i<=5;i++){
        console.log(i);

        // let age=18;
        // if(age>=18){
        //     let str="adult";
        //     console.log(str);
        // }
        
    }
  }
//   let  name="sayandeep";
//   let sum=function(a,b){
//     return a+b;
//   }