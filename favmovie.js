// let favmovie="geeta govinda";
// let guess="dear comrad";
// while((guess!=favmovie)&& (guess!="quite")){
//     console.log("wrong");
//     guess=prompt("");
// }
const favmovie="avater";
let guess=prompt("guess myb fav movie");
if(guess==="quit"){
    
    console.log("you quite");
    
}
while((guess!=favmovie)&&(guess!="quite")){
    console.log("wrong guesss");
    guess=prompt("guess my fav movie");
}
if(guess===favmovie){
    console.log("congrates");
}
else{
    console.log("quite");
}
let i=1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;
}