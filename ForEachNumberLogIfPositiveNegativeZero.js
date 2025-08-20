// For each number, log if it's positive, negative, or zero
// Input: [0, -1, 4, -3]
// Return: ["zero", "negative", "positive", "negative"]
const arr = [0, -1, 4, -3,'A'];
const newArray = arr.map((ele) => {
    const result = ele === 0 ? "Zero" : ele < 0 ? "Negative" : ele > 0 ? "Positive" : 'Not a Number'
    return result;
});
console.log(newArray);
