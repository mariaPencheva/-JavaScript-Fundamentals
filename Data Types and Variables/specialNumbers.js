function specialNumbers(n){
    let sum = 0;
    let result = '';


    for(let i = 1; i <= n; i ++){
        i = String(i);
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
            
        }
        if(sum === 5 || sum === 7 || sum === 11){
            result = `True`;
        } else {
            result = `False`;
        }
    
        console.log(`${i} -> ${result}`);
        sum = 0;
    }

}

specialNumbers(15);