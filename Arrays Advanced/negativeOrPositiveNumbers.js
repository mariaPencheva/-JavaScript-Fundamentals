function negativeOrPositiveNumbers(arr) {
    let result = [];

    for (let numAsStr of arr) {
        let num = Number(numAsStr);
        if (num < 0){
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join(`\n`));
    

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
// negativeOrPositiveNumbers(['3', '-2', '0', '-1']);