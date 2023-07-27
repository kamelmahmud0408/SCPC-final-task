
// Task-1
const reversString=(inputString)=>{
    let reversString="";
    for(let i= inputString.length -1; i >= 0; i--){
        reversString += inputString[i];
    }
    return reversString
}

const inputStr="hello world";
const reversedString= reversString(inputStr);
console.log(reversedString)

// task-2
const allPositiveNumbers=(numbers)=>{
     let sum=0;
     for(const num of numbers){
        if(num >0){
            sum += num;
        }
     }
     return sum;
}

const numbersArr=[2, -5, 10, -3, 7];
const result= allPositiveNumbers(numbersArr)
console.log(result)
