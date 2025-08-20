// Return the length of each word and log the word
// Input: ["hello", "js", "world"]

const arr=["hello", "js", "world"];
const newArray=arr.map((ele)=>{
    const result=ele.length;
    console.log(ele);
    return result;
    
})
console.log(newArray);

