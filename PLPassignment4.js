/* Write (or try to emulate, if your language doesn’t have them) different kinds of loops: 
    - while
    - do/while
    - for  
    - for each */

// while

x = 0;
while (x <= 5) {
  console.log(x);
  x++;
}

// // do-while

x = 0;
do {
  console.log(x);
  x++;
} while (x <= 5);

// // for-loop

for (let x = 0; x <= 5; x++) {
  console.log(x);
}

// Call your functions and save the results of the function calls in variables.

// Write a function that takes in two numbers, multiplies them, and returns the output

function multiplyNumbers(x, y) {
  z = x * y;
  return z;
}

sum = multiplyNumbers(2, 3);

console.log(sum);

// Write a recursive function (one that calculates a factorial is fine)

function findFactorial(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * findFactorial(x - 1);
  }
}

factorial = findFactorial(3);

console.log(factorial);

/* Write a function that takes in a string (or your language's equivalent) 
   and splits it into two strings, then returns both strings */

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

// Write a function that tests whether your language is pass-by-reference or pass-by-value.

function passBy(x) {
  x = 3;
  console.log(x);
}

let x = 2;
passBy(x);
console.log(x);
