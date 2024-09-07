// Task-5:

// Generate a random number between 10 to 20.



// solution -1 with fraction

// function generateRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

//   // Sample usage:
// const randomNumber = generateRandomNumber(10, 20);
// console.log("Random number:", randomNumber);



// solution -2 without fraction



function getRandomNumber(min, max) {
    // Generate a random number and round it to the nearest integer
    return Math.round(Math.random() * (max - min) + min);
}

  // Example usage:
const randomNumber = getRandomNumber(10, 20);
  console.log(randomNumber); // Output: A random number between 10 and 20 (inclusive)
