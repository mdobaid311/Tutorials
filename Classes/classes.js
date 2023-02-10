// Javascript classes

// Class definition
class Person {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

class Engineer extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  getPosition() {
    console.log(
      `${this.name} is a ${this.position} and is ${this.age} years old`
    );
  }
}

const obaid = new Engineer("Obaid", 22, "Jr Software Engineer");

Object.prototype.test = () => {
  console.log("Prototype Test");
}; // This will be inherited by all objects

obaid.__proto__.test = () => {
  console.log("Prototype Test from __proto__");
}; // This will be inherited by all objects but will override the previous one if both are called on the same object (obaid)

// obaid.test(); // This will call the prototype test method from __proto__ because it is the last one to be called on the object (obaid)

const testVar = "test";

// testVar.test(); // This will call the test method from Object.prototype because it is the last one to be called on the object (testVar)

// console.log(testVar.hasOwnProperty("test"));
// console.log(obaid.hasOwnProperty("test"));

// console.log(Object.getOwnPropertyNames(obaid.__proto__));

