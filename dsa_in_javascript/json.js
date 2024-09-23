//API(json)
let jsonres =
'{"fact":"A steady diet of dog food may cause blindness in your cat - it lacks taurine.","length":77}';
let validres=JSON.parse(jsonres);
console.log(validres.fact);
let student={
    name:"sayandeep",
    age:19,
    mark:95,
};
// let url="https://catfact.ninja/fact";
// fetch(url);


// .then((response)=>{
//     console.log(response);
//   })
//   .catch((err)=>{
//     console.log("error",err);
//   });
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//    console.log(response);
// //    return  response.json();// Convert the response to JSON
//     // response.json();
//     // console.log(response.json());
//     response.json().then((data)=>{console.log(data)});

//   })
//   .catch((err) => {
//     console.log("error", err);
//   });
//   console.log("i am happy");
//   async function getfact(){
//     try{
//     let res= await fetch(url);
//     let data=await res.json();
//     console.log(res,data,fact);
//     }catch(e){
//         console.log("error",e);
//     }
//     console.log("bye");
//   }
// let url = "https://catfact.ninja/fact";

//   async function getfact(){
//     try{
//     let res= await axious.get(url);//axious function
    
//     console.log(res.data.fact);
//     }catch(e){
//         console.log("error",e);
//     }
//     console.log("bye");
//   }
          //USING AXIOS//
// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let fact= await getfact();
//     console.log(fact);
// })
// let url = "https://catfact.ninja/fact";
//      async function getfact(){
//         try{
//         let res= await axios.get(url);
        
//          return res.data.fact;
//         }catch(e){
//             console.log("error",e);
//         }
//         return "no fact found";
//       }
                 //DOG PICTURE API
//       let btn=document.querySelector("button");
//       let url2="https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click",async()=>{
//    let link=await getimage()
//    console.log(link);
//    let img=document.querySelector("#result");
//    img.setAttribute("src",link);
//    console.log(link);
    // let fact= await getfact();
    // // console.log(fact);
    // let p=document.querySelector("#result");
    // p.innertext=fact;
// });
// // let url = "https://catfact.ninja/fact";
//      async function getimage(){
//         try{
//         let res= await axios.get(url2);
        
//          return res.data.message;
//         }catch(e){
//             console.log("error",e);
//         }
//         return "/";
//       }
               //SENDING HEADER WITH API REQUEST//
    //   let url="https://icanhazdadjoke.com/";
    //   async function getjoke(){
    //      try{
    //         const config={Headers:{Accept:"application/json"}};//it was a obj//and config is paramiteror element type
    //         let res=await axios.get(url,config);
    //         console.log(res.data);

    //      }catch(err){
    //         console.log(err);
    //      }
    //     }
        // ACTIVITY USING QUERY STRING//
        // let url="https://universities.hipolabs.com/search?name=";
        // let btn=document.querySelector("button");
        // btn.addEventListener("click",async()=>{
        //     let country=document.querySelector("input").value;
        //     console.log(country);
        //     getcolleges(country);
        //     console.log("button was clicked");
        // });
        // let country="nepal";
        // async function getcolleges() {
        //     try{
        //       let res=  await axios.get(url+country);
        //         console.log(res.data)
        //     }
        //     catch(e){
        //         console.log("error",e);
        //         return [];
        //     }
        // }
        let url = "https://universities.hipolabs.com/search?name=";
        let btn = document.querySelector(".btn2");
        
        btn.addEventListener("click", async () => {
            console.log(btn);
            console.log("button was clicked");
            let country = document.querySelector("input").value;
            console.log(country);
            await getcolleges(country); // Pass the country parameter here
            
        });
        
        async function getcolleges(country) { // Accept the country parameter here
            try {
                let res = await axios.get(url + country);
                console.log(res.data);
            } catch (e) {
                console.log("error", e);
                return [];
            }
        }


