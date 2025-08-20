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

const arr1 = [1, 2, 3, 4];
const newArray1 = arr1.map((ele) => {
    const result = ele % 2 == 0 ? ele * ele : ele;
    return result;
})
console.log(newArray1); //[ 1, 4, 3, 16 ]

// Question ✅ If a number is greater than 10, subtract 5 from it. Otherwise, add 5.
// Input: [8, 15, 3] 
// Output: [13, 10, 8]

const arr2 = [8, 15, 3];
const newArray2 = arr2.map((ele) => {
    const result = ele >= 10 ? ele - 5 : ele + 5;
    return result;
})
console.log(newArray2) //[ 13, 10, 8 ]

// Question ✅ Replace 0 with "zero" and others with the number itself.
// Input: [0, 1, 2, 0] 
// Output: ["zero", 1, 2, "zero"]


const arr3 = [0, 1, 2, 0, 3, 4, 0, 6, 7];
const newArray3 = arr3.map((ele) => {
    const result = ele === 0 ? "Zero" : ele;
    return result;
})
console.log(newArray3); //['Zero', 1, 2,'Zero', 3, 4,'Zero', 6, 7]

// Question ✅ Increment odd indexes by 1, and keep even indexes unchanged.
// Input: [1, 2, 3, 4] 
// Output: [1, 3, 3, 5]

const arr4 = [1, 2, 3, 4];
const newArray4 = arr4.map((ele, index) => {
    const result = index % 2 == 0 ? ele : ele + 1;
    return result;
})
console.log(newArray4); // [ 1, 3, 3, 5 ]

// Question ✅ Add index value to each array element.
// Input: [10, 20, 30] 
// Output: [10+0, 20+1, 30+2] → [10, 21, 32]

const arr5 = [10, 20, 30];
const newArray5 = arr5.map((ele, index) => {
    const result = ele + index;
    return result;
})
console.log(newArray5); // [ 10, 21, 32 ]

// Question ✅ Convert every number to its string format with a prefix "Num-".
// Input: [5, 6] 
// Output: ["Num-5", "Num-6"]

const arr6 = [1, 2, 3, 4, 5, 6];
const newArray6 = arr6.map((ele, index) => {
    const result = `Num-${ele.toString()}`
    return result;
})
console.log(newArray6); // [ 'Num-1', 'Num-2', 'Num-3', 'Num-4', 'Num-5', 'Num-6' ]

// Question ✅ Double The Even numbers and triple the odd numbers in an array.
// Input: [1, 2, 3, 4]
// Output:[3, 4, 9, 8]

const arr7 = [1, 2, 3, 4, 5];
const newArray7 = arr7.map((ele) => {
    const result = ele % 2 === 0 ? ele * 2 : ele * 3;
    return result;
})
console.log(newArray7);[3, 4, 9, 8]


// Question ✅ Replace negative numbers with 0 and keep positive numbers unchanged.
// Input: [-1, 3, -5, 4] 
// Output: [0, 3, 0, 4]

const arr8 = [-1, 3, -5, 4];
const newArr = arr8.map((ele) => {
    const result = ele < 0 ? 0 : ele;
    return result;
})
console.log(newArr); // [0, 3, 0, 4]

// Question ✅ Add 10 to each element
// Input: [1, 2, 3] → Output: [11, 12, 13]

const arr9 = [1, 2, 3];
const result = arr9.map((item) => {
    const value = item + 10;
    return value;
})
console.log(result); //[11, 12, 13]

// Question ✅ i want to increse the odd no. from the array by 1 and even no by 2 how can you do this?
const arr10 = [1, 2, 3, 4, 5, 6];
const newValue = arr10.map((item) => {
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


// Question ✅ Return the length of each word and log the word
// Input: ["hello", "js", "world"]

const arr11 = ["hello", "js", "world"];
const newArray11 = arr11.map((ele) => {
    const result = ele.length;
    console.log(ele); // ["hello", "js", "world"]
    return result;

})
console.log(newArray11); // [ 5, 2, 5 ]

// Question ✅ Convert each number to a string
// Input: [1, 2, 3] 
// Output: ["1", "2", "3"]

const arr12 = [1, 2, 3, 4, 5];
const newArray12 = arr12.map((ele) => {
    const result = ele.toString();
    return result;
})
console.log(newArray12); // ["1", "2", "3", "4", "5"]

// Question ✅ If number is even, divide by 2; if odd, multiply by 3
// Input: [1, 2, 3, 4] 
// Output: [3, 1, 9, 2]

const arr13 = [1, 2, 3, 4];
const value = arr13.map((item) => {
    const result = item % 2 === 0 ? item / 2 : item * 3;
    return result;
})
console.log(value); // [3, 1, 9, 2]

// Question ✅ For each number, log if it's positive, negative, or zero
// Input: [0, -1, 4, -3]
// Return: ["zero", "negative", "positive", "negative"]

const arr14 = [0, -1, 4, -3, 'A'];
const newArray14 = arr14.map((ele) => {
    const result = ele === 0 ? "Zero" : ele < 0 ? "Negative" : ele > 0 ? "Positive" : 'Not a Number'
    return result;
});
console.log(newArray14); // ["zero", "negative", "positive", "negative"]

// Filter Method   15/07/2025

// Question ✅ Return only the even numbers from the array.
// Input: [1, 2, 3, 4] 
//  Output: [2, 4]

const even = [1, 2, 3, 4];
const newEven = even.filter((ele) => {
    const result = ele % 2 == 0;
    return result;
})
console.log(newEven) // [2.4]

// Question ✅ Remove all negative numbers from the array.
// Input: [1, -2, 3, -4] 
// Output: [1, 3]

const negativeNumber = [1, -2, 3, -4];
const newNegativeNumber = negativeNumber.filter((ele) => {
    const result = ele > 0;
    return result;
})
console.log(newNegativeNumber) // [ 1, 3 ]


// Question ✅ Keep only numbers greater than 10.
// Input: [5, 12, 7, 20] 
// Output: [12, 20]

const greaterNumber = [5, 12, 7, 20];
const newGreaterNumber = greaterNumber.filter((ele) => {
    const result = ele > 10;
    return result;
})
console.log(newGreaterNumber); // [ 12, 20 ]

// Question ✅ Keep only odd numbers from an array.
// Input: [1, 2, 3, 4, 5] 
// Output: [1, 3, 5]


const oddNumber = [1, 2, 3, 4, 5];
const newOddNumber = oddNumber.filter((ele) => {
    const result = ele % 2 == 1;
    return result;
});
console.log(newOddNumber); // [ 1, 3, 5 ]

// Question ✅ Remove all null or undefined values.
// Input: [1, null, 2, undefined, 3] 
// Output: [1, 2, 3]

const removeNullUndefined = [1, null, 2, undefined, 3];
const newRemoveNullUndefined = removeNullUndefined.filter((ele) => {
    const result = ele !== null && ele !== undefined;
    return result;
})
console.log(newRemoveNullUndefined); // [ 1, 2, 3 ]


// Question ✅ Filter out strings from a mixed array.
// Input: [1, 'a', 2, 'b', 3]
// Output: [1, 2, 3]
const stringValue = [1, 'a', 2, 'b', 3];
const newStringValue = stringValue.filter((ele) => {
    const result = typeof ele === 'number';
    return result;
})
console.log(newStringValue) // [ 1, 2, 3 ]

// Question ✅ Remove all boolean values from
// Input: [true, 1, false, 2, 'a']
// Output: [1, 2, 'a']

const booleanValue = [true, 1, false, 2, 'a'];

const newBooleanValue = booleanValue.filter((ele) => {
    const result = typeof ele !== 'boolean';
    return result;
})
console.log(newBooleanValue); // [ 1, 2, 'a' ]

// Question ✅ Keep only numbers greater than 50.
// Input: [30, 55, 70, 40]
// Output: [55, 70]

const numberGreater = [30, 55, 70, 40];
const newNumberGreater = numberGreater.filter((ele) => {
    const result = ele > 50;
    return result;
})
console.log(newNumberGreater); // [55, 70]

// Question ✅ Remove all falsy values (false, 0, "", null, undefined, NaN).
// Input: [0, 1, false, 2, '', 3]
// Output: [1, 2, 3]

const falsyValue = [0, 1, false, 2, '', 3];
const newFalsyValue = falsyValue.filter(Boolean)
console.log(newFalsyValue); // [ 1, 2, 3 ]

// Question ✅ Keep only strings with length > 3.
// Input: ["hi", "hello", "hey", "world"]
// Output: ["hello", "world"]

const stringsLength = ["hi", "hello", "hey", "world"];
const newStringsLength = stringsLength.filter((ele) => {
    const result = ele.length > 3;
    return result;
});
console.log(newStringsLength); // [ 'hello', 'world' ]

// Question ✅ Keep only even-indexed elements.
// Input: [10, 20, 30, 40, 50]
// Output: [10, 30, 50];

const evenIndexed = [10, 20, 30, 40, 50];
const newEvenIndexed = evenIndexed.filter((ele, index) => {
    const result = index % 2 == 0 ? ele : '';
    return result;
})
console.log(newEvenIndexed); // [ 10, 30, 50 ]

// Question ✅ Filter names starting with the letter "A".
// Input: ["Alice", "Bob", "Ankit", "Charlie"]
// Output: ["Alice", "Ankit"]

const namesString = ["Alice", "Bob", "Ankit", "Charlie"];
const newNamesString = namesString.filter((ele) => {
    // const result=ele[0]==="A";
    const result = ele.startsWith("A");
    return result;
})
console.log(newNamesString); //  [ 'Alice', 'Ankit' ]

// Question ✅ Keep only elements that are strings and contain the letter 'a'.
// Input: ["apple", "banana", "kiwi", "mango"] 
// Output: ["apple", "banana", "mango"]

const stringsContainLetterA = ["apple", "banana", "kiwi", "mango"];
const newStringsContainLetterA = stringsContainLetterA.filter((ele) => {
    const result = ele.includes('a');
    return result;
});
console.log(newStringsContainLetterA); // [ 'apple', 'banana', 'mango' ] 


// 4. Count even numbers
// Question: Write a program to count how many even numbers are in the array.
// Input: [1, 2, 4, 7, 6]
// Output: 3


const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countEven() {
    let count = 0;
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] % 2 === 0) {
            count++;
        }
    }
    return count;
    console.log(count)
}
console.log(countEven());


// Max Number
const arrNew = [10, 3, 45, 2, 55, 100];
let max = arr[0];

for (let i = 0; i < arrNew.length; i++) {
    if (max < arrNew[i]) {
        max = arrNew[i]
    }
}
console.log(max);
const arrThree = [10, 3, 45, 2, 55, 100, 499];


function maxNumber() {
    let max = arrThree[0];
    for (let i = 0; i < arrThree.length; i++) {
        if (max < arrThree[i]) {
            max = arrThree[i]
        }
    }
    return max;
}
console.log(maxNumber());

// Second largest number
const arrFive = [10, 3, 45, 2, 55, 100, 499];


function findSecondLargest() {
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arrFive.length; i++) {
        if (arrFive[i] > first) {
            second = first;
            first = arrFive[i]
        } else if (arrFive[i] > second && arrFive[i] !== first) {
            second = arrFive[i]
        }
    }
    return second;
};

console.log(findSecondLargest());