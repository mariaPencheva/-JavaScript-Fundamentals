function sumEvenNumbers(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i ++){
        arr[i] = Number(arr[i]);
    }

    for(let i of arr){
        if(i % 2 === 0){
            sum += i;
        }
    }
    
    console.log(sum);

}

sumEvenNumbers(['1','2','3','4','5','6']);