function rightPlace(firstStr, charFir, secondStr){

    let result = firstStr.replace(`_`, charFir);
    let output = result === secondStr? "Matched": "Not Matched";

    console.log(output);

}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');