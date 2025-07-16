'use strict';

const firstName = 'almira';

// function first() {
//   const age = 21;

//   if (age > 20) {
//     const decade = 2;
//     console.log(decade);
//   }
//   console.log(decade); //error. it only works inside the if. the decade should be declared outside the if in order to work.

//   function second() {
//     const job = 'student';
//     console.log(
//       `my name is ${firstName}, im ${age}years old and im a ${job} and ${decade}` // error at 'decade' because their scopes are not written inside one another.
//     );
//   }
//   second(); // we can call the age variable because second() is a child of first().
//   //  if second() was an independent function, we couldnt call age, because funtion variables can only be called inside their parent functions.
// }
// first();

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'jona';

      //reassigning outer scope's value
      output = 'NEW OUTPUT';

      const str = `oh, and your a millenial, ${firstName}`; //jona and not almira because it first looks in the current scope,
      // and then in the scope chain if its not in the current scope.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }

    // console.log(str); doesnt work because str is defined only in if block, cant call outside of it.
    console.log(millenial); // it works only with var.
    // add(2, 3);
    console.log(output); // NEW OUTPUT
  }
  printAge();
}
calcAge(1991);
// printAge(); doesnt work
// console.log(age); doesnt work because age is in function scope, cannot be called outside of it.

// const myName = 'almira';
// if (myName === 'almira') {
//   console.log(`almira is a ${job}`); //cannot acces 'job' before initialization - TEMPORAL DEAD ZONE for JOB variable.
//   const job = 'teacher';
// }

//THIS keyword
const almira = {
  year: 2005,
  calcAge: function () {
    console.log(this); // almira's object
    console.log(2025 - this.year);
  },
};
almira.calcAge(); // the THIS keyword takes the values from almiras object because thats the object who's calling it.

const jona = {
  year: 2017,
};
jona.calcAge = almira.calcAge; //method borrowing.
jona.calcAge(); //the THIS keyword now takes the values from jona even tho its created in almiras object, because jona is calling it.

// const f = jona.calcAge;
// f(); //undefined. can not read year because now its just a regular function, not an object, not an owner.

var firstNamee = 'jona';

const a = {
  firstNamee: 'almira',
  year: 2005,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // works because the arrow function inherits the THIS keyword from the parent scope. (calcAge)
  },

  greet: () => console.log(`hey ${this.firstNamee}`), //hey undefined - because arrow functions do not get their own THIS keyword.
  // if we declare firstnamee with VAR then it prints hey jona becauase var creates a property in the global object.
  //  THATS WHY we should not use arrow functions and VAR declarations.
};
a.greet();
a.calcAge();

const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['a', 'b', 'c'],
};

const married = jessica; //they get the same reference that point to the exact same object in the heap.
married.lastName = 'david'; //this also changes the last name of jessica object.

console.log('before:', jessica);
console.log('after:', married);

// jessica = { age: 23 }; //we cant do that because it will get a new reference in the heap
jessica.age = 23; //allowed.

//Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'davis'; //this changes only the last name of jessicaCopy.

jessicaCopy.family.push('mary', 'john'); //but this adds those two names to both arrays, because thats considerated an object,
// and objects get the same reference that point to the exact same object in the heap.
console.log('before:', jessica);
console.log('after:', jessicaCopy);

//Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('mary', 'john');

console.log('org:', jessica);
console.log('clone:', jessicaClone); //now the names are only added to jessicaClone.
