let student = {
  name: "John",
  age: 22,
};

// console.log(student.name)
// console.log(student.age)

// console.log(Object.getOwnPropertyNames(student));

// console.log(Object.keys(student));
// console.log(Object.values(student));

// console.log(Object.entries(student)); // Returns an array of arrays with the key and value of the object

// console.log(Object.fromEntries(Object.entries(student))); // Returns an object from an array of arrays with the key and value of the object

// Object.freeze(student); // Freezes the object and prevents any changes to it

student.name = "Obaid"; // This will not work because the object is frozen

// Object.seal(student); // Prevents any new properties from being added to the object

student.name = "Obaid"; // This will work because the object is not frozen but sealed

student.section = "A"; // This will not work because the object is sealed

// console.log(student.class); // Returns undefined because the object is sealed and the property does not exist

Object.assign(student, { name: "Obaid", age: 22, branch: "CSE" }); // This will add the properties to the object
// console.log(student);

// console.log(Object.isFrozen(student)); // Returns true if the object is frozen

// console.log(Object.isSealed(student)); // Returns true if the object is sealed

// console.log(Object.isExtensible(student)); // Returns true if the object is extensible

// console.log(Object.is(student, student)); // Returns true if the objects are the same

// console.log(Object.is(student, { name: "Obaid", age: 22 })); // Returns false if the objects are not the same

const obj1 = { name: "Obaid", age: 22 };
const obj2 = obj1;
// console.log(Object.is(obj1, obj2)); // Returns true because both objects are the same and has same reference

function objectFun(obj) {
  obj.name = "Obaid";
  obj.age = 22;
}

let obj = { name: "John", age: 22 };

objectFun(obj);

// console.log(obj); // Returns {name: "Obaid", age: 22} because the object is passed by reference

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
//   console.log(boundGetX());
// Expected output: 42

function fun(name) {
  console.log(name);
}

fun.call(this, "obaid");
