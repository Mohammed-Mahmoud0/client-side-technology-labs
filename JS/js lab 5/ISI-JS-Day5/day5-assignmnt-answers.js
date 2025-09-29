// 1. Predict (in comments) the output order of this code, then run to verify.
console.log(a());
let b = function () {
  return "B";
};
function a() {
  return "A";
}
console.log(b());
// A B

//    After verifying, explain (one short line) why a works before definition and b does not.

// cuz Function a is hoisted, function b not hoisted.

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).

let add = function (a, b) {
  return a + b;
};
function sum(a, b) {
  return a + b;
}
console.log(add(3, 4));
console.log(sum(3, 4));

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
var factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5));
// console.log(fact(5)); // Error: fact is not defined

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo() {
  console.log("Num of arguments is: ", arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log("Argument", i + 1, ":", arguments[i]);
  }
}
showInfo();
showInfo(1, 2);
showInfo(1, 2, 3, 4, 5);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x, y) {
  console.log("Before:", arguments[0], arguments[1]);
  x = 10;
  y = 20;
  console.log("After:", arguments[0], arguments[1]);
}
mutate(1, 2);

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(2, 5, 3));

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll() {
  let args = Array.from(arguments);
  let sum = args.reduce((acc, val) => acc + val, 0);
  return sum;
}
console.log(sumAll(2, 5, 3));
// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue() {
  if (arguments.length === 0) {
    return "none";
  } else if (arguments.length === 1) {
    return "one: " + arguments[0];
  } else if (arguments.length === 2) {
    return "two: " + arguments[0] + ", " + arguments[1];
  } else {
    return "too many";
  }
}
console.log(describeValue());

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
let funcs = [
  function (n) {
    return n + 1;
  },
  function (n) {
    return n - 2;
  },
  function (n) {
    return n * 3;
  },
];
let start = 10;
for (let i = 0; i < funcs.length; i++) {
  start = funcs[i](start);
}
console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);
console.log(double(7));
console.log(triple(7));

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
function once(fn) {
  let done = false;
  let result;

  return function () {
    if (!done) {
      done = true;
      result = fn.apply(this, arguments);
    }
    return result;
  };
}

function greet(name) {
  console.log("Hello " + name);
  return "Greeting sent to " + name;
}

// let greetOnce = once(greet);

// console.log(greetOnce("Omar"));
// console.log(greetOnce("Ali"));
// console.log(greetOnce("Sara"));

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.

function once(fn) {
  let done = false;
  let result;

  return function () {
    if (!done) {
      done = true;
      result = fn.apply(this, arguments);
    }
    return result;
  };
}

function greet(name) {
  console.log("Hello " + name);
  return "Greeting sent to " + name;
}

let greetOnce = once(greet);

console.log(greetOnce("Omar"));
console.log(greetOnce("Ali"));
console.log(greetOnce("Sara"));

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start) {
  let total = start;
  return function (n) {
    total += n;
    return total;
  };
}
let adder1 = makeAdder(5);
let adder2 = makeAdder(10);
console.log(adder1(3));
console.log(adder2(4));

// 15. (Bonus) Implement memoize1(fn). Show it caches slowSquare(9) twice.

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
let user = {
  name: "moh",
  sayHi: function () {
    console.log(`hi ${this.name}`);
  },
};

user.sayHi();
var f = user.sayHi;
f();
// var output hi and sayHi output hi moh
// cuz this in f() refers to global object not user object.

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
let user2 = { name: "Sara" };
user.sayHi.call(user2);
user.sayHi.apply(user2);

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
let greeter = {
  greet: function (greeting, sign) {
    console.log(greeting + " " + this.name + sign);
  },
};
let user3 = { name: "Ali" };
greeter.greet.apply(user3, ["Hello", "!"]);

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
let user4 = { name: "Lara" };
let greetLara = greeter.greet.bind(user4);
greetLara("Hi", "+++");
greetLara("Hola", "---");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
function sayHello(obj, sign) {
  greeter.greet.call(obj, "Hello", sign);
}

sayHello({ name: "Sara" }, "!!");
sayHello({ name: "Ali" }, "*");
sayHello({ name: "Lara" }, "<#");

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function Reversed() {
  var argsArr = Array.from(arguments);
  var reversed = argsArr.slice().reverse();
  console.log("Original:", argsArr);
  console.log("Reversed:", reversed);
}

Reversed(1, 2, 3, 4);

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
let arr = [5, 2, 11, 7];
let maxVal = Math.max.apply(null, arr);
console.log(maxVal);

function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
console.log(Math.max(3, 4, 5));
// apply is better cuz can pass array to max

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
let name = "Omar";
let age = 28;
console.log(`User: ${name} Age: ${age + 1}`);

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
let title = "hello moh";
let body = "hello moh how are you";
console.log(`Title: ${title}
Body: ${body}`);

console.log("Title: " + title + "\nBody: " + body);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if (true) {
  var i = 10;
  let j = 20;
  console.log(`inside: ${i}, ${j}`);
}
// console.log(`outside: ${i}, ${j}`);
// outside give error that cuz j is not defined cuz let makes it block scope.

// 28. Write code that tries to log x before let x = 5;.
// console.log(x);
let x = 5;
//  that gives error cuz x not defined

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
// nums = [5, 6, 7];
// reassigning a const variable gives error cuz we change the reference not the content of the array.

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
let squareFull = (n) => {
  return n * n;
};
console.log(squareFull(4));
let squareConcise = (n) => n * n;
console.log(squareConcise(5));
let arr2 = [1, 2, 3];
let squaredArr = arr2.map((n) => n * n);
console.log(squaredArr);

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).
let timer = {
  count: 0,
  startClassic: function () {
    let that = this;
    setInterval(function () {
      that.count++;
      console.log("Classic:", that.count);
    }, 1000);
  },
  startArrow: function () {
    setInterval(() => {
      this.count++;
      console.log("Arrow:", this.count);
    }, 1000);
  },
};

// timer.startClassic();

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
let obj = () => ({ v: 10 });
console.log(obj());

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
let obj2 = {
  value: 100,
  method: () => {
    console.log(this.value);
  },
};
obj2.method();
// when use this dont use arrow cuz in this case this dont refer to object

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
function greet(name) {
  return "Hi " + name + "!";
}
const greet1 = (name) => {
  return `Hi ${name}!`;
};

console.log(greet1("moh"));

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const addF = (n) => n + 2;
const timesF = (n) => n * 3;
const minusF = (n) => n - 1;
function runPipeline(n, fnsArray) {
  for (let i = 0; i < fnsArray.length; i++) {
    n = fnsArray[i](n);
  }
  return n;
}
console.log(runPipeline(5, [addF, timesF, minusF]));

// 36. (write answers BEFORE running):
var obj22 = {
  n: 1,
  inc: function () {
    this.n++;
    return this.n;
  },
};
var inc = obj22.inc;
console.log(obj22.inc());
console.log(inc());
//    Explain both lines.
// 2 nan 2 cuz it calls the func and increment this.n
// nan cuz inc() doesn't refer to obj22

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counters = [];

for (let i = 0; i < 1000; i++) {
  counters.push(makeCounter());
}
console.log(counters[100]());
// that makes an 100 counter with his value closure in the mem

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst() {
  if (arguments.length === 0) {
    return undefined;
  } else {
    return Array.from(arguments);
  }
}

console.log(safeFirst());

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
function factory(namesArray) {
  let obj = {};
  for (let i = 0; i < namesArray.length; i++) {
    let name = namesArray[i];
    let count = 0;

    obj[name] = () => {
      count++;
      return count;
    };
  }
  return obj;
}

var counterss = factory(['a', 'b']);
console.log(counterss.a())
console.log(counterss.b())

// 40. Write 2 things that were new or tricky today (comment).
// 1- closure 
// 2- function return  function 