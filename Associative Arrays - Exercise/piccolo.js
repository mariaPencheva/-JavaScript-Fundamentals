function piccolo(arr) {
    let parkingLot = [];

    for (let i = 0; i < arr.length; i++){
        let [direction, carNumber] = arr[i].split(', ');

        if(direction === 'IN'){
            if (!parkingLot.includes(carNumber)){
                parkingLot.push(carNumber);
            }
        } else if (direction === 'OUT') {
            let index = parkingLot.indexOf(carNumber); 
            if (index !== -1) {
                parkingLot.splice(index, 1);
            }
        }
        
    }

    let sorted = parkingLot.sort();

    if(parkingLot.length === 0){
        console.log(`Parking Lot is Empty`);
    }

    for (let carNum of sorted){
        console.log(carNum);
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);