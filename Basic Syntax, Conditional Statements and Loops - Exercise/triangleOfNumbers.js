function triangleOfNumbers(num){

for (let row = 1; row <= num; row++){
    let curRow = '';

    for (column = 1; column <= row; column ++){
        curRow += row + ' ';
    }   
    console.log(curRow); 

    }

}

triangleOfNumbers(5); 