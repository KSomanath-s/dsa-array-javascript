const arr = [1, 2, 2, 3, 1, 6, 6, 7, 7, 3, 8, 8, 9, 9, 4, 4, 5];


function duplicatesRemovesArray(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {        
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray;
}
const result = duplicatesRemovesArray(arr);
console.log(result);