// Replace even numbers with "Even", odd numbers with "Odd"
// Input: [1, 2, 3, 4] 
// Output: ["Odd", "Even", "Odd", "Even"]

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => {
    const result = item % 2 === 0 ? "Even" : "Odd";
    return result;
})
console.log(newArr);

