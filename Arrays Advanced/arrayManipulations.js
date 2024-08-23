function arrayManipulations(arr) {
    let numbers = arr.shift().split(' ').map(Number);
    
    console.log(numbers);
    console.log(`------------`);
    
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];


            if (command === 'Add') {
                let numberToAdd = Number(tokens[1]);
                numbers.push(numberToAdd);
            } else if (command === 'Remove') {
                let numberToRemove = Number(tokens[1]);
                numbers = numbers.filter(x => x !== numberToRemove);
            } else if (command === 'RemoveAt') {
                let indexToRemove = Number(tokens[1]);
                numbers.splice(indexToRemove, 1);
            } else if (command === 'Insert') {
                let numberToInsert = Number(tokens[1]);
                let indexToInsert = Number(tokens[2]);
                numbers.splice(indexToInsert, 0, numberToInsert);
            }
        }
        
        console.log(numbers.join(' '));
    }
    
    arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);