// let  name="sayandeep";
// let x=5;
// let sum=function(a,b){
//   return a+b;
// }
// let hello =function(){
//     console.log("hello");
// }
// hello=function(){
//     console.log("namasta");
// }
function multiplegreet(func,count){
    for(let i=0;i<+count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multiplegreet(greet,100);
multiplegreet(function(){console.log("namasta")},1000);
let odd=function(n){
    console.log(!(n%2==0));
}
let even=function(n){
    console.log(n%2==0);
}
function oddeventest(num){
    if(num=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }

    }
    if(num==even){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong req");
    }
}
let num="odd";//even
// let calculator={
    
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mmul:function(a,b){
//         return a*b;
//     }
// };
let calculator={
    
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mmul(a,b){
        return a*b;
    }
};