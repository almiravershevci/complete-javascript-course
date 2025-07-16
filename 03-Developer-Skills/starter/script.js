// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// We work for a company building a smart home thermometer. our most recent task is this: 'given an array of temperatures
// of one day, calculate the tempertature amplitude. keep in mind that sometimes ther might be a sensor error.

// 1. understanding the problem
// - amplitude - differnece between highest and lowest temp
// - finding min and max value in temp array and than subtracting min from max and return
// - sensor error

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));

//merging two arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

console.log(calcTempAmplitudeNew([2, 3, 4], [1, 2, 3]));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius:')),
  };
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(`Kelvin: ${measureKelvin()}`);
