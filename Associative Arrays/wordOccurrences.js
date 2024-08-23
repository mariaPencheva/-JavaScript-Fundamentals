function wordOccurrences(arr) {
    let list = {};

    for (let i = 0; i < arr.length; i++){
        let curWord = arr[i];

        if(list[curWord]){
            list[curWord] ++
        } else {
            list[curWord] = 1;
        }
    }
    
    //console.log(list);
    let sortedWords = Object.entries(list).sort((a, b) => b[1] - a[1]);

    //console.log(sortedWords);

    for (let [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);