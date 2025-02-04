// Assignment 2: Data Types and Naming Conventions

// number
let num = 5;

// string
let word = "Pretzel";

// number -- no float in JavaScript
let floatingNum = 3.4;

// boolean
let isActive = true;

// array
let myPets = ["Goose", "Pretzel", "Georgia", "Christmas"];

// dictionary
let dictionary = {};
dictionary["Goose"] = "Cat";
dictionary["Pretzel"] = "Dog";
dictionary["Georgia"] = "Cat";
dictionary["Christmas"] = "Cat";

/* No matter what operation you use, the output will always
   still be a number */
console.log(num + floatingNum);
console.log(num - floatingNum);
console.log(num * floatingNum);
console.log(num / floatingNum);

// You can add different datatypes (ex: string, number) to the same array
let arrTest = ["Goose", 1, "Pretzel", 3];

/* A variable can at one moment be a
   string and then store a number */
let oldest = "Georgia";
oldest = "Christmas";
oldest = 13;
