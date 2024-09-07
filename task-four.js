// Task-4:


// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming



function findLongestWord(str) {
    const words = str.split(" "); // Split the string into an array of words
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
        longestWord = word;
        }
    }
    return longestWord;
}

  // Sample usage:
const text = "I am learning Programming to become a programmer";
const longestWord = findLongestWord(text);
console.log("Longest word:", longestWord);



//   This function works as follows:

//   It splits the input string into an array of words using split(" ").
//   It initializes a longestWord variable to an empty string.
//   It iterates over each word in the array using a for...of loop.
//   If the current word is longer than the current longestWord, it updates longestWord with the current word.
//   Finally, it returns the longestWord.