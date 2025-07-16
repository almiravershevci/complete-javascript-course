// ctrl+sihft+p --> open git:clone
// ctrl+shift+j --> google console

// undefined - when we declare empty variables. Ex: let year;
// We can not declare empty variables using CONST. Duhet gjithe me pas initial value.

// MUTABLE VARIABLES USING LET  (CAN BE CHANGED LATER)
// let age = 30
// age = 40

// IMMUTABLE VARIABLES USING CONST (CAN NOT BE CHANGED)
// const birthyear = 2000;
// birthyear = 2001; XXX

// Type conversion - when we manually convert from one type to other.
// Type coercion - when javascript automatically converts types behind the scenes for us.

// expression - when it produces a value.
// statement - full sentence that translate our actions (doesn't produce a value).

// functions - callable objects
// arrays - ordered collection of values
// objects - key-value pairs

/*  let js = 'amazing';
    if(js === 'amazing') alert ('javascript correct');


console.log(50+5);
console.log('almira');

let firstname = 'almira';
console.log(firstname);

firstname = true;
console.log(firstname);

let surname = true;
console.log(typeof surname); //true
console.log(typeof true);  //true

console.log(typeof 23); //number
console.log(typeof 'almira'); //string

const now = 30;
const age1 = now + 50;
const age2 = now - 20;
console.log(age1, age2);

console.log(age1 * 2, age1 / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3, 2 x 2 x 2.

const firstName = 'almira';
const lastName = 'vershevci';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 10;
x /= 10;
x++;
x--;
console.log(x);

console.log(age1 > age2); //true
console.log(age1 >= age2); //true

const averageAge = (age1 + age2) / 2;
console.log(age1, age2, averageAge);


const firstName = 'almira';
const job = 'student';
const birthYear = 2005;
const year = 2025;

const rez = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job;
console.log(rez);

const rezNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(rezNew);

console.log(`just a regular string..`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 12

if(age >= 18){
    console.log('you can start your driving licence.');
}else{
    const yearLeft = 18 - age;
    console.log(`youre too young. wait another ${yearLeft} years.`);
}


const birthYear = 1998;

let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991, '1991'
console.log(Number(inputYear) + 18); //2009

console.log(Number('jonas')); //NaN (not a number)
console.log(typeof NaN); //number (invalid number)

console.log(String(23), 23);


//type coercion 
console.log('i am ' + 23 + ' years old.'); // 23 becomes a string. i am 23 years old..
console.log('23' + '10' + 3); // 23103, because the + operator automatically converts numbers to strings.
console.log('23' - '10' - 3); //10, because the - operator converts strings to numbers. 
console.log('23' + 3 - '2'); //231 as a number
console.log('23' + '3' - 2); //231 as a number
console.log(23 + 3 + '2');  //262 as a string
console.log(23 - 3 - '2'); //18  number
console.log('23' + '3' + 2); //2332 as a string
console.log('23' * '2'); //46 number
console.log('23' / '2'); //11.5 number
console.log(2+3+4+'5'); //95
console.log('10'-'4'-'3'-2+'5'); //15

let n = '1' + 1;  //'11'
n -= 1;           //11 - 1 (converts the '11' to 11)
console.log(n);   //10


//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true
console.log(Boolean('jonas')); //true
console.log(Boolean('')); //false

const money = 0;
if(money){
    console.log('dont spend it all');  // when if else statements, the if converts anything to boolean,
                                      // so 0 in this case is a falsy value, so we move to 'else'.
                                      // if  for ex. money = 100 , output: 'dont spend it all'
}else{
    console.log('get a job');
} //output: get a job


const age = 18;
if(age === 18) console.log('youre an adult(strict)'); //edhe data types duhet me kon tnjejte
 
if(age == 18) console.log('youre an adult(loose)'); // ska rendsi per data types

const favourite = Number(prompt('whats your fav number?'));
console.log(favourite); //without Number() --> output: '23' as a string. 
                        //we add Number() to convert the '23' to 23 as a number.

if(favourite === 23){
    console.log('cool');
}else if(favourite === 7){
    console.log('also cool');
}else{
    console.log('not cool');
}

if(favourite !== 23){
    console.log('why not 23?');
}
    

const hasDrivenLicense = true;
const hasVision = false;
const isTired = false;

console.log(hasDrivenLicense && hasVision); //false
console.log(hasDrivenLicense || hasVision); //true;
console.log(!hasDrivenLicense); //false;

if(hasDrivenLicense && hasVision && isTired){
    console.log('ok');
}else{
    console.log('not ok');
}
     

const day = 'wednesday';

switch(day){
    case 'monday':
        console.log('gym');
        console.log('meeting');
    break;

    case 'tuesday':
        console.log('shoot');
    break;

    case 'wednesday':
    case 'thursday':
        console.log('recordings');
    //nese ska break, i merr vlerat per rastin paraprak edhe shkon direkt i merr edhe te friday.
    case 'friday':
        console.log('school');
    break;

    case 'saturday':
    case 'sunday':
        console.log('chill');
    break;

    default:
        console.log('not a valid date.');
}


432 + 232; //expression
232; //expression
true && false && !true; //expression (produce a value)

if(21 > 10){
    const str = '21 is bigger';
} //statement
*/

const age = 25;
age >= 23 ? console.log("ok") : console.log("not ok"); //ternary operator

const ageNew = age >= 23 ? "ok" : "not ok";
console.log(ageNew);

console.log(`it is ${age >= 23 ? "ok" : "not ok"}`);
