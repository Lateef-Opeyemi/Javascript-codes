// control structure in js is essential for controlling the flow of execution in your code. It allows you to dictate how your programmme should respond based on conditions.
// 1. conditional statement
//  conditional statement executes a block of code if the specified condition is true or false

// a. if statement 
let temperature = 30;

if(temperature > 25 ) {
    console.log("it is a hot day!");
} else{
    console.log("it is a cold day");
}

const isAdmin = false;
const isSuperUser = false;

if(isAdmin || isSuperUser) {
    console.log("you can have access to the app");
} else{
    console.log("you are not allowed to access this app");
}

const hasPaidSchFee = true;
const hasGoodHealth = true;

if(hasPaidSchFee && hasGoodHealth) {
    console.log("Welcome to the class");
} else{
    console.log("Go back home");
}
