// i want to increse the odd no. from the array by 1 and even no by 2 how can you do this?
const arr = [1, 2, 3, 4, 5, 6];
const newValue = arr.map((item) => {
    if (item % 2 == 0) {
        const result = item * 2;
        return result;
    }
    else {
        const result = item + 1;
        return result;
    }

})
console.log("New Array", newValue);
