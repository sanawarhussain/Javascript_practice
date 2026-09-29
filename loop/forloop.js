// for loop

// syntax 
// for( Start; end; change){
// code to repeat;
// }
// START → CHECK → RUN → UPDATE → CHECK → RUN → UPDATE...

// example 1 
// print from 1 - 50
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//         i = 1
//           ↓
//      i <= 5 ?
//       ↙     ↘
//     YES      NO
//      ↓        ↓
//   run code   STOP
//      ↓
//     i++
//      ↓
//   check again
//      ↖_______


//practice question 2 
// for(let i=2; i<=20; i+=2 ){
//     console.log(i);
// }











// Q3 — Real-world scenario 🛒
// An e-commerce website wants to display 5 product numbers:
// Product 1
// Product 2
// Product 3
// Product 4
// Product 5

// for(i=1; i<=5; i++){
//     console.log(`Product ${i}`);
// }

//this question prints even number using if and %

//  for(let i=2; i<=10; i++ ){
//     if(i % 2 === 0){
//      console.log(`Product ${i}`);
//     }
//  }









// Q5 — Basic + condition 🔢

// Print numbers from 1 to 20, but print only numbers divisible by 3.

// Expected:

// 3
// 6
// 9
// 12
// 15
// 18

//  for(let i=1; i<=20; i++ ){
//     if(i % 3 === 0){
//      console.log(i);
//     }
//  }











// Q6 — Real-world 🛒

// An online store has 10 products.

// Print only the odd-numbered products:

// Product 1
// Product 3
// Product 5
// Product 7
// Product 9


// for(let i=1; i<=10; i++){
//     if( i%2===1){
//         console.log(`product ${i}`);
//     }
// }












// Q7 — Slightly harder 🔥

// Print numbers from 1 to 20, but:

// If the number is divisible by 3, print "Fizz"
// Otherwise, print the number

// Expected:

// 1
// 2
// Fizz
// 4
// 5
// Fizz
// ...
// 18 → Fizz
// 19
// 20

// Use for + if + %


// for(let i=1; i<=20; i++){
//     if(i%3===0){
//         console.log("fizz");
//     }
//     else{
//         console.log(i);
//     }
// }










// Q8 — Slightly harder

// Print numbers 1 to 20:

// Divisible by 3 → "Fizz"
// Divisible by 5 → "Buzz"
// Otherwise → print the number

// Expected:

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// ...

// Use for + if / else if / else + %.

// for(let i=1; i<=20; i++){
//     if(i%3===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }







// Q9 — Tricky 🔥

// Print numbers 1 to 30:

// Divisible by 3 AND 5 → "FizzBuzz"
// Divisible by 3 → "Fizz"
// Divisible by 5 → "Buzz"
// Otherwise → number

// Expected examples:

// 3 → Fizz
// 5 → Buzz
// 15 → FizzBuzz
// 30 → FizzBuzz

// Hint: You'll need &&.
//keep in mind here the order is matter 

// for(let i=1; i<=30; i++){
//     if(i%3===0 && i%5===0 ){
//         console.log("fizzBuzz");
//     } else if(i%3===0 ){
//         console.log("fizz");
//     }else if(i%5===0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }

// here is the logic of the above condition 

//         i
//         ↓
//   divisible by 3 AND 5?
//        /       \
//      YES       NO
//       ↓         ↓
//  FizzBuzz    divisible by 3?
//                /    \
//              YES    NO
//               ↓      ↓
//             Fizz   divisible by 5?
//                       /   \
//                     YES   NO
//                      ↓     ↓
//                    Buzz   numberv








// Q10 — Real-world problem 🛒

// Imagine an online store has 20 products.

// Print:

// Even product → "Product X - In Stock"
// Odd product → "Product X - Out of Stock"

// Example:

// Product 1 - Out of Stock
// Product 2 - In Stock
// Product 3 - Out of Stock
// Product 4 - In Stock
// ...

// Use for + if/else + %.

// for(let i=1; i<=20; i++){
//     if(i%2===1){
//         console.log(`product ${i}`, "out of stock");
//     }else if(i%2===0){
//         console.log(`product ${i}`, "In Stock");
//     }
// }










// 🔥 Q11 — Medium for loop
// You have:
// let numbers = [4, 7, 2, 9, 6];
// Use a for loop to find and print the largest number.
// Expected output: 9
// Rules:
// Use only a for loop.
// Don't use Math.max().
// Don't use sorting.
// 💡 Hint: You need a variable that keeps track of the largest number found so far.

// let numbers = [4, 7, 2, 9, 6];
// let largest = numbers[0];
// //    4     =  4  this value change when the loop continues run  
// for( let i = 1; i < numbers.length; i++){
//     if(numbers[i] > largest){
//        largest = numbers[i];
//     }
// }
// console.log(largest); 

//the whole flow 
// Array
//   ↓
// largest = 4
//   ↓
// Check 7 → 7 > 4 → YES → largest = 7
//   ↓
// Check 2 → 2 > 7 → NO  → largest = 7
//   ↓
// Check 9 → 9 > 7 → YES → largest = 9
//   ↓
// Check 6 → 6 > 9 → NO  → largest = 9
//   ↓
// Loop ends
//   ↓
// Print largest
//   ↓
//   9


// let numbers = [8,3,6,1,9];
// let smallest = numbers[0];

// for(let i=1; i<numbers.length; i++){
//     if( numbers[i] < smallest ){
//         smallest = numbers[i];
//     }
// }
// console.log(smallest);






// Q13 — Same level, slightly different 🔢
// Given:
// let numbers = [4, 7, 2, 9, 6];
// Use a for loop to count how many even numbers are in the array.
// Expected output: 3
// Because:
// 4 → even
// 7 → odd
// 2 → even
// 9 → odd
// 6 → even
// 💡 Hint: You need a count variable. Use % to check whether a number is even.


// let numbers = [4,7,2,9,6];
// let count = 0;
// for(let i=0; i < numbers.length; i++ ){
//     if(numbers[i] % 2 === 0 ){
//         count++;
//     }
// }
// console.log(count);





// Q15 — Find the first even number 🔢
// Given:
// let numbers = [7, 9, 5, 8, 3, 10];
// Use a for loop to find the first even number.
// Expected output: 8

// we are looking at array 
// we have to print the first even number 
//the conditon which tels us which is true is number % 2 === 0 
//when we find the even numbers so we don't need to continue the loop 

// let numbers = [7,9,5,8,3,10];
// let foundnumber = null;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         foundnumber=numbers[i];
//         console.log(foundnumber);
//         break;
//     }
// }










// Q16 — Find the first number greater than 10
// let numbers = [4, 7, 9, 15, 6, 20];
// Expected output:15
// Use:
// for loop
// if
// a variable to remember the number
// break once you find it


// let numbers = [4,7,9,15,6,20];
// let foundnumber = null;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] > 10 ){
//         foundnumber=numbers[i];
//         break;
//     }
// }
// console.log(foundnumber);






// Q17 — Find the first negative number
// let numbers = [5, 8, 3, -4, 7, -10];
// Expected output:-4

// let numbers = [5, 8, 3, -4, 7, -10];
// let foundnumber = null;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] < 0){
//         foundnumber=numbers[i];
//         break;
//     }
// }
// console.log(foundnumber);

// let numbers = [7,12,8,15,20,9];
// let foundnumber = null;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 5 === 0){
//         foundnumber=numbers[i];
//         break;
//     }
// }
// console.log(foundnumber);








