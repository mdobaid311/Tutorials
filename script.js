// Map object

const userMap = new Map([
  [1, "Mohammed"],
  [2, "Obaid"],
]);

userMap.set(3, "saif");

// console.log("# Map Object")
// console.log(userMap.get(1))
// console.log(userMap.get(2))
// console.log(userMap.get(3))


// Object Destructuring

const destructuringObject = {
  name: "Mohammed",
  age: 23,
  city: "Riyadh",
};

// const {name, age, city} = destructuringObject;

// console.log("# Object Destructuring");
// console.log(name);
// console.log(age);
// console.log(city);

// Object Literal

const name = "Mohammed";
const age = 22;
const city = "Hyderabad";

const objectLiteral = {
  name,
  age,
  city,
};

// console.log("# Object Literal");
// console.log(objectLiteral);

// Template Literals

const templateLiteral = `My name is ${name} and I am ${age} years old`;

// console.log("# Template Literals");
// console.log(templateLiteral);

// Arrow Functions

const arrowFunction = (a, b) => a + b;

// console.log("# Arrow Functions");
// console.log(arrowFunction(2, 3));

// Classes

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

// console.log("# Classes");
const user = new User("mohammed", 22);
// console.log(user.getName());
// console.log(user.getAge());

// Inheritance

class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

// console.log("# Inheritance");

const admin = new Admin("Mohammed", 22, "Jr Engineer");

// console.log(admin.getName());
// console.log(admin.getAge());
// console.log(admin.getRole());

// Modules

// import { add } from "./math.js";

// console.log("# Modules");
// console.log(add(2, 3));

// Promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
    }
);

// promise.then((data) => { 
//     console.log("# Promises");
//     console.log(data);
// });

// Async Await

const asyncAwait = async () => {
    const data = await promise;
    console.log("# Async Await");
    console.log(data);
}

asyncAwait();

// Fetch API

const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("# Fetch API");
    console.log(data);
}

fetchApi();

// Local Storage

// localStorage.setItem("name", "Mohammed");
// localStorage.setItem("age", 22);

// console.log("# Local Storage");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));

// Session Storage

// sessionStorage.setItem("name", "Mohammed");
// sessionStorage.setItem("age", 22);

// console.log("# Session Storage");
// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.getItem("age"));

// Event Listeners

const eventListeners = () => {
    console.log("# Event Listeners");
    console.log("Event Listeners");
}

// document.querySelector("button").addEventListener("click", eventListeners);

// Event Bubbling

const eventBubbling = () => {
    console.log("# Event Bubbling");
    console.log("Event Bubbling");
}

// document.querySelector(".container").addEventListener("click", eventBubbling);

// Event Delegation

const eventDelegation = (e) => {
    console.log("# Event Delegation");
    console.log(e.target);
}

// document.querySelector(".container").addEventListener("click", eventDelegation);

// DOM Manipulation

const domManipulation = () => {

    const div = document.createElement("div");
    div.className = "hello";
    div.appendChild(document.createTextNode("Hello World"));

    const container = document.querySelector(".container");
    const h1 = document.querySelector("h1");

    container.insertBefore(div, h1);

}

// domManipulation();

// DOM Selectors

// console.log("# DOM Selectors");
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// DOM Traversing

// console.log("# DOM Traversing");
// console.log(document.querySelector(".item").parentNode);
// console.log(document.querySelector(".item").parentElement);
// console.log(document.querySelector(".item").nextSibling);
// console.log(document.querySelector(".item").nextElementSibling);
// console.log(document.querySelector(".item").previousSibling);
// console.log(document.querySelector(".item").previousElementSibling);

// DOM Manipulation

// console.log("# DOM Manipulation");
// console.log(document.querySelector(".item").children);
// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Mohammed";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if (nameInput.value === "" || emailInput.value === "") {
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";

//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
//     );

//     userList.appendChild(li);

//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }

// const name = "Mohammed";
// const age = 22;
// const job = "Jr Engineer";
// const city = "Mumbai";
// let html;

// function hello() {
//   return "hello";
// }

// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>

//     </ul>
// `;
// document.body.innerHTML = html;


