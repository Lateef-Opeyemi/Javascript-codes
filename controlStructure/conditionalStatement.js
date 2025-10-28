// control structure in js is essential for controlling the flow of execution in your code. It allows you to dictate how your programmme should respond based on conditions.
// 1. conditional statement
//  conditional statement executes a block of code if the specified condition is true or false

// a. if statement 
let temperature = 30;

if (temperature > 25) {
    console.log("it is a hot day!");
} else {
    console.log("it is a cold day");
}

const isAdmin = false;
const isSuperUser = false;

if (isAdmin || isSuperUser) {
    console.log("you can have access to the app");
} else {
    console.log("you are not allowed to access this app");
}

const hasPaidSchFee = true;
const hasGoodHealth = true;

if (hasPaidSchFee && hasGoodHealth) {
    console.log("Welcome to the class");
} else {
    console.log("Go back home");
}
let age = 25;
if (age > 25) {
    console.log("your age is below 25");
} else if (age < 25) {
    console.log("your age is below 25");
} else {
    console.log("your age is 25");
}

let fruit = "apple";
if (fruit === "banana") {
    console.log("we have banana in the store");
}
else if (fruit === "orange") {
    console.log("we have orange in our store");
} else if (fruit === "coconut") {
    console.log("coconut is in our store");
} else if (fruit === "apple") {
    console.log("we have apple in our store");
} else {
    console.log("we do not have any fruit in our store");
}


// Switch statement
let fruit1 = "apple";
switch (fruit1) {
    case "banana":
        console.log("it is banana");
        break;
    case "apple":
        console.log("it is apple");
        break;
    default:
        console.log("we do not have any fruit");
}

//nested if
let x = 7
if(x==2){
console.log('x is 2')
} else if(x == 3){
 console.log('x is 3')
}else if(x>5){
    console.log('x is 5')
    if(x>6){
        console.log('x is also > 6')
    }
}else{
    console.log('something else')
}


let age1 = 20;
switch (age1) {
    case age1 > 20:
        console.log("your age is above 20");
        break;
    case age1 < 20:
        console.log("your age is below 20");
        break;
    default:
        console.log("your age is 20");
}


const actions = ["state", "stop", "pause"];
let userAction = "starts";
let IsLoggedIn = true;
switch (true) {
    case actions.includes(userAction) && IsLoggedIn:
        console.log("Action permitted:" + userAction);
        break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("please login to perform this action")
        break;
    default:
        console.log("No valid case found.");
}
 let animal = "dog"
?console.log("you are a dog")
:console.log("you are not a dog");

// for loop
for (var i = 0; i <=10; i +=2) {
    console.log(i);
}