// Double The Even numbers and triple the odd numbers in an array.
// Input: [1, 2, 3, 4]
// Output:[3, 4, 9, 8]


const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((ele) => {
    const result = ele % 2 === 0 ? ele * 2 : ele * 3;
    return result;
})
console.log(newArray);



