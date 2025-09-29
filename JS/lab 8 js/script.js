// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.

import { greetUser } from "./utils.js";

greetUser("mo7");

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
function taskComplete() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  }).then(() => {
    console.log("Task complete");
  });
}
taskComplete();

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
function waitAndGreet() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello, mo7");
    }, 1000);
  });
}

async function temp() {
  try {
    let message = await waitAndGreet();
    console.log("Message:", message);
  } catch (error) {
    console.error("Error:", error);
  }
}

temp();
// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log("Data:", data.name, data.email);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetchPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    return data.slice(0, 3).map((post) => post.title);
  } catch (error) {
    console.error("Error:", error);
  }
}

console.log("Fetching posts...");
console.log(fetchPosts());

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
function timer() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function counter() {
  for (let i = 1; i <= 3; i++) {
    await timer(1000);
    console.log(i);
  }
}

counter();


// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function parseData(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const validJSON = '{"name": "Omar"}';
const invalidJSON = '{name: Omar}';

console.log("Valid JSON parse:", parseData(validJSON));
console.log("Invalid JSON parse:", parseData(invalidJSON));


// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function fetchTodo() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    let data = await response.json();
    let completedCount = data.filter(todo => todo.completed).length;
    console.log("Completed todos:", completedCount);
    return completedCount;
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchTodo();


// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
import DataFetcher from "./utils.js";
const dataFetcher = new DataFetcher();
console.log("data fetcher----->", dataFetcher.getUser(1))