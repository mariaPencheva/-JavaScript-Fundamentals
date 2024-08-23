function maxSequenceOfEqualElements(arr) {
    let maxSeq = [];

    for(let i = 0; i < arr.length; i++){
        let currSeq = [];

        for(let j = i; j <arr.length; j++){
            if(arr[i] === arr[j]){
                currSeq.push(arr[i]);
            } else {
                break;
            }
        }
        
        if(currSeq.length > maxSeq.length){
            maxSeq = currSeq;
        }
    }
    console.log(maxSeq.join(' '));

}


maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);