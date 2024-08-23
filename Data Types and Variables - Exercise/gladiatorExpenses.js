function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;


    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetCount++;
        }

        if (i % 3 === 0){
            swordCount++;
        }

        if(i % 2 === 0 && i % 3 === 0){
            shieldCount++;
            if (shieldCount % 2 === 0) {
                armorCount++;
            }
        }

    }

    let totalPrice = helmetPrice * helmetCount + swordPrice * swordCount + shieldPrice * shieldCount + armorPrice * armorCount;

    
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}


gladiatorExpenses(7, 2, 3, 4, 5);