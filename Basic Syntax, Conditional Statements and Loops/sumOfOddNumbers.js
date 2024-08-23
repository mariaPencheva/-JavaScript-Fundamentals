function sumOfOddNumbers(oddNumbers) {
    let sum = 0;
    let num = 1;
    // let counter = 0;

    // for (let i = 1; i <= 100; i += 2) {
    //     console.log(i);
    //     counter++;
    //     sum += i;
    //     if (counter == oddNumbers) {
    //         console.log(`Sum: ${sum}`);
    //         break;
    //     }
    // }

    while(oddNumbers > 0){
        console.log(num);
        sum += num
        num += 2;
        oddNumbers--;

    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);