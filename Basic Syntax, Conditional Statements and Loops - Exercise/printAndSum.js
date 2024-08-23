function printAndSum(start, end){
    let sum = 0;
    let numsString = '';

    for(let i = start; i <= end; i++){
        numsString += `${i} `;
        sum += i;
    }

    console.log(numsString);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
