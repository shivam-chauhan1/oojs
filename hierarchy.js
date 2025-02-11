function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function Employee(name, age, company) {
  Person.call(this, name, age);
  this.company = company;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} works at ${this.company}`);
};

function Developer(name, age, company, tech) {
  Employee.call(this, name, age, company);
  this.tech = tech;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function () {
  console.log(`${this.name} is coding in ${this.tech}`);
};

const dev = new Developer("Shivam", 21, "ToTheNew", "JavaScript");
dev.greet();
dev.work();
dev.code();
