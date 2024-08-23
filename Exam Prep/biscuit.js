function biscuit(arr){
    let biscProducedPerDayPerWorker = Number(arr[0]);
    let countOfWorkers = Number(arr[1]);
    let competingFactoryProduced = Number(arr[2]); 
    let totalBis = 0;
    
    let biscPerDay = Math.floor(biscProducedPerDayPerWorker * countOfWorkers);
    let everyThirdDay = Math.floor(biscPerDay * 0.75);

    for (let day = 1; day <= 30; day++ ){

        if (day % 3 === 0){ 
            totalBis += everyThirdDay;
        } else {
            totalBis += biscPerDay;
        }   
    }

    let percent = Math.abs(((totalBis - competingFactoryProduced) / competingFactoryProduced) * 100);

    console.log(`You have produced ${Math.floor(totalBis)} biscuits for the past month.`);

    if (totalBis > competingFactoryProduced){
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    }

}

biscuit(["65", "12", "26000"]);