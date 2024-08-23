function spiceMustFlow(currYield) {
    let days = 0;
    let totalSpice = 0;

    while (currYield >= 100) {
        days++;
        totalSpice += currYield - 26;
        currYield -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(days);
    console.log(totalSpice);

}

spiceMustFlow(111);