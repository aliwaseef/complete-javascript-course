// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991));

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degrees celsius: ')),
//     value: 10,
//   };
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// Coding Challenge #1

const printForecast = function (temps) {
  let forecast = '';
  for (let i = 0; i < temps.length; i++) {
    forecast += `${temps[i]}ºC in ${i + 1} days...`;
  }
  return forecast;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
