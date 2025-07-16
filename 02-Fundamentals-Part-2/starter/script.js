'use strict';
/*
function logger(){
    console.log('hi im almira');
}

//calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apple, oranges){
    const juice = `juice with ${apple} apples, and ${oranges} oranges.`
    return juice;
}
console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(2, 3));

//function declaration
function calcAge1(birthYear){
    return 2025 - birthYear;
}
const age1 = calcAge1(2005);

//function expression
const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(2005);

console.log(age1, age2);
// or console.log(calcAge1(2005), calcAge2(2005));

//main difference is that you can hoist function declarations(calcAge1) at the top of their scope(before the line where it's defined)
// but you cant do that with function expression.

//arrow function
const calcAge3 = birthYear => 2025 - birthYear;
console.log(calcAge3(2005))

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2005, 'Almira'));
console.log(yearsUntilRetirement(2009, 'Jona'));



function cutPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apple, oranges){

    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcessor(5, 0));


const calcAge1 = function(year){
    return 2025 - year;
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge1(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
        //if the return is before the console.log, the console log wont be shown because the return exits the function.
    }else{
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1999, 'almira'));
console.log(yearsUntilRetirement(1900, 'jona'));    */

// const friends = ['almira', 'jona', 'ajan'];
// console.log(friends);

// const y = new Array(1,2,3,4);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length); //3
// console.log(friends[friends.length - 1]); //ajan 

// friends[1] = 'azra';  //we can change 'friends' even tho we used const because arrays are not primitive. 
//                         // only primitive values are immutable with const.
// console.log(friends);

// // friends = ['a', 'b', 'c']; we can not change the whole array.

// //we can put many different data types in an array.
// const firstName = 'almira';
// const a = [firstName, 2025 - 2005, 'student', friends];
// console.log(a);


// const calcAge = function(year){
//     return 2025 - year;
// }

// const years = [2001,2002,2003,2004];
// const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
// console.log(age);

// const friends = ['almira', 'jona', 'ajan'];
// friends.push('azra', 'alm', 'al', 123); // adds elements in the end. also returns the length of the whole array, 
//                                         // so if we want the length, we just store it to a variable and console it
// console.log(friends);

// friends.unshift('irena'); //adds elements in the beginning.
// console.log(friends);

// friends.pop(); // removes the last element
// const popped = friends.pop();
// console.log(friends);
// console.log(popped); // e shfaq elementin qe u bo pop

// friends.shift(); //removes the first element
// console.log(friends);

// console.log(friends.indexOf('ajan')); //ncilin index -> 2
// console.log(friends.indexOf('era'));  // -1

// console.log(friends.includes('ajan')); //true
// console.log(friends.includes('era'));  //false
// console.log(friends.includes('123'));  //false

// if(friends.includes('almira')){
//     console.log('almira is here.')
// }

// const almirasArray = [
//     'almira',
//     'vershevci',
//     19,
//     'student',
//     ['jona','blinera']
// ];

// const almirasObject = {
//     firstname: 'almira',
//     lastname: 'vershevci',
//     age: 19,
//     birthYear: 2000,
//     job: 'student',
//     friends: ['jona','blinera'],

//     calcAge: function(birthYear){
//         return 2025 - birthYear;
//     }
// };
// console.log(almirasObject);
// console.log(almirasObject.calcAge(1998)); // or (almirasObject['calcAge'](1998))

// console.log(almirasObject.lastname);
// console.log(almirasObject['lastname']);

// const nameKey = 'name';
// console.log(almirasObject['first'+ nameKey]);
// console.log(almirasObject['last'+ nameKey]);

// const interestedIn = prompt('what do u want to know about almira? choose firstname, lastname, job, age, friends');

// if(almirasObject[interestedIn]){
//     console.log(almirasObject[interestedIn]);
// }else{
//     console.log('wrong request. choose firstname, lastname, job, age, friends');
// }

// almirasObject.location = 'portugal';
// almirasObject['twitter'] = 'abc';
// console.log(almirasObject);

// //'almira has 2 friends, and her best friend is jona.'

// console.log(`${almirasObject.firstname} has ${almirasObject.friends.length} friends, and ${almirasObject.friends[0]} is her bff.`);

// const almirasObject2 = {
//     firstname: 'almira',
//     lastname: 'vershevci',
//     birthYear: 2000,
//     job: 'student',
//     friends: ['jona','blinera'],
//     hasDriversLicence:true,

//     calcAge: function(){
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function(){
//         return `${this.firstname} is a ${this.calcAge()} year old ${this.job} , and she has 
//         ${this.hasDriversLicence ? 'a' : 'no'} drivers licence.`;
//     }
// };
// console.log(almirasObject2.calcAge());
// console.log(almirasObject2.age);
// console.log(almirasObject2.age);
// console.log(almirasObject2.age);

// console.log(almirasObject2.getSummary());


//loops

for(let rep = 1; rep <= 10; rep++){
    console.log('Lifting rep 1');
} //prints the string 10 times.

for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting rep ${rep}`);
} //increases the number of reps.


const almira = [
    'almira',
    'vershevci',
    19,
    'student',
    ['jona','blinera'],
    true
];

const types = [];

for(let i = 0; i < almira.length; i++){
    //reading from almiras array
    console.log(almira[i], typeof almira[i]);

    //filling the array
    // types[i] = typeof almira[i];
    types.push(typeof almira[i]);
}

console.log(types);

const years = [1999, 2000, 2001, 2002];
const age = [];

for(let i = 0; i < years.length; i++){
    age.push(2025 - years[i]);
}

console.log(age);

console.log('----only strings----');
for(let i = 0; i < almira.length; i++){
    if(typeof almira[i] !== 'string') continue; //the continue exits the current iteration, so the console log for that iteration wont be printed.

    console.log(almira[i], typeof almira[i]);
}

console.log('----BREAK with number----');
for(let i = 0; i < almira.length; i++){
    if(typeof almira[i] === 'number') break; //the break stops the loop completely, so after the number is found, no other element is printed.

    console.log(almira[i], typeof almira[i]);
}

//backwards loops
//4,3,...,0
for(let i = almira.length - 1; i >= 0; i--){
    console.log(i, almira[i]);
}

//loop inside loop
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-----starting exercise ${exercise}------`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

//while loop
let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('loop is about to end...');
}
