// If number is even, divide by 2; if odd, multiply by 3
// Input: [1, 2, 3, 4] 
// Output: [3, 1, 9, 2]


const arr = [1, 2, 3, 4];
const value = arr.map((item) => {
    const result = item % 2 === 0 ? item / 2 : item * 3;
    return result;
})
console.log(value);
