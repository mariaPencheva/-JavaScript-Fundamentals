function pascalCaseSplitter(str) {
    let newStr = str[0];

    for (let i = 1; i < str.length; i++) {
        let curChar = str[i];

        if (curChar.charCodeAt(0) >= 65 && curChar.charCodeAt(0) <= 90) {
            newStr += ', ' + curChar;
        } else {
            newStr += curChar;
        }

    }

    console.log(newStr);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');