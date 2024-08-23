function equalArrays(arr1, arr2) {
    let areEqual = true;
    let sum = 0;
        
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
        arr2[j] = Number(arr2[j]);
    }

    for (let i = 0; i < arr1.length; i++) {
        sum += Number(arr1[i]);

        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

// equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
// equalArrays(['1'], ['10'])
// equalArrays(['10','55','30'], ['10','20','30']);
