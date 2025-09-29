// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.

intNum = parseInt("258.90");
console.log(intNum);
floatNum = parseFloat("258.90");
console.log(floatNum);

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
num2 = 7.45678;
console.log(num2.toFixed(2));
console.log(Number(num2.toFixed(2)));

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
console.log(isNaN("abc"));
console.log(isNaN(""));

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
console.log((0.1 + 0.2).toFixed(1));

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
function checkNum(s) {
  if (isNaN(parseInt(s))) return null;
  else return parseInt(s);
}

console.log(checkNum("120px"));

// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFiniteNumber(value) {
  return (
    typeof value === "number" &&
    !isNaN(value) &&
    value !== Infinity &&
    value !== -Infinity
  );
}
// passing
// console.log(isFiniteNumber(42));
// console.log(isFiniteNumber(-3.14));
// console.log(isFiniteNumber(0));
// console.log(isFiniteNumber(1e6));

// not passing
// console.log(isFiniteNumber("42"));
// console.log(isFiniteNumber(NaN));
// console.log(isFiniteNumber(Infinity));
// console.log(isFiniteNumber(null));

// 7. Remove leading and trailing spaces from the string "   hello world  ".
console.log("   hello world  ".trim());

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
var s = "javascript";
console.log(s.slice(4, 10));
console.log(s.substring(4));

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
var s = "Banana Mania";
s = s.toLowerCase();
var count = 0;
for (i = 0; i < s.length; i++) {
  if (s[i] == "a") count += 1;
}
console.log(count);

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverseString(s) {
  res = "";
  for (i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
}
console.log(reverseString("hello world"));

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(s) {
  var res = "";
  var before = "";
  for (i = 0; i < s.length; i++) {
    if (i == 0) res += s[i].toUpperCase();
    else if (s[i - 1] == " ") res += s[i].toUpperCase();
    else res += s[i];
  }
  return res;
}
console.log(capitalizeWords("hello there friend"));

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
function extractDomain(url) {
  start = url.indexOf("://");
  start += 3;

  end = url.indexOf("/", start);

  return url.slice(start, end);
}

console.log(extractDomain("https://example.com/path/to/page"));

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(haystack, needle) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return i;
  }
  return -1;
}

console.log(naiveIndexOf("moh", "m"));

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = "hello";
if (s.toUpperCase === "HELLO") {
  console.log("match");
}
// the issue is if write = that assign the "HELLO" to the variable thats return true so we should write ===

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
console.log(arr);

// 16. Remove the last element and store it. Remove the first element and store it.
var lastElement = arr.pop();
console.log(lastElement);
var firstElement = arr.shift(0);
console.log(firstElement);

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
arr = [10, 20, 30, 40, 50];
newArr = arr.slice(0, 3);
console.log(newArr);

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, "a", "b");
console.log(arr);

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3, 4, 5];

sliced = arr1.slice(1, 4);
console.log(sliced);

spliced = arr2.splice(1, 2);
console.log(spliced);

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
var arr = [];

arr[7] = "hello";

console.log(arr.length);

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(array) {
  result = [];
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}

arr = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];
console.log(compact(arr));

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepClone1D(a) {
  var clone = [];
  for (var i = 0; i < a.length; i++) {
    clone[i] = a[i];
  }
  return clone;
}

var arr = [10, 20, 30, 40];
var copy = deepClone1D(arr);

console.log(copy);
console.log(copy === arr);

// 23. Map [1,2,3] to their squares using map.
var arr = [1, 2, 3];

var squares = arr.map(function (x) {
  return x * x;
});

console.log(squares);

// 24. Filter [5,10,15,20] to keep values >= 12.
var arr = [5, 10, 15, 20];

var filtered = arr.filter(function (x) {
  return x >= 12;
});

console.log(filtered);

// 25. Reduce [2,4,6] to product.
var arr = [2, 4, 6];

var product = arr.reduce(function (acc, x) {
  return acc * x;
}, 1);

console.log(product);

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
function arraySum(a) {
  return a.reduce(function (acc, x) {
    return acc + x;
  }, 0);
}

function arraySumLoop(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

var arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr));
console.log(arraySumLoop(arr));

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
var names = ["Ali", "Sara", "Kareem"];
var res = [];
for (var i = 0; i < names.length; i++) {
  res.push(names[i][0]);
}
console.log(res);

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(a) {
  var res = [];
  for (var i = 0; i < a.length; i++) {
    var found = false;
    for (var j = 0; j < res.length; j++) {
      if (a[i] === res[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      res.push(a[i]);
    }
  }
  return res;
}
var a = [1, 1, 2, 3, 4, 4, 5];
res = unique(a);
console.log(res);

// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
function flatten1(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten1([1, [2, 3], [4], 5]));

// 31. Create object person with name and age; add a new property city after creation.
var person = {
  name: "moh",
  age: "23",
};
person.city = "10th Of Ramadan City";
console.log(person["name"]);

// 32. Access a property via bracket notation with a dynamic key variable.
var age = "age";
console.log(person[age]);

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

// 39. List (as comments) 5 different values that coerce to false in ES5.
// 0, "", null, undefined, NaN

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v) {
  return v === 1 || v === "1";
}

// 41. Create a Date for Jan 1, 2025 00:00 local.
var date = new Date(2025, 0, 1);
console.log(date);
// 42. Get the current year from new Date().
var now = new Date();
console.log(now.getFullYear());

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1, d2) {
  var msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((d2 - d1) / msPerDay);
}
console.log(daysBetween(new Date(2025, 0, 1), new Date(2025, 0, 2)));

// 44. Generate a random integer 1..100.
console.log(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

// 45. Round 4.567 to nearest integer, round down, and round up (three results).
console.log(Math.round(4.567));
console.log(Math.floor(4.567)); 
console.log(Math.ceil(4.567)); 

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
console.log(randomIntArray(5, 1, 10));

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
function parsePriceList(str) {
  var result = {};
  var items = str.split(";");
  for (var i = 0; i < items.length; i++) {
    var parts = items[i].split(":");
    if (parts.length === 2) {
      result[parts[0]] = parseFloat(parts[1]);
    }
  }
  return result;
}
console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
  var filtered = [];
  for (var i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number" && isFinite(mixedArray[i])) {
      filtered.push(mixedArray[i]);
    }
  }
  return filtered.sort(function(a, b) {
    return a - b;
  });
}
console.log(filterAndSortNumbers([1, 2, "3", 4, Infinity, 5, NaN, 6]));