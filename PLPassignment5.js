// Create an object (a Person object like the one we created in lab is fine)
// Give the object class attributes (aka instance variables)
// Give the object functions
/* Create an object that inherits from the first object (e.g., Student) 
   with some attributes and functions of its own */
/* Test how to instantiate both types of objects, call their functions, and modify their
   variables */

/*
Create a class using the word 'class', then add a method named 'constructor()'.
A JavaScript class is not an object, but it can be used to create objects.
*/

// To create a class:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// To create objects:

// const person1 = new Person("Jane Doe", 54);
// const person2 = new Person("John Doe", 62);

// Add methods after the constructor.
// Methods act as functions.

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

// To call a method:

console.log(person3.age());

// Class Inheritance
// super() allows you to pull attributes from the Person object

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
/// Bob is a Junior majoring in Education

// To modify an object variable:

person4.grade = "Business Management";

// https://www.w3schools.com/js/js_classes.asp
// https://www.w3schools.com/js/js_class_inheritance.asp
