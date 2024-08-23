function modernTimesOfHashTag(text) {
    let words = text.split(' ');
    // console.log(words);

    let hashWords = words.filter(word => word.startsWith('#') && word.length > 1);
    // console.log(hashWords);

    for (let word of hashWords){
        word = word.slice(1);
        // 02 -> word = word.substring(1);
        let isValid = true;

        for (let char of word){
            // console.log(char);
            if (!/[A-Za-z]/.test(char)){ //true/false
                isValid = false;
                break;
            }
        }

        if (isValid){
            console.log(word);
        }
    }

}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')