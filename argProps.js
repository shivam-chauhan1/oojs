function demo() {
  console.log(arguments.length); // Number of arguments passed
  console.log(arguments[0]); // First argument
  console.log(arguments.callee); // Deprecated in strict mode
}

demo("Hello", 42);
// Output:
// 2
// Hello
