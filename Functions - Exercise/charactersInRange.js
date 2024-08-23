function charactersInRange(char1, char2) {
    let code1 = char1.charCodeAt(0); 
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    let result = "";

    printResult(minCode, maxCode);

    function printResult(startCode, endCode){
        for(let currCode = minCode + 1; currCode < maxCode; currCode++){
            let currChar = String.fromCharCode(currCode);
            result += currChar + ' ';
        }
        console.log(result);
    }
    
}

charactersInRange('a','d');