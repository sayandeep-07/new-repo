// let fruits=["mango","banana","lichi","apple","orange"];
//  fruits.push("pineapple");
// for(let i=0;i<=fruits.length;i++){
// console.log(i,fruits[i]);
// }
// let fruits=["mango","banana","lichi","apple","orange"];
// // fruits.Push["pineapple"];
// for(let i=1;i<=fruits.length;i=i+2){
// console.log(i,fruits[i]);
// }
// let fruits=["mango","banana","lichi","apple","orange"];
//  fruits.push("pineapple");
// for(let i=fruits.length-1;i>=0;i--){
// console.log(i,fruits[i]);
// }
//nested array//
let heroes= [
         ["ironman","superman","thor"],
      ["spiderman","wonder woman","flash"]
]
for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes.length);
     for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
     }
 }

 let student=[["aman",95],["santu",94.4],["rash",95.4]];
 for(let i=0;i<student.length;i++){
    console.log(`info of student #${i}`);
    for(let j=0;j<student[i].length;j++){
    console.log(i,student[i][j]);
    }
 }