function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;

    let numAsStr = String(num);
    sum(num);
    print();

    function sum(a) {
        for (let char of numAsStr){
            let digit = Number(char);
    
            if(digit % 2 === 0){
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        
    }

    function print(res) {
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
        
    }

}

oddAndEvenSum(3495892137259234);