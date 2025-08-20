// Question ✅ If a number is divisible by 3, replace it with "Fizz", otherwise keep it.
// Input: [3, 4, 6, 7] → 
// Output: ["Fizz", 4, "Fizz", 7]

const arr = [3, 4, 6, 7];
const newArray = arr.map((ele) => {
    const result = ele % 3 == 0 ? "Fizz" : ele;
    return result;
})
console.log(newArray); // [ 'Fizz', 4, 'Fizz', 7 ]


// Question ✅ Square only the even numbers and leave the odd numbers as they are.

// Input: [1, 2, 3, 4]
// Output: [1, 4, 3, 16]
