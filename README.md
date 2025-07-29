# JavaScript Logical Practice Questions (Mixed Topics)

---

## 1. Unique Words Counter

**Input:** A string  
```js
const text = "JavaScript is great and JavaScript is powerful";
```

**Task:** Return an object with each unique word and its count.

---

## 2. Group Students by Class

**Input:**
```js
const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];
```

**Task:** Return an object like:
```js
{
  "10th": [ { name: "Ali" }, { name: "Ahmed" } ],
  "9th": [ { name: "Sara" }, { name: "Zara" } ]
}
```

---

## 3. Filter Products by Price Range

**Input:**
```js
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];
```

**Task:** Create a function that takes min and max price and returns filtered products.

---

## 4. Check Palindrome Using Function

**Input:** A string like `"madam"`  
**Task:** Check if it is palindrome using a function.

---

## 5. Flatten Array

**Input:**
```js
const nestedArray = [1, [2, [3, 4]], 5];
```

**Task:** Flatten the array to:
```js
[1, 2, 3, 4, 5]
```

---

## 6. Total Salary Calculation (Using Reduce)

**Input:**
```js
const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];
```

**Task:** Get total salary of all employees using `reduce()`.

---

## 7. Find Duplicate Numbers in an Array

**Input:**
```js
const nums = [1, 2, 3, 2, 4, 1, 5];
```

**Task:** Return an array of duplicate numbers:
```js
[1, 2]
```

---

## 8. Convert Array of Pairs to Object

**Input:**
```js
const pairs = [["a", 1], ["b", 2], ["c", 3]];
```

**Task:** Convert it to:
```js
{ a: 1, b: 2, c: 3 }
```

---

## 9. Capitalize First Letter of Each Word

**Input:**
```js
const sentence = "hello world from javascript";
```

**Task:** Return:
```js
"Hello World From Javascript"
```

---

## 10. Sum of All Even Numbers in Nested Array

**Input:**
```js
const data = [1, 2, [4, 5, [6, 8]], 10];
```

**Task:** Return the sum of all even numbers:
```js
2 + 4 + 6 + 8 + 10 = 30
```

---

## 11. Rest Operator in Function

**Task:** Write a function that takes any number of numbers and returns their average.

```js
function average(...nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}
```

---

## 12. Frequency Count with Spread

**Input:**
```js
const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
```

**Task:** Count how many times each fruit occurred using spread & reduce:
```js
{ apple: 3, banana: 2, orange: 1 }
```

---

## 13. Toggle Status

**Input:**
```js
const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];
```

**Task:** Write a function that toggles `done` status of a task by id.

---

## 14. Sort by Name Length

**Input:**
```js
const names = ["Ali", "Zara", "Ahmed", "Usman"];
```

**Task:** Sort names by length in ascending order:
```js
["Ali", "Zara", "Usman", "Ahmed"]
```

