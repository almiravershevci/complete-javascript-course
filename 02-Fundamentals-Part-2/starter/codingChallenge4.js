// Your tasks:
// Create an array called bills containing all 10 test bill values.
// Create empty arrays for the tips and the totals (tips and totals)
// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) 
// for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:
// Write a function calcAverage which takes an array called arr as an argument. 
// This function calculates the average of all numbers in the given array.

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. 
// Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. 
// This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
// Call the function with the totals array.

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills1.length; i++){
    const tip = calcTip1(bills1[i]);
    tips.push(tip);
    totals.push(tip + bills1[i]);
}
console.log(bills1, tips, totals);


const calcAverage1 = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage1(totals));
console.log(calcAverage1([1,2,3]));



