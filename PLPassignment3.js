// a one-condition if/else statement (i.e. "if x == true")
x = 2;
if (x == 2) {
  console.log("Nice, x does equal 2!");
} else {
  console.log("Whoops, x does not equal 2.");
}

// a multi-condition if/else statement (i.e. "if x>0 && y< 10)
x = 2;
y = 16;
if (x == 2 && y > 8) {
  console.log("This if-statement works!");
} else {
  console.log("This if-statement does not work.");
}

// if/elif/else statements
x = 2;
y = 16;
if (x > 5) {
  console.log("The if-statement works.");
} else if (x < 5 && y > 10) {
  console.log("The else-if statement works.");
} else {
  console.log("None of the statements work.");
}

// short-circuit logic
const result =
  true ||
  (console.log(
    "This expression will not be read because the one to the left will be read first and it is true, therefore it will execute"
  ),
  false);
console.log(result);

// a switch-case statement
x = 3;
switch (x) {
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

// https://javascript.info/ifelse
// https://www.geeksforgeeks.org/javascript-short-circuiting/
// https://www.geeksforgeeks.org/conditional-statements-in-javascript/
