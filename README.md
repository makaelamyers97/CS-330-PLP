# Programming Language Project
**By** Makaela Myers

# Assignment 1: Language Overview and Setup

## History of Javascript

JavaScript was created by Brendan Eich in May 1995 in just 10 days. It was designed to make the client-side of websites both more interactive and more dynamic. Although JavaScript is considered a multipurpose language and can be used in a variety of applications, it's main purpose is for web development. 


## Getting Started

I will be using Visual Studio Code as my programming environment for this project, an IDE in which JavaScript is already built into. I am also familiar with VS Code and have done coding with it before which also contributed to my decision to use it for this project.

First, install Visual Studio Code:
- https://code.visualstudio.com/download

You will then need to install the Node.js extension in order to execute JavaScript code on the Server side. This can be done using the following link:
- https://nodejs.org/en/download


#### Running JavaScript on the Server Side

To run JavaScript on the Server Side, create a new .js file in VS Code. 

1. Open VS Code
2. Create a new `.js` file through File > New File...
3. Write your code to the file
4. Run the file through Run > Start Debugging or Run Without Debugging


#### Running JavaScript on the Client Side

To run JavaScript on the Client Side, create both a new .js file and a new .html file in VS code.

1. Open VS Code
2. Create a new `.html` file through File > New File...
3. To your `.html` file, write the following:
   

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

4. Write your code within the `<body>` tags
5. To include a `.js` file, create one through File > New File...
6. Write your code to the file
7. Link the `.js` file by writing the following within the `<body>` tags in the `.html` file:

```
<script src="filename.js"></script>
```

8. Run the code by opening the `.html` file in your browser of choice


#### Writing Comments in JavaScript

To write comments in JavaScript, add `//` to the start of the line:

```
// comment //
```

#### Hello World!

Writing a 'Hello World!' program on the Server side:

```
console.log('Hello World!')
```

Writing a 'Hello World!' program on the Client side:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>document.write("Hello World!")</script>
</body>
</html>
```


# Assignment 2: Data Types and Naming Conventions


## Naming Conventions
Below are the variable naming requirements in JavaScript, as well as naming convention community standards.

1. No spaces allowed
2. Only letters, digits, underscores, and dollar signs are permitted in variable names
3. Case matters when it comes to variable names
4. A letter (alphabet), an underscore (_), or a dollar sign ($) 
  must be the first character in a variable name
5. Certain terms such as reserved words in JavaScript
  shouldn't be used to name variables (community standard)
6. Camel casing (ex: camelCase) is the preferred naming convention (community standard)


## Data Types 

In JavaScript, any data type can be put in a variable, and a variable can at any point be changed from a string to a number and vice versa. This kind of programming is called "dynamically typed", which means data types exist in the language but variables can be changed from one data type to another.




### Number

In JavaScript, the number type represents both integers and floating point numbers, meaning there are no separate ints and floats. There are no restrictions with adding numbers together wether they are whole numbers or decimals.

`let num = 5;`


### String

A string must be surrounded by one of three different kinds of quotes -- single quotes, double quotes, or backticks.

```
let example1 = 'This is single quotes';

let example2 = "This is double quotes";
```


Backticks allow us to insert variables and expressions into a string by using ${...}

```
let quoteType = "backticks";

 alert(`This is ${backticks}`);
```


### Boolean

A boolean can only be one of two values: true or false. It is usually used to store yes or no values, with yes meaning true and no meaning false.

`let isActive = true;`


### Null

The "null" value represents "nothing", "empty", or "value unknown".

`let name = null;`


### Undefined

The "undefined" value means that a variable has been declared, but not assigned.

`let name;`


### Objects

An object is a variable that contains many values.

`const myDog = {name: "Pretzel", age: 3, breed: "Mixed", color: "Blonde"};


### typeof

The typeof operator returns the type of data type.

```
typeof 5
typeof "five"
typeof true
```


### Dictionary

A dictionary is a collection of key-value pairs and is implemented using objects.

```
let dictionary = {};
dictionary["Goose"] = "Cat";
dictionary["Pretzel"] = "Dog";
dictionary["Georgia"] = "Cat";
dictionary["Christmas"] = "Cat";
```


### Array

An array holds many values under one variable name. Different datatypes (ex: string, number) can be added to the same array.

`let arrTest = ["Goose", 1, "Pretzel", 3];`



# Assignment 3: If/Else, Switch, Logical Operators

- The boolean values in Javascript are `true` and `false`
- Available conditional statements in Javascript include `if`, `else if`, `else`, `nested if-else`, `switch`, and the `ternary operator`
- JavaScript supports short-circuit evaluation by reading an expression from left to right and stopping when a result is determined -- there is the `AND(&&)` short circuit and the `OR(||)` short circuit
- The ["dangling-else"](https://www.geeksforgeeks.org/dangling-else-ambiguity/) problem in JavaScript can be solved by using braces and indentation or to use the if/else if/else format
- When using a switch statement in JavaScript, a `break` statement must be used after each case -- a continue statement cannot be used


### One-condition if/else statement

```
x = 2;
if (x == 2) {
  console.log("Nice, x does equal 2!");
} else {
  console.log("Whoops, x does not equal 2.");
}
```

### Multi-condition if/else statement

```
x = 2;
y = 16;
if (x == 2 && y > 8) {
  console.log("This if-statement works!");
} else {
  console.log("This if-statement does not work.");
}
```

### if/elif/else statements

```
x = 2;
y = 16;
if (x > 5) {
  console.log("The if-statement works.");
} else if (x < 5 && y > 10) {
  console.log("The else-if statement works.");
} else {
  console.log("None of the statements work.");
}
```

### Short-circuit logic

```
const result =
  true ||
  (console.log(
    "This expression will not be read because the one to the left will be read first and it is true, therefore it will execute"
  ),
  false);
console.log(result);
```

### Switch-case statement

```
x = 3
switch(x) {
    case 1:
        console.log("Case 1 works.");
        break;
    case 2:
        console.log("Case 2 works.");
        break;
    case 3:
        console.log("Case 3 works.");
        break;
    default:
        console.log("None of the cases work.");
}
```


# Assignment 4: Loops and Functions

### While-loop

A while-loop holds a condition within the parethisis, in this case ```x <= 5```, and as long as that is true the body within the while-loop will execute, which in this case is `console.log(x)` and `x++`.
```
x = 0;
while (x <= 5) {
  console.log(x);
  x++;
}
```

### Do-while loop

A do-while loop is similar to a while-loop, however the body executes first before reaching the while-condition. This method is preferred if the code should run at least once regardless of the while-condition.
```
x = 0;
do {
  console.log(x);
  x++;
} while (x <= 5);
```

### For-loop

In a for-loop, the loop begins at the beginning starting point where it is instructed, in this case `let x = 0`. It then moves onto the condition, `x <= 5`, which would mean that this loop will continue running until x has a value less than or equal to 5. The last part, `x++`, is saying how much to change x by each time the loop iterates. Then the body, `console.log(x)`, says what action to perform each time this loop executes as true.

```
for (let x = 0; x <= 5; x++) {
  console.log(x);
}
```

### Functions

Functions allow code to be called many times without repetition. It is best practice to place functions anywhere in your file as long as its defined before you try to call it - however, browsers will automatically move functions to the top of the code through a process called "hoisting". 

The below function takes in two numbers, `x` and `y`, multiplies them, and returns them as `z`. Note that JavaScript functions can:
- take in multiple parameters
- accept parameters of different data types

```
function multiplyNumbers(x, y) {
  z = x * y;
  return z;
}

sum = multiplyNumbers(2, 3);

console.log(sum);
```

The below function finds the factorial of a number and is an example of a recursive function, which is when a function calls itself. 

```
function findFactorial(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * findFactorial(x - 1);
  }
}

factorial = findFactorial(3);

console.log(factorial);
```

The below function takes in a string and splits it into two strings, then returns both strings. Note that the function is able to return multiple values at the same time by returning the elements as an array - this could also be done by returning the elements as an object.

```
function stringSplit(string) {
  stringSize = string.length;
  halfOfString = stringSize / 2;
  firstString = string.slice(0, halfOfString);
  secondString = string.slice(halfOfString);
  return [firstString, secondString];
}

twoStrings = stringSplit(
  "This function takes in a string and splits it into two strings, then returns both strings."
);

console.log(twoStrings);
```

### Pass-by-Value and Pass-by-Reference

Variables in JavaScript can either be passed by value or passed by reference, depending on the type of data they hold.

Primitive data types (such as those listed below) are passed by value - this is when a variable is passed to a function, but it is a copy of that variable's value that is passed and not the original variable itself. So any changes to the variable within the function will not affect the variable outside the function.

- Numbers
- Strings
- Booleans
- Undefined
- Null
- Symbol
- BigInt

Non-primitive data types, such as objects and arrays, are passed by reference - however, JavaScript does not support true pass-by-reference. Instead, JavaScript passes the reference value so that the data type can be modified but the original variable cannot be reassigned within the function.

### Example of Pass-By-Value

```
function passBy(x) {
   x = 3;
   console.log(x);
}

let x = 2;
passBy(x);
console.log(x);
```

# Assignment 5: Classes and Inheritance

A JavaScript class is not an object, but it can be used to create objects.

Create a class using the word `class`, then add a method named `constructor()`.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

To create objects:

```
const person1 = new Person("Jane Doe", 54);
const person2 = new Person("John Doe", 62);
```

Add methods after the constructor. Methods act as functions.

```
class Person {
  constructor(name, by) {
    this.name = name;
    this.birthYear = by;
  }
  name() {
    return this.name;
  }
  age() {
    const d = new Date();
    let currentYear = d.getFullYear();
    return currentYear - by;
  }
}

const person3 = new Person("Jane Doe", 54);
```

To call a method:

```
console.log(person1.age());
```

Class Inheritance - `super()` allows you to pull attributes from the Person object. JavaScript does not support multiple inheritance.

```
class Student extends Person {
  constructor(name, by, grade, major) {
    super(name, by);
    this.grade = grade;
    this.major = major;
  }
  info() {
    return this.name + " is a " + this.grade + " majoring in " + this.major;
  }
}

let person4 = new Student("Bob", 1997, "Junior", "Education");
console.log(person4.info());
```

To modify an object variable:

```
person4.grade = "Business Management";
```

JavaScript does not support method overloading. If there are multiple methods with the same name, the last one will override all the others.

# Project Resources

- https://www.geeksforgeeks.org/history-of-javascript/
- https://www.w3schools.com/js/
- https://www.geeksforgeeks.org/javascript/
- https://www.udemy.com/course/the-complete-javascript-course/
- https://javascript.info/
- https://www.geeksforgeeks.org/what-are-the-variable-naming-conventions-in-javascript/
- https://javascript.info/types
- https://www.w3schools.com/js/js_arrays.asp
- JavaScript for kids: a playful introduction to programming by Nick Morgan
