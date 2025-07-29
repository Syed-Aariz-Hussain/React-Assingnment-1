
const text = "JavaScript is great and JavaScript is powerful";
const wordCount = text.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log("1. Unique Words Count:", wordCount);


const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];
const grouped = students.reduce((acc, student) => {
  (acc[student.class] = acc[student.class] || []).push(student);
  return acc;
}, {});
console.log("2. Grouped Students:", grouped);



const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];
function filterByPrice(min, max) {
  return products.filter(p => p.price >= min && p.price <= max);
}
console.log("3. Filtered Products:", filterByPrice(100, 600));



function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log("4. Palindrome Check:", isPalindrome("madam"));



const nestedArray = [1, [2, [3, 4]], 5];
function flatten(arr) {
  return arr.flat(Infinity);
}
console.log("5. Flattened Array:", flatten(nestedArray));



const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("6. Total Salary:", totalSalary);
const data = [1, 2, [4, 5, [6, 8]], 10];
function sumEven(arr) {
  return arr.flat(Infinity).filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}
console.log("10. Sum of All Even Numbers:", sumEven(data));


function average(...nums) {
  const total = nums.reduce((sum, n) => sum + n, 0);
  return total / nums.length;
}
console.log("11. Average:", average(10, 20, 30, 40));


const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const freq = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log("12. Frequency Count:", freq);



const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];
function toggleStatus(id) {
  return tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
}
console.log("13. Toggle Status:", toggleStatus(1));


// 14. Sort by Name Length
const names = ["Ali", "Zara", "Ahmed", "Usman"];
names.sort((a, b) => a.length - b.length);
console.log("14. Sorted by Length:", names);

