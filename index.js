
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
const result2= allPositiveNumbers(numbersArr)
console.log(result2)

// task-3
const mostFrequentElement = (array) => {
    if (array.length === 0) return null;
  
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (const element of array) {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  };
  
  const numbersArray= [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result3 = mostFrequentElement(numbersArray)
  console.log(result3)