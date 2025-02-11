const nums = [1, 2, 3, 4];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9, 16]

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); // ["banana", "cherry"]

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));

const ages = [22, 34, 19, 40];
const ageOver30 = ages.find((age) => age > 30);
console.log(ageOver30); // 34
