// Add 10 to each element
// Input: [1, 2, 3] → Output: [11, 12, 13]

const arr = [1, 2, 3];
const result = arr.map((item) => {
    const value = item + 10;
    return value;
})
console.log(result);
