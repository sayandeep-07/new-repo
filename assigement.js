//print a factorial number//
// let n=5;
// let factorial=1;
// for( let i=1;i<=n;i++){
//     factorial*=i;
// }
// console.log("enter the factorial number");
// console.log(`factorialof${n}is${factorial}`);
// //find the largest number in array with only positive number//
// let arr=[2,5,7,8,9,10];
// let largest=0;
// for(let i=0;i<=arr.length;i++){
//    if( largest<arr[i]){
//     largest=arr[i];
//    }
// }
// console.log(largest);
//delete the all element all //
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<=num.length;i++){
    if(arr[i]==num){
        arr.splice(7,1);
        arr.splice(6,1)
    }
}
console.log(arr);
// letarr=[1,2,3,4,5,6,2,3];
// letnum=2;
// for(leti=0;i<arr.length;i++)
//     {
//         if(arr[i]==num){
//             arr.splice(i,1);

//             }
//         }
//         console.log(arr);

