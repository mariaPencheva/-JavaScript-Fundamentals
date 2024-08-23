function bitcoinMining(input){
    let oneBitcoin = 11949.16;
    let goldPerGram = 67.51;   
    
    let totalSum = 0;
        
    let day = 0;
    let firstDay = 0;
    let boughtBitcoin = 0;
    let countBitcoin = 0;
    let sumBitcoins = 0;


    for(let index = 0; index <= input.length; index ++){
        day++;
        let element = input[index];

        if (day % 3 == 0) {
            element = element * 0.7;
        }

        let singleDayEarning = element * goldPerGram;
        totalSum += singleDayEarning;
 
 
        if (totalSum >= oneBitcoin) {
            countBitcoin++;
            boughtBitcoin = Math.floor(totalSum / oneBitcoin);
            totalSum = totalSum - (oneBitcoin * boughtBitcoin);
            sumBitcoins += boughtBitcoin;
        }
        if (countBitcoin == 1) {
            firstDay = day;
        }
    }
 
    console.log(`Bought bitcoins: ${sumBitcoins}`);
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
 

}

bitcoinMining([50, 100]);