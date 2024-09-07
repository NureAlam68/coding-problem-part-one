// Task-3:


// Write a function to count the number of vowels in a string.


// solution -1


// function countVowels(str) {
//     // Define a set of vowels for easy lookup
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
//     // Loop through each character in the string
//     for (const char of str) {
//       // Check if the character is a vowel
//         if (vowels.includes(char)) {
//         count++;
//         }
//     }
//     return count;
// }
//   // Example usage:
// const exampleString = 'Hello, World!';
// console.log(countVowels(exampleString)); 




// solution-2


function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
        count++;
        }
    }
    return count;
}
  // Sample usage:
const text = "Hello, world!";
const vowelCount = countVowels(text);
console.log("Number of vowels:", vowelCount);