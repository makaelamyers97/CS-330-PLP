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
