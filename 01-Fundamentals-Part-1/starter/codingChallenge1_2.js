/*Mark and John are trying to compare their BMI (Body Mass Index),
 which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 
 Your tasks: 
 1. Store Mark's and John's mass and height in variables 
 2. Calculate both their BMIs using the formula (you can even implement both versions)
 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. */



const marksMass = 78;
const johnsMass = 92;

const marksHeight = 1.69;
const johnsHeight = 1.95;

const marksBMI = marksMass / (marksHeight ** 2);
console.log(marksBMI);

const johnsBMI = johnsMass / (johnsHeight ** 2);
console.log(johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);


if(marksBMI > johnsBMI){
    console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI}).`);
}else{
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI}).`);
}