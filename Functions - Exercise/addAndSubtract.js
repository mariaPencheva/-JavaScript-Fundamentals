function addAndSubtract(num1, num2, num3) {
    let sum = (a, b) => a + b; 
    
    let res = sum(num1, num2);
    let finalResult = substract(res, num3);

    console.log(finalResult);

    function substract(num1, num2){
        return num1 - num2;
    }

}

addAndSubtract(23, 6, 10)