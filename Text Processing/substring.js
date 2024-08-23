function substring(str, startIndex, count) {
    let endIndex = startIndex + count;
    console.log(endIndex);

    let result = str.substring(startIndex, endIndex);
    console.log(result);
}

substring('ASentence', 1, 8);