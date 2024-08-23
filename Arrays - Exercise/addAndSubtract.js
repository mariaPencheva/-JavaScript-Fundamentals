function addAndSubtract(arr){
    let sumArr = 0;
    let newSum = 0;

    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
        sumArr += arr[i];

        if(arr[i] % 2 === 0){
            arr[i] += i;
        } else {
            arr[i] -= i;
        }

        newSum += arr[i];
    }

    console.log(arr);
    console.log(sumArr);
    console.log(newSum);

}
addAndSubtract([5, 15, 23, 56, 35]);