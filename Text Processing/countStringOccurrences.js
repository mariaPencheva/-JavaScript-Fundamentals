function countStringOccurrences(text, word) {
    let wordsText = text.split(' ');
    // console.log(wordsText);
    let counter = 0;

    for (let wor of wordsText){
        if (wor === word){
            counter ++;
        }
    }
    console.log(counter);

}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');