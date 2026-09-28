
// Operators Questions 


// Example 2

let isAdmin = true;
let isLogedIn = false;

// this is OR operator if anyone of both is true so answer is true 
if (isAdmin || isLogedIn) {
  console.log("Access Granted");
} else {
  console.log("Accces denied");
}
// print Access granted



// Example 3
let temp = 35;

if(!(temp < 30 )){
  console.log("hot");
} else {
  console.log("pleasant");
}
// print Hot


//example 4 
let a = 0;

if (a) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// Falsy 


// example 5 
let points = 20;

let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";

console.log(status);
//print  Bronze




// example 6 
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny" ;

console.log(access);
// print Deny


// Increment Operator & Decrement operator 




// Example 7 
let b = 5;
b++;
console.log(b);
// print 6 


// Example 8
let c = 7;
++c;
console.log(c);
// print 8




// Example 8
let x =3;
let y = x++;
console.log(x,y);
// print 4,3



// example 9 
let p=4;
let q=++p;
console.log(p,q);
// print 5 , 5


// Example 10
let n = 5;
let result = n++ + ++n;
console.log(result);
// print 12 


// example 11
let likes = 100;

function likepost(){
  return ++likes;
}

console.log(likepost());
console.log(likes);
// print 101  101


// Eample 12 
let count = 5;

 if (count-- === 5){
  console.log("Matched");
 } else {
  console.log("Not Matched");
 }
//  print matched 
console.log(count--) //print 4
 


// Some Random Questions 

// example 13
let ab = 10;
let bc = 3;

let abcd = ab + bc * 2;

console.log(abcd);
// print 16 


// example 14 
let ali = 17;
let alii = 5;

let alialii = 17 % 5 ;

console.log(alialii);


// example 15 

let age = 20;
let hasId = false;

result2 = ( age>=18 && hasId == true || age < 25 );
//  flow          true && false || true
//                     false || true
//                         true 
console.log(result2);

// print true 


// example 16
let xx = 5;
let resulty = xx++ + 2;
// flow        5   + 2
//                7

console.log(resulty);   //print 7
console.log(xx);        //print 6



// example 17 

let x1 = 5;

let result3 = ++x + 2;
//flow        (1+5) + 2
//                8

console.log(result3); //print 8
console.log(x1);       // print 5


//example 18

let a1 = 5;
let b1 = 10;

let result4 = a1++ + ++b1;
//flow        5    +  (1+10)
           //   5 +  11  
          //      16 


console.log(result4);  //print 16 
console.log(a1);       //print 6



// example 19

let d = 10;

d += 5; //flow 10+5=15
d++;    //flow  

console.log(d); // print 16



// example 20

let age1 = 20;
let score = 70;

console.log(age1 >= 18 && score >= 60);
//flow      20 >= 18  && 70 >= 60 
//flow        true    &&  true  if anyone is false so both of them is false

// example 21

let age3 = 20;
let score3 = 50;

console.log(age3 >= 18 && score3 >= 60 || age3 < 25);
// flow          20>=18  &&  50 >= 60  || 20 < 25  
//                 true  &&  false     ||   true
//                       false         ||   true 
//                                    true  
//print true 


// example 22 

let x4 = 5;

let result5 = ++x4 + 2;
//flow       (1+5) + 2
//            6 + 2
//               8

console.log(result5);
console.log(x4);



// example 23 

let x2 = 5;

let resulti = ++x2 + x2++;
//flow        (1+5)+ (5)
//              6  + 6(+1) = 12

//flow of x2    1+5  -> 6+1 = 7

console.log(resulti); //print 12
console.log(x2);      // print 7



// example 24

let xe = 10;

let resultt = xe++ + ++xe;
// flow       10 + 12
//             22
//              

//flow for xe    10 -> 1+10 = 12  

console.log(resultt);
console.log(xe);


// example 25 

let xee = 4;

let resulte = xee++ + ++xee + 2;
//flow        4   + 5+1
console.log(resulte); //12
console.log(xee);     // 6



// example 26
let xh = 5;

let ah = xh++;
let bh = ++xh;

console.log(ah); //print 5
console.log(bh); //print 7
console.log(xh); //print 7


//example  27

let xg= 5;

let ag = xg++ + ++xg;
//flow    5 + 7 =12

xg += ag;
xg = xg + ag
//   7 + 12
// 19

console.log(ag); //12
console.log(xg); //13


