let todo=[1];
let req=prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("---------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------");
    }else if(req=="add"){
        let task =prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }
}
console.log(req);
