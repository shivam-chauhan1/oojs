class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }

  work() {
    console.log(`${this.name} works at ${this.company}`);
  }
}

class Developer extends Employee {
  constructor(name, age, company, tech) {
    super(name, age, company);
    this.tech = tech;
  }

  code() {
    console.log(`${this.name} is coding in ${this.tech}`);
  }
}

const dev = new Developer("Shivam", 21, "ToTheNew", "JavaScript");
dev.greet();
dev.work();
dev.code();
