// Task-2:

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0




function countOccurrences(numbers, find) {
    let count = 0;
    for (let number of numbers) {
        if (number === find) {
            count++;
        }
    }
    return count;
}

let numbers = [5, 6, 11, 12, 98, 5];
let find1 = 5;
let find2 = 25;

let result1 = countOccurrences(numbers, find1);
let result2 = countOccurrences(numbers, find2);

console.log("Occurrences of", find1, ":", result1);
console.log("Occurrences of", find2, ":", result2);