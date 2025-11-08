'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const almira = new Person('almira', 2005);
console.log(almira);

//1. new {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const jay = 'jay';

console.log(almira instanceof Person); //true
console.log(jay instanceof Person); //false

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
almira.calcAge();

console.log(almira.__proto__);
console.log(almira.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(almira)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = 'homo sapiens';
console.log(almira);

console.log(almira.hasOwnProperty('firstName')); //true
console.log(almira.hasOwnProperty('species')); //false - its not directly inside in the almira's object, it simply has access to it because of its prototype.

// Person.prototype - all objects that are created there.

/////ES6 Classes
//Class expression
// const PersonCl = class{}

//Class declaration
class PersoncL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('hey there');
    console.log(this);
  }
}

PersoncL.hey();

const jessica = new PersoncL('Jessica Davis', 2000);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);
console.log(jessica._fullName);

console.log(jessica.__proto__ === PersoncL.prototype); //true

// PersoncL.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}!`);
// };
jessica.greet();

//1. classes are NOT hoisted
//2. classes are first-class citizes
//3. classes are executed in strict mode

// Getters and setters
const account = {
  owner: 'almira',
  movements: [200, 300, 120, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // not a constructor (because we dont call it with 'new')
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
//not ideal
steven.name = 'steven';
steven.birthYear = 2000;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('sarah', 2000);
sarah.calcAge();

//Inheritance Between "Classes": Constructor
//Functions

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person2.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2005, 'CSE');
const jona = new Person2('jona', 2000);
mike.introduce();
mike.calcAge(); // it works because we inherited the Person2 protoype

console.log(mike instanceof Student);
console.log(mike instanceof Person2);
console.log(mike instanceof Object);

// Inheritance with ES6 classes
class StudentCl extends PersoncL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`my name is ${this.fullName}, and i study ${this.course}`);
  }

  //overriding method (because this method appears first in the prototype chain)
  calcAge() {
    console.log(
      `i am ${2037 - this.birthYear} year old, but i feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const john = new StudentCl('john m', 2000, 'cse');
john.introduce();
john.calcAge();
john.greet();

// Inheritance with Object.create
const PersonPrroto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stevenn = Object.create(PersonPrroto);

const StudentPrroto = Object.create(PersonPrroto);

StudentPrroto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentPrroto.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};

const jayy = Object.create(StudentPrroto);
jayy.init('almira', 2000, 'cse');
jayy.calcAge();
jayy.introduce();

// another class ex

// public fields
// private fields
// private methods
// STATIC version of these 4

class Account {
  locale = navigator.language; //public
  bank = 'bankist'; //public
  #movements = []; //private
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    // private method
    // fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.#approveLoan(1000);  cant acces because its private
acc1.requestLoan(1000);

acc1.deposit(300).withdraw(100).withdraw(50).requestLoan(25000).withdraw(400); // in order to do this we need to return 'this' on each method

console.log(acc1);
// console.log(acc1.pin);  cant access because its private
