function simpleCalculator(numOne, numTwo, operator){
    let obj = {
        "multiply" : (a, b) => a * b,
        "divide" : (a, b) => a / b,
        "add" : (a, b) => a + b,
        "subtract" : (a, b) => a - b
    }

    return obj[operator](numOne, numTwo)
}

console.log(simpleCalculator(5, 5, 'multiply'))