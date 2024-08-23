function integerAndFloat(firstNum, secondNum, thirdNum){
    let sum = firstNum + secondNum + thirdNum;
    let sumAsStr = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumAsStr.length; i ++){
        if (sumAsStr[i] == `.`){
            isFloat = true;
        }
    }

    console.log(`${sum} - ${isFloat ? `Float` : `Integer`}`);
}

integerAndFloat(9, 100, 1.1);