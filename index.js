const testOperation = (num1,num2, callbackFunction) => {
    const result = callbackFunction(num1, num2);
     console.log("Result:", result);
  };
  
  const addNumbers = (a, b) => a + b;
  
  const multiplyNumbers = (x, y) => x * y;
  
  testOperation(10, 5, addNumbers); 
  testOperation(7, 3, multiplyNumbers); 