// 1- Write a function that greets a user, using a default parameter for the name.
function greets(message, name = "mo7") {
  console.log(message + name);
}
greets("hellooooo, ");
// 2- Write a function that calculates the total price with a default tax rate parameter.
function calcTotal(price, taxRate = 0.1) {
  console.log(price * taxRate);
}
calcTotal(50);

// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name, role = "admin") {
  return {
    name: name,
    role: role,
  };
}
console.log(createUser("mo7"));
// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiply(...arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiply(1, 2, 3))

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiFirst(f, ...arr) {
    return f * arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(multiFirst(1, 2, 3, 4));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function stringVal(...strings) {
    return [...strings];
}
console.log(stringVal("a", "b", "c"));

// 7- Create a new array by combining two arrays using the spread operator.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);

// 8- Copy an array using the spread operator.
const arr = [5, 6, 7];
const copied = [...arr];
console.log(copied);

// 9- Merge two objects into one using the spread operator.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

// 10- Update a property in an object using the spread operator to create a new object.
const user = { name: "mo7", role: "manager" };
const updatedUser = { ...user, role: "admin" };
console.log(updatedUser);

// 11- Destructure an array to get the first and second elements into variables.
const numbers = [1, 2, 3];
const [firstNum, secondNum] = numbers;
console.log(firstNum, secondNum);

// 12- Destructure an array to get the first element and the rest into another array.
const [first, ...arr3] = numbers;
console.log(first, arr3);

// 13- Destructure an object to extract two properties into variables.
const person = { name: "mo7", age: 23, city: "Cairo" };
const { name, age } = person;
console.log(name, age);

// 14- Destructure an object and rename the extracted properties.
const { name: userName, age: userAge } = person;
console.log(userName, userAge);

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function printUser({ name, role }) {
    console.log(`Name: ${name}, Role: ${role}`);
}
printUser({ name: "mo7", role: "admin" });
