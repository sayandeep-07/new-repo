let max=prompt("enter the max number");
console.log(max);
let random= Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("quit game");
        break;
    }
    if(guess==random){
        console.log("you are right congrate",random);
        break;
      
    }else if(guess<random){
       guess= prompt("your guess was too small please try again later");

     
    }
    else{
        guess= prompt("your guess is wrong please try again later");
    }
}