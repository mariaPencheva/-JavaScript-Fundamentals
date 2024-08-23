function amazingNumbers(num) {
    let numToStr = String(num);
    let sum = 0;

    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }

    let result = String(sum).includes(`9`); 
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}

amazingNumbers(1233);
// amazingNumbers(999);
// amazingNumbers(991);