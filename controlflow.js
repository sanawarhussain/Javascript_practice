// write a function getGrade(score) that :
// take a student marks ( 0 to 100)
// Returns the grade based on this logic:
// 90-100 A+
// 80-90 A
// 70-80 B
// 60-70 C
// 50-60 D
// 40-50 E
// 0-40  F
// Anything else Invalid Marks

// function getGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return "A+";
//   } else if (score >= 80 && score <= 90) {
//     return "A";
//   } else if (score >= 70 && score <= 80) {
//     return "B";
//   } else if (score >= 60 && score <= 70) {
//     return "C";
//   } else if (score >= 50 && score <= 60) {
//     return "D";
//   } else if (score >= 40 && score <= 50) {
//     return "E";
//   } else if (score >= 0 && score <= 40) {
//     return "F";
//   } else {
//     return "Invalid Marks";
//   }
// }

// let marks = prompt("Enter your marks");
// console.log(getGrade(marks));

// second method Early method

// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "A+";
//   if (score >= 80 && score <= 90) return "A";
//   if (score >= 70 && score <= 80) return "B";
//   if (score >= 60 && score <= 70) return "C";
//   if (score >= 50 && score <= 60) return "D";
//   if (score >= 40 && score <= 50) return "E";
//   if (score >= 0 && score <= 40) return "F";
//   return "Invalid Marks";
// }

// let mark = prompt("Enter your marks");
// console.log(getGrade(mark));

// Rocks ppaer Scissors Logic

// function rps(user, computer) {
//   if (user === "rock" && computer === "scissor") return "computer";
//   if (user === "scissor" && computer === "rock") return "computer";
//   if (user === "paper" && computer === "scissor") return "computer";
//   if (user === "scissor" && computer === "rock") return "user";
// }

// let value = prompt ("enter the value")
// rps("rock", "scissor");
// console.log(rps("rock", "scissor"));

// samme program with different logic

// function rps (user, computer){
//     if (user === computer) return "draw";
//     if(user === "rock" && computer === "scissor") return "user";
//     if(user === "scissor" && computer === "paper" ) return "user";
//     if(user === "paper" && computer === "rock") return "user";
//     return "computer";
// }

// console.log(rps("paper" , "rock" ));

//    practice quextion 1
// Write a JavaScript program that:
// Takes a number from the user.
// Checks whether the number is positive or negative.
// If the number is greater than 0, print "Positive".
// Otherwise, print "Negative".

// function take ( ){
//     if (number > 0 ) return "Positive";
//     if (number < 0 ) return "Negative";
//     return "Zero" ;
// }
// let number = prompt ( "enter the number");
// console.log(take(number));



//    practice quextion 2
// Write a program that:
// Takes the user's age as input.
// If age is 18 or greater, print "You can vote".
// If age is less than 18, print "You cannot vote".

// function voting (age){
//     if (age >= 18 ) return "you can vote" ;
//     if( age <= 17 ) return "you cannot vote";
// }
// let age = prompt ( " enter the age ");
// console.log(voting(age));

// flow of the above program

// User enters age
//       ↓
// let age = prompt(...)
//       ↓
// age contains the value
//       ↓
// voting(age)
//       ↓
// function receives age
//       ↓
// if condition checks it
//       ↓
// returns the answer




// practice question 3
// Write a program that:
// Takes a number from the user.
// Checks whether the number is even or odd.
// Print "Even" if it is even.
// Print "Odd" if it is odd.

// function check ( number ) {
//  if ( number % 2 === 0) return "Even";
//      return "odd" ;
// }

// let number = prompt("enter the number");
// console.log(check(number));

// flow
// Enter 8
//   ↓
// 8 % 2
//   ↓
// 0
//   ↓
// 0 === 0 → true
//   ↓
// "Even"

// different logic of same question

// function check (num) {
//     if(num%2===0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// let num = prompt ("enter the number ");
// console.log(check(num));






//   practice question 4
// function check (num) {
//     if(num > 50) return "greater then 50";
//     else return "less than 50" ;
// }
// let num = prompt ("enter the number ");
// console.log(check(num));






// practice question 5
// this give postive even and odd and negative even and odd
// function check(num) {
//   if (num > 0 && num % 2 === 0) {
//     return "Positive even";
//   } else if ( num > 0 && num % 2 === 1) {
//         return " positive odd";
//   } else if (num < 0 && num % 2 === 0) {
//     return "negative even";
//   } else if ( num < 0 && num % 2 !== 0) {
//         return " negative odd";
//   }
//   else if ( num == 0) {
//     return "Zer0";
//   }
// }

// let num = prompt("enter the number ");
// console.log(check(num));





// practice question 6
//check which number is greater between two number
// function check (num1 , num2){
//     if(num1 > num2){
//         return "num1 is greater";
//     }
//     else if (num1<num2){
//         return "num2 is greater"
//     }
//     else if (num1===num2){
//        return "num1 is equal to num2"
//     }
// }
// let num1 = prompt ("enter first number");
// let num2 = prompt ("enter second number");
// console.log(check(num1,num2));







//practice question 7
// check between three number which one is greater
// function check(num1, num2, num3) {
//     if (num1 === num2 && num2 === num3) {
//     return "all the number equal";
//   }
//   else if (num1 === num2 && num3 !== num1) {
//     return "num1 and num2 is equal";
//   }
//   else if(num2 === num3 && num1 !== num2){
//     return "num2 and num3 is same";
//   }
//   else if(num1===num3 && num2 !== num1){
//     return "num1 and num3 is same";
//   }

//   else if (num1 > num2 && num1 > num3) {
//     return "num1 is greater";
//   }
//   else if (num2 > num1 && num2 > num3) {
//     return "num2 is greater";
//   }
//    else if (num3 > num1 && num3 > num2) {
//     return "num3 is greater";
//   }
// }
// let num1 = Number(prompt("enter first number"));
// let num2 = Number(prompt("enter second number"));
// let num3 = Number(prompt("enter third number"));
// console.log(check(num1, num2, num3));






//practice question 8
// function ageCheck(age12){
//     if(age12 >= 0 && age12  <= 12) return "Child";
//     if(age12 >= 13 && age12 <= 19) return "Teenager";
//     if(age12 >= 20 ) return "Adult";
// }

// let age12 = prompt ("Enter the Age");
// console.log(ageCheck(age12));





//practice question 9
// function checkNumber(number){
//     if (number > 0 && number % 2 === 0 ) return "positive even";
//     if (number > 0 && number % 2 !== 0) return "positive odd";
//      if (number < 0 && number % 2 === 0 ) return "Negative even";
//     if (number < 0 && number % 2 !== 0) return "Negative odd";
//     else{
//         return "Zero";
//     }
// }
// let number = prompt("enter the number");
// console.log(checkNumber(number));





// practice question 10
// write a funvtion that takes a number and returns:
// divisible by 3 and even
// divisible by 3 and odd
// not divisible by 3
// function checkMath(num) {
//   if (num % 3 === 0 && num % 2 === 0) return "divisible by 3 and even ";
//   if (num % 3 === 0 && num % 2 === 1) return "divisible by 3 and odd ";
//   if (num % 3 !== 0) return "not divisible by 3";
// }
// let num = prompt("Enter the number");
// console.log(checkMath(num));





// practice question 11
// take two numbers 
// Both are even
// Both are odd
// One is even and one is odd
// function checkMath(num1 , num2) {
//   if (num1 % 2 === 0 && num2 % 2 === 0) return "both are even ";
//   if (num1 % 2 === 1 && num2 % 2 === 1) return " both are odd ";
//   if (num1 % 2 === 0 && num2 % 2 === 1) return "one is even & one is odd";
//   if (num1 % 2 === 1 && num2 % 2 === 0) return "one is even & one is odd";
//  }
// let num1 = prompt("Enter the number");
// let num2 = prompt("Enter the number");
// console.log(checkMath(num1 , num2));





//practice question 12
// function login (username , password){
//  if(username === 'admin' && password === "12345") return "login successfully" ;
//  else {
//     return "wrong E-mail and passwrod ";
//  }
 
// }

// let username = prompt ('enter username');
// let password = prompt ('enter password');
// console.log(login(username,password));





//practice question 13 E-commerce
// Imagine you're building a shopping website.
// A product costs 1000.
// // If the customer is a premium member, give 20% discount. Otherwise, no discount.
// Customer
//    ↓
// Is the customer Premium?
//    ↓
//  YES                 NO
//  ↓                   ↓
// 20% discount        No discount
//  ↓                   ↓
// Rs. 800             Rs. 1000
// let price = 1000;
// let isPremium = true;
// function  calculatePrice  (price , isPremium){
//     if(isPremium){
//         return price * 0.8;
//     } else{
//         return price * 1;
//     }
// }
// calculatePrice(price , isPremium);
// console.log(calculatePrice(price,isPremium));
// Product price
// //      ↓
// Premium member?
//    ↙       ↘
//  YES       NO
//   ↓         ↓
// × 0.8      × 1
//   ↓         ↓
// Discount   Full price












// practice question 14 Shopping cart 
// A customer gets free delivery if:
// Order amount is Rs. 2000 or more
// Otherwise delivery costs Rs. 200
// 2500 → Free delivery
// 2000 → Free delivery
// 1500 → Delivery = Rs. 200
// function calculateOrder(order){
//     if(order >= 2000){
//         return "delivery 0";
//     } else {
//         return "delivery 200";
//     }

// }
// let order = prompt("enter the order amount");
// calculateOrder(order);
// console.log(calculateOrder(order));








//practice question 15 Login Validation
// A website has:
// Correct email:    admin@gmail.com
// Correct password: 12345
// Example
// admin@gmail.com + 12345 → Login successful
// admin@gmail.com + 11111 → Wrong password
// user@gmail.com  + 12345 → Wrong email
// function login(email , password){
//     if(email=== "admin@gmail.com" && password === 12345 ) return "Login Successfully";
//     else{
//         return "wrong email & passwrod";
//     }   
// }

// login("admin@gmail.com" , 12345);
// console.log(login("admin@gmail.com" , 12345));




//practicw question 16 E-commerce stock check
// A customer wants to buy a product. Your system has:

// stock → how many items are available
// quantity → how many the customer wants

// example 
// stock = 10, quantity = 3  → Order confirmed
// stock = 10, quantity = 10 → Order confirmed
// stock = 10, quantity = 15 → Not enough stock
// let stock = 10 ;
// function StockCheck(quantity){
// if( stock >= quantity  ){
//     return " order confirmed"
// } else{
//     return " order no confirmed";
// }
// }

// let quantity = prompt ("enter the quantity you want ");
// console.log(StockCheck(quantity));







//practice question 17 ATM withdrawal system 
// Build a function for an ATM.
// The ATM has:
// correctPin = 1234
// balance = 50000
// The customer enters:
// pin
// withdrawAmount
// Rules:
// If the PIN is wrong → "Incorrect PIN"
// If PIN is correct and withdrawal amount is greater than balance → "Insufficient balance"
// If PIN is correct and enough balance → "Withdrawal successful"
// Examples:
// 1234 + 10000 → Withdrawal successful
// 1234 + 60000 → Insufficient balance
// 1111 + 10000 → Incorrect PIN
// let balance = 50000;
// function ATM (pin , withdrawAmount ){
//  if(pin==="1234" && withdrawAmount <= balance) return "withdrawal successfully";
//  if(pin==="1234" && withdrawAmount > balance) return "Insufficent balance";
//  else{
//     return "wrong pin"
//  }
// }

// let pin = prompt ( "Enter your pin");
// let withdrawAmount = prompt ("enter the withdrawAmount");
// ATM(pin , withdrawAmount);
// console.log(ATM(pin , withdrawAmount));





//practice question 18 ATM withdrawal system
// A company accepts an application only if:
// Age is 18 or above
// Education is "graduate"
// Experience is 2 years or more

// Otherwise, reject the application.
// example
// 25, "graduate", 3 → "Application accepted"
// 22, "graduate", 1 → "Not enough experience"
// 17, "graduate", 3 → "Age requirement not met"
// 25, "intermediate", 5 → "Education requirement not met"
// function application(agee , experience , education ){
//     if (agee >=18 && experience >=2 && education === "graduate") return "eligible";
//     if (agee < 18) return "Not enough age ";
//     if (experience < 2) return " experience not enough";
//     if (education !== "graduate") return "Not enough age ";
    
//     else{
//         return "no eligible";
//     }
// }
// let agee = Number(prompt("enter the age "));
// let experience = Number(prompt("enter the experience"));
// let education = (prompt("enter the education"));
// application(agee,experience,education);
// console.log(application(agee,experience,education));






























