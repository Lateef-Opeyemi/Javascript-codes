alert("hello jsclass");
console.log("Welcome to my website");

// var
// let
// const
var name = "Ope";
console.log(name);

let age = 12;
age = 20;
console.log(age);

const email = "opeyemilateef021@gmail.com";
console.log(email);

// datatypes
// primitive holds only 1 data
// non-primitive holds multiple data

// primitive
// String
let name2 = "Ayo";
// Number
let age2 = 25;
let myNumber = 4.92;

// Boolean
// true or false
let isMarried = false;
let isGudMan = true;
// undefined
let notAssigned;
console.log(notAssigned);

// null
let isActive = null;

// non-primitive
// array
let product = ["bags", "shoes", "cloth", "phones", "laptop"]
console.log(product[3][2]);

// Object
let user = {
    name: "Ope",
    age: 30,
    email: "opeyemilateef021@gmail.com",
    isStudent: false
};
console.log(user);

const user2 = {
    id: 1,
    firstName: "Ope",
    lastName: "Yemi",
    userName: "opeyemi021",
    email: "opeyemi@gmail.com",
    password: "securepassword123",
    phone: "+234568999",
    address: {
        street: "123 main st",
        city: "Lagos",
        state: "Lagos",
        postalcode: "10001",
        country: "Nigeria",
    },
    dateOfBirth: "1990-01-01",
    isActive: true,
    roles: ["user", "admin"],
    lastLogin: "2024-10-14T10:30:002"
};
console.log(user2)


// ASSIGNMENT 1

let length = 5;
let width = 10;
let area = length * width;
console.log(length);
console.log(width);
console.log(area);

// ASSIGNMENT 2

let firstName = "John";
let lastName = "Doe";
let age1 = 20;
let isStudent = "true";
//  console.log("My name is $(firstName) $(lastName), I am $(age1) years old and it is $(isStudent) that I am a student");
    console.log("My name is " + firstName + "" + lastName + ", I am" + "" + age1 + "years old , and it is" + "" + isStudent + "that I am a student");

// ASSIGNMENT 3

let favoriteMovies = ["Blood Legacy", "Squid game", "Queen of tears", "Love alarm", "The other Zoey"]
console.log(favoriteMovies);
console.log(favoriteMovies[0]);
console.log(favoriteMovies[4]);

// ASSIGNMENT 4

let book = {
    title : "The Adventure Of Huckleberry",
    author: "Lewis Carroll",
    publishedYear: "1960",
    genres: [ "Friction", "Drama", "Mystery"],
    isAvailable: true
};

console.log(book);
console.log(book.genres[1] = "Games");
console.log(book ["author"])
book.author = "Opeyemi";
console.log(book.genres[3] = "Friction");
console.log(book);

