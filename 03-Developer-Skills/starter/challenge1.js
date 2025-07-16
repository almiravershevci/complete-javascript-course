// [17,21,23] will print '...17C in one days...21C in two days...23C in three days...'
// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `...${arr[i]} in ${i + 1} days`;
  }
  return forecast + '...';
};

const celcius = [17, 21, 23];
console.log(printForecast(celcius));
