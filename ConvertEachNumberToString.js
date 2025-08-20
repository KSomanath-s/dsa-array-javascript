// Convert each number to a string
// Input: [1, 2, 3] 
// Output: ["1", "2", "3"]

const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((ele) => {
    const result = ele.toString();
    return result;
})
console.log(newArray);
