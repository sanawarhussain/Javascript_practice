// let x = 5;
// let y = 10;

// let result = ++x >= 6 && y++ >= 10 || x++ > 6;
// //          6 >= 6  &&  10 >= 10 || 5 > 6
// //           true   &&    true   ||  false 
// //                 true  || false
// //                       true

// // now for value of x = 6
// // but for the value of y++ we add +1 to the y so it becomes 11

// console.log(result); // True
// console.log(x);      // 6
// console.log(y);      // 11


// example 29 


let apples = 5;
let bananas = 10;

let outcome = apples++ > 5 && ++bananas > 10   ||  ++apples > 6;
//flow         5   >  5    &&    11     >  10  ||  7 > 6
//                 false  &&  true || true
//                      false || true
//                           true

console.log(outcome); //true 
console.log(apples); // 7
console.log(bananas); // 10

