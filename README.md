# Programming Language Project
**By** Makaela Myers

# Assignment 1: Language overview and setup

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

## Project Resources

- https://www.geeksforgeeks.org/history-of-javascript/
- https://www.w3schools.com/js/
- https://www.geeksforgeeks.org/javascript/
- https://www.udemy.com/course/the-complete-javascript-course/
- https://javascript.info/
- JavaScript for kids: a playful introduction to programming by Nick Morgan
