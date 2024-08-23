function revealWords(words, text) {
    
    let wordsArr = words.split(', ');
    
    for (let word of wordsArr){
        let repeatCounter = word.length;
        let starTemplete = '*'.repeat(repeatCounter);
        text = text.replace(starTemplete, word);
    }

    console.log(text);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');