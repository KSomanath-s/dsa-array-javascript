// const num = [1, 3, 4, 4, 5, 3, 7, 8, 7, 1, 8, 9];

// const duplicate = [];

// for (let i = 0; i < num.length; i++) {
//     if (!duplicate.includes(num[i])) {
//         duplicate.push(num[i])
//     }
// }
// console.log(duplicate);


// let arr = [1, 2, 3, 4];

// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i])
// }
// console.log(reversed);


//✅ Sum of Digits of a Number
// Input: n = 687
// Output: 21
// Explanation: The sum of its digits are: 6 + 8 + 7 = 21

// Input: n = 12
// Output: 3
// Explanation: The sum of its digits are: 1 + 2 = 3

const number=12;
const result=sumOfDigits(number)
console.log(result)

function sumOfDigits(number){
    let sum=0;
    let strNum=number.toString();
    for(let i=0;i<strNum.length;i++){
        sum=parseInt(strNum[i])+sum;
    }
    return sum;
}

// const number=768;
// const result=number.toString().split('').map(Number).reduce((a,b)=>a+b,0);
// console.log(result);

// ✅ Write a program to reverse digits of a number

// Input: n = 122
// Output: 221
// Explanation: By reversing the digits of number, number will change into 221.

// Input: n = 200
// Output: 2
// Explanation: By reversing the digits of number, number will change into 2.

// Input: n = 12345 
// Output: 54321
// Explanation: By reversing the digits of number, number will change into 54321.


function reversDigits(n){
    // Convert number to string;
    let s=n.toString().split('').reverse().join('');
    // convert string to Number
    let num=parseInt(s)
    return num;
}
let n=12345;
let reverse=reversDigits(n);
console.log(reverse);


// function reverseDigitsNew(n){
//     return Number(n.toString().split('').reverse().join(''));
// }
// let n=12345;
// const reverse=reverseDigitsNew(n);
// console.log(reverse);











