const obj = { name: "Shivam" };

function greet(age) {
  console.log(`Hello, I am ${this.name} and I am ${age} years old.`);
}

// Using call()
greet.call(obj, 21);

// Using bind()
const boundGreet = greet.bind(obj, 22);
boundGreet();
