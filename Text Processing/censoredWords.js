function censoredWords(text, word) {
    //01
    // let censor = '*'.repeat(word.length);
    // let result = text;
    // //console.log(arrOfText);

    // while (result.includes(word)){
    //     result = result.replace(word, censor);
    // }

    // console.log(result);

    //02
    // let censored = text.replace(word, ('*'.repeat(word.length)));
    // //console.log(censored);
    // while(censored.includes(word)){
    //     censored = censored.replace(word, ('*'.repeat(word.length)));
    // }
    // console.log(censored);

    //03
    let censor = '*'.repeat(word.length);
    let result = text.split(word).join(censor);
    console.log(result);

}

censoredWords('A small sentence with some words', 'small');
censoredWords('hello world hello', 'hello');
