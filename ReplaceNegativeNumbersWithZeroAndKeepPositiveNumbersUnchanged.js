// Replace negative numbers with 0 and keep positive numbers unchanged.
// Input: [-1, 3, -5, 4] 
// Output: [0, 3, 0, 4]

const arr = [-1, 3, -5, 4];

const newArr = arr.map((ele) => {
    const result = ele < 0 ? 0 : ele;
    return result;
})
console.log(newArr);
