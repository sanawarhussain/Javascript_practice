// // DOM 
// // The browser turns that HTML into a structure that JavaScript can interact with that structure is called DOM.
// // DOM Manipulation
// // html se element select krna  
// // change html 
// // attribute
// // event listeners 
// // Change text
// // Change CSS
// // Read input values
// // Hide/show elements
// // React to button clicks
// // Create elements
// // Delete elements



// // topic # 01 select elements
// // select elements 
// // getElementById (when we have id)
// // getElementByClassName (when we have class)
// // querySelector 
// // querySelectorAll

// //example 
// let abcd = document.getElementById("abcd");
// console.dir(abcd);
//     OR 
// let abcd = document.querySelectorAll("abcd");
// console.dir(abcd);




// //topic # 02 text/content access
// //innerHTML , innerText , textContent  

// //example
// let h1 = document.getElementById("h1");
// h1.textContent = "hello bhai kaise ho";
// // OR
// h1.innerText = "hello bhai kai ho ";
// //content access
// // it changes te html 
// h1.innerHTML = "<i>hey</i>";
// console.dir(h1);
// h1.hidden = true;




// // topic # 03  Attribute Manipulation
// //getAttribute , setAttribute , removeAttribute

// // Example
// let a = document.querySelector("a");
// a.href = "https://www.google.com"
// console.dir(a);


// //it is used to give the link to the a tag (set attribute)
// let a = document.querySelector("a");
// a.setAttribute("href" , "https://www.google.com");



// // it fetches the href link from a tag (get attribute)
//  let a = document.querySelector("a");
//  console.log(a.getAttribute("href"));


//  //remove the href link from a tag (remove attribute)
//  let a = document.querySelector("a");
//  console.log(a.removeAttribute("href"));


//topic # 04 Dynamic DOM Manipulation 
//createElement , appendChild , removeChild , prepend

Example
let h1 = document.create





