'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  // order: function (starter, main) {
  //   return [this.starterMenu[starter], this.mainMenu[main]];
  // },
  order(starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  //orderDelivery: function(...)
  orderDelivery({ starterIndex = 2, mainIndex = 0, time = '20:20', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here's your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// //DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z); //2,3,4
// console.log(x, y); //2,3
// console.log(arr);

// let [main, , secondary] = restaurant.categories; // empty space to not take the second but the third.
// console.log(main, secondary);

// //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0)); //array
// const [starter, mainCourse] = restaurant.order(2, 0); //destructuring . not an array
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested; // 2, [5, 6]
// const [i, , [j, k]] = nested;
// console.log(i, j, k); //2, 5, 6

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8,9,1

// const ratings = [
//   ['rating', 4.19],
//   ['ratingCount', 14454],
// ];
// const [[, rat], [, count]] = ratings;
// console.log(rat, count); // 4.19  14454

// const ratingStars = [63, 18];
// const [fiveStar, oneStar, threeStar = 0] = ratingStars;
// console.log(fiveStar, oneStar, threeStar); // 63, 18, 0

// //Destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '10:00',
//   address: 'pristina',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'pristina',
//   starterIndex: 3,
//   time: '19:00',
// });

//The Spread operator
const arrr = [7, 8, 9];
const newArr = [1, 2, ...arrr]; //it adds 1,2.
console.log(newArr);

console.log(...newArr); //it shows the entire array joined together

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menuu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuu);

//Iterables: arrays, strings, maps, sets. NOT objects.

const str = 'almira';
const letters = [...str, '', 'S.'];
console.log(letters);
// console.log(`${...letters}vershevci`); doesnt work

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'almira' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; //making a copy of restaurant object
restaurantCopy.name = 'roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

//1) Destructuting

//SPREAD, because on RIGHT side of =
const ar = [1, 2, ...[4, 5]];
console.log(ar);

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, otherFood); // it shows pizza, and an array with all the left food from mainMenu and starterMenu. DOES NOT include the skipped elements.

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//2) Functions
const add = function (...numbers) {
  //pranon sa dojme parameters.
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5, 6);
add(2, 3, 3);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'olive', 'cheese', 'spinach');
restaurant.orderPizza('mushrooms');

// || - OR uses any data type, returns any data type - short-circuiting
// if the first value is truthy value, it immediately returns the first value
console.log(3 || 'almira'); //3
console.log(0 || 'almira'); //almira

// & - AND
// if the first value is falsy value, it immediately returns the falsy value.
console.log(0 && 'almira'); //0
console.log(7 && 'almira'); //almira . dyjat jane true, i lexon deri ne fund edhe e merr te fundit.
console.log('almira' && 0); //0

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '');
const guest = restaurant.numGuests ?? 10; // si OR.
console.log(guest); // 10

const rest1 = {
  name: 'capri',
  nrGuests: 20,
};

const rest2 = {
  name: 'la piazza',
  owner: 'almria',
};

//OR
// rest1.nrGuests = rest1.nrGuests || 10;
// rest2.nrGuests = rest2.nrGuests || 10;
rest1.nrGuests ||= 10; //if the current value of nrGuests is falsy, then set it to 10. if its not falsy return that value.
rest2.nrGuests ||= 10;

//nullish
rest1.nrGuests ??= 10;
rest1.nrGuests ??= 10;

//AND
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//FOR OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open); //error

//With optional chaining
console.log(restaurant.openingHours.mon?.open); //undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // const open = restaurant.openingHours.day //cant do that
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'method do not exist');
console.log(restaurant.al?.(0, 1) ?? 'method do not exist');

//arrays
const users = [{ name: 'almira', years: 20 }];
console.log(users[0]?.name ?? 'array empty');

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire objct
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open}, and close at ${close}.`);
}

//SETS
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pizza',
  'pasta',
]);
console.log(ordersSet); //SET OF 3: pasta, pizza, risotto.

console.log(new Set('almira')); // a l m i r
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('bread');
ordersSet.add('bread');
ordersSet.delete('bread');
console.log(ordersSet);
// ordersSet.clear();

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'chef', 'Waiter', 'manager', 'chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'chef', 'Waiter', 'manager', 'chef', 'Waiter']).size
);
console.log(new Set('almira').size);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//Common
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]); //array

//Union
const allFood = italianFoods.union(mexicanFoods);
console.log('Union:', allFood);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//Differences
const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log(uniqueItalian);

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log(uniqueMexican);

//Unique of both
const uniqueItalianMexican = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexican);

//are they all different from each other
console.log(italianFoods.isDisjointFrom(mexicanFoods));

//MAPS
const rest = new Map();
rest.set('name', 'almiras');
rest.set(1, 'jona');
console.log(rest.set(2, 'azra'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

//To read/get the values
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

const question = new Map([
  ['question', 'whats the best programming language?'],
  [1, 'java'],
  [2, 'c'],
  [3, 'js'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'wrong'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));
console.log(hours);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
// const answer = Number(prompt('Your answer:'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);

const airline = 'TAP Air Portugal';

console.log(airline.indexOf('r'));
console.log(airline.indexOf('d')); //-1
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf('A'), airline.lastIndexOf(' '))); //Air
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got middle seats');
  else console.log('you got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('11E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const lower = passenger.toLowerCase(); //jonas
const passengerN = lower.charAt(0).toUpperCase() + lower.slice(1);
console.log(passengerN); //Jonas

const email = 'hello@almira.io';
const emailN = ' Hello@Almira.io';

console.log(emailN.toLowerCase().trim());

const gb = '288,3#';
console.log(gb.replace('#', '$').replace(',', '.'));

const announcement =
  'all passangers come to boarding door 23. boarding door 23.';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

const plane = 'Airbus 1320neo';
console.log(plane.includes('1320'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));

//SPLIT and JOIN
const split = 'a+very+nice+string'.split('+');
console.log(split);
console.log(split[1]); //very

console.log('almira vershevci'.split(' '));

const [firstName, surname] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, surname);

const newName = ['Mr', firstName, surname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('almira vershevci');
capitalizeName('jona mulaku');

//Padding
const message = 'go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345432));
console.log(maskCreditCard(738464872674398));
console.log(maskCreditCard(13545434112));

const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(6));

const planes = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planes(5);
planes(7);
planes(9);
