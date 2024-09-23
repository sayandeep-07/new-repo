 //callback hell method//
//   h1=document.querySelector("h1");
// function changecolor(color,delay,nextcolorchange){//nextcolorchang is working like a callback//
//     setTimeout(()=>{
//         h1.style.color=color;
//        if(nextcolorchange) nextcolorchange();
//     },delay);
    
// }
//  function changecolor(color){
//     h1.style.color=color;
//  }
// //first method//
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="green";
// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);
// //2nd method
// // setTimeout(changecolor("red"),1000);
// // setTimeout(changecolor("blue"),1000);
// // setTimeout(changecolor("green"),1000);
//  changecolor("red",1000,() => {
//     changecolor("orange",1000);
//  });
//  changecolor("blue",2000);
//  changecolor("green",3000);
    // setting up with promises
    // function savetodb(data){
    //     let internetspeed=Math.floor(Math.random()*10)+1;
    //     if(internetspeed>4){
    //         console.log("your data will be safe",data);
    //     }
    //    else console.log("your data will be not safe");
    // }
    //    function savetodb(data,suceess,failure){
    //     let internetspeed=Math.floor(Math.random()*10)+1;
    //     if(internetspeed>4){
    //         suceess();
    //     }
    //    else {
    //     failure();
    //    }

   // }
//     savetodb(
//         "sayandeep senapati",
//         ()=>{
//             console.log("succes:your data was saved");
//         },
//         ()=>{
//             console.log("your data was saved");
//         }
//     )
//     function savetodb(data){
        
//       return new Promise((succes,failure)=> {
//         let internetspeed=Math.floor(Math.random()*10)+1;
//         if(internetspeed >4){
//             succes("data was saved");
//         }
//         else{
//             failure("weak connation");
//       }
//        });
//     }
//     //1st method
// //     let request= savetodb("sayandeep semnapati");//request =promis object//
// //     request.then(()=>{
// //    console.log("promise was resolved");
// //     })
// //     .catch(()=>{
// //     console.log("promies was reject ");
// //     console.log(request);
// //     });
// //1st method
// //  savetodb("sayandeep semnapati")
 
// // .then(()=>{
// //     console.log("data1 is saved");
// //     savetodb("hello world").then(()=>{
// //    console.log("data2 is saved");
// //     });
// // console.log("promise was resolved");
// // })
// // .catch(()=>{
// // console.log("promies was reject ");

// // });
// //2nd method of promise chain
// // savetodb("sayandeep semnapati")
 
// // .then(()=>{
// //     console.log("data1 is saved");
// //    return savetodb("hello world")
// // })
// // .then(()=>{
// //     console.log("data2 is saved");
// //      })
// // .catch(()=>{
// // console.log("promies was reject ");

// // });
// savetodb("sayandeep semnapati")
 
// .then((result)=>{
//     console.log("data1 is saved");
//     console.log("result of promis",result);
//    return savetodb("hello world")
// })
// .then((result)=>{
//     console.log("data2 is saved");
//     console.log("result of promis",result);
//      })
// .catch((error)=>{
// console.log("promies was reject ");
//   console.log(error);
// });
h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise was rejected");
            }
            h1.style.color=color;
            console.log(`color changed to ${color}`);
           resolve("color changed");
        },delay);
    });
    
}

async function change(){
    try{
 await changecolor("red",1000);
 await changecolor("green",1000);
 await changecolor("blue",1000);
 await changecolor("pink",1000);
  let a=5;
  console.log(a);
  console.log("new number=",a+3);
    } catch(err){
        console.log(err);
    }
}
change();
// changecolor("red",1000)
// .then(()=>{
//     console.log("red color is completed")
//     return changecolor("orange",1000);
// })

// .then(()=>{
//     console.log("orange color was completed")
//     return changecolor("green",1000);
// })
// .then(()=>{
//     console.log("green color was completed")
//     return changecolor("blue",1000);
// });
// //async functionz
//  async function greet(){
//    // throw"some random error";//throw is usely use to random error
//     return "hello world";//return the promise
// }
// greet()
// .then((result)=>{
//     console.log("promise was succesful");
//     console.log("result was",result);
// })
// .catch((err)=>{
//     console.log("promise was reject with err",err);
// })
// let demo=async()=>{
//     return 5;
// };
      function getnum(){
        return new Promise((reslove,rejected)=>{
        setTimeout (()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            reslove();
        },1000);
        })
      }
      async function demo(){
       await getnum();//await only works when function is async untill it does not work;//
       await getnum();
       await getnum();
        getnum();
        
      }


