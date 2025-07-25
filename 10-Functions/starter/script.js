'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassangers = 1, price = 100) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

const flight = 'LH234';
const almiras = {
  name: 'almira',
  passport: 1242232234,
};

const checkin = function (flightNum, passenger) {
  flightNum = '199'; //this only changes the local copy for flighNum, it doesnt change the original flight varible, because its a primitive type.
  passenger.name = 'jona'; //modifying the actual object that almiras points to.

  if (passenger.passport === 1242232234) {
    console.log('checked in');
  } else {
    console.log('wrong passport');
  }
  console.log(flightNum, passenger); // 199,,,,jona...
};
checkin(flight, almiras);
// flight - JavaScript copies the value of the primitive into the function's parameter (flightNum).
// almiras - JavaScript passes a reference to the original object, not a copy.
console.log(flight, almiras);

//Is the same as doing...
const a = flight;
const b = almiras;
console.log(a, b);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(almiras);
checkin(flight, almiras);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('javascript is the best', upperFirstWord);
transformer('javascsript is the best', oneWord);

//JS uses callback funtions all the time
const high5 = function () {
  console.log(' 🙌 ');
};
document.body.addEventListener('click', high5); //high5 - callback function

['jona', 'almira', 'ajan'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};
const greetHey = greet('hey');
greetHey('almira');
greetHey('jona');

//or
greet('hey')('almira');

const greets = greeting => name => console.log(`${greeting}, ${name}`);
greets('hello')('ajan');

//CALL method
const lu = {
  airline: 'lut',
  icode: 'LU',
  bookings: [],

  //book:function(){}
  book(flighNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.icode}${flighNum}`
    );
    this.bookings.push({ flight: `${this.icode}${flighNum}`, name });
  },
};
console.log(lu.bookings);
lu.book(239, 'almira');
lu.book(237, 'jona');

const euro = {
  airline: 'ab',
  name: 'euro',
  icode: 'eu',
  bookings: [],
};

const book = lu.book;
// book(23, 'azra'); - doesnt work
book.call(euro, 23, 'azra');
console.log(euro);

book.call(lu, 234, 'abca');
console.log(lu);

//APPLY method
const swiss = {
  airline: 'ALMIRA',
  icode: '1213',
  bookings: [],
};

const flightData = [546, 'a'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//BIND method
const bookEW = book.bind(euro);
const bookLH = book.bind(lu);
const bookLX = book.bind(swiss);

bookEW(23, 'almira');
bookLH(23, 'almira');
bookLX(23, 'almira');

lu.planes = 200;
lu.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lu.buyPlane();

document.querySelector('.buy').addEventListener('click', lu.buyPlane.bind(lu)); //THIS keyword is attached to the event listener button.

//Partial aplication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(20));

// same as doing...
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(20));

const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate); doesnt have access

(() => console.log('this will ALSO never run again'))();

//CLOSURES
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
//re-assigning f
h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers.`);
    console.log(`there are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`will start boardinf in ${wait} seconds`);
};

const perGroup = 1000; //this will not be used as perGroup value over the perGroup created in boardPassengers
//  because closure has more priority than scope chain.
boardPassengers(180, 3);
