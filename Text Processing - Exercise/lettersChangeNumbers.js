function lettersChangeNumbers(text) {
    let strs = text.split(' ').filter(str => str != '');
    // console.log(text);
    let sum = 0;

    for (let str of strs){
        let firstLetter = str[0];
        let lastLetter = str[str.length - 1];
        let num = Number(str.slice(1, str.length - 1));
        //console.log(firstLetter, lastLetter, num);

        if (firstLetter == firstLetter.toUpperCase()){
            let position = (firstLetter.charCodeAt()) - 64;
            // let code = firstLetter.charCodeAt();
            // let position = code - 64;
            num /= position;
        } else {
            let position = (firstLetter.charCodeAt()) - 96;
            num *= position;
        }

        if (lastLetter == lastLetter.toUpperCase()){
            let position = (lastLetter.charCodeAt()) - 64;
            num -= position;
        } else {
            let position = (lastLetter.charCodeAt()) - 96;
            num += position;
        }

        sum += num;
    }

    console.log(sum.toFixed(2));

}

// lettersChangeNumbers('A12b   s17G');
lettersChangeNumbers('P34562Z q2576f H456z');
// lettersChangeNumbers('a1A');