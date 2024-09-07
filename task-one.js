// Task-1:


// Write a function to convert temperature from Celsius to Fahrenheit.



function celsiusToFahrenheit (celsius) {
    let result = (celsius * 9/5) + 32;
    return result;
}
let tempCelsius = 100;
let tempFahrenheit = celsiusToFahrenheit(tempCelsius);
// console.log(resultFahrenheit, 'F');
console.log(`${tempCelsius}°C is ${tempFahrenheit}°F`);