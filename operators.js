// Operators in js are special symbols that performs one or more file in our js files system

// 1. Arithemetic operations
// Addition
let sum = 5 + 3;
console.log(sum);

// Subtraction
let sub = 10 - sum;
console.log(sub);

// Multiplication
let product = sum * sub;
console.log(product);

// Division
let quotient = product / 4;
console.log(quotient);

// Modulus
let remainder = quotient % 3;
console.log(remainder);
// 2. Assignment Operators
//  These operators assign values to variables

// Assignment
let x = 5;
console.log(x);

// addition assignment
let y = 5;
y+= 1;
console.log(y);

// subtraction assignment
let z = 10;
z -= y;
console.log(z);
// 3. comparison operators
// They compare values and return a boolean value

// Equal 
console.log(5 == "5");

// Strict Equal
console.log(5 === "5");

// Not Equal
console.log(5 != "5");
let u = 4;
let b = 5;
console.log(u != b);

// strict not equal
console.log(5 !== "5");

// Greater than
console.log(10 > 5);
let g = 12;
let k = 10;
let m = g + k;
console.log(k > g);

// less than
console.log(3 < 8);
let c = 12;
let d = 10;
let w = c - d;
console.log(m < w); 

// greter than  and equal to
console.log(4 >= 5);
let j = 6;
let p = 6;
let n = j * 2
console.log(j >= p);
let o = p - 3;
console.log(j >= o);

// using logical operators (meaning and how it functions) declare four variables that logs boolean values on console
// AND: it returns true if all statement are true and returns false if any of the statement is not true
let e = 30;
let f = 50;
console.log(e == 30 && f == 50);
console.log(e == 2 && f == 50);

// OR: it returns true if any of the statement is true and returns false if all are false
console.log(e == 30 || f == 50);
console.log( e ==3 || f == 50);

const hasDriverLincense = true;
const hasInsurance = true;
const carDrive = hasDriverLincense && hasInsurance;
console.log(carDrive); 

// let answer = window.confirm("Click OK, get true. Click Cancel, get false");
// answer;
// if (answer == true) {
//      console.log("You said true");
//  } else {
//      console.log("you said something else");
//  }

//  let ans = window.prompt("Type YES, get true. Type NO, get false");
//  if(ans == true) {
//     console.log("you choose yes")
//  } else{
//     console.log("you are wrong");
//  }







