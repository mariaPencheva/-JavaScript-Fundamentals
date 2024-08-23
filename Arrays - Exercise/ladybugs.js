function ladybugs(input) {
    let field = [];
    let size = Number(input[0]);

    //let isFly = false;

    for (let i = 0; i < size; i++) {
        field[i] = 0;
    }

    let indexOfLadybugs = input[1].split(' ');

    for (let i = 0; i < indexOfLadybugs.length; i++) {
        let index = indexOfLadybugs[i];
        if(field[index] !== undefined){ // field[index] === 0 ?
            field[index] = 1;
        }
    }

    for(let i = 2; i < input.length; i++) {
        let commands = input[i].split(" ");
        let indexLadybugs = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);

        if (indexLadybugs >= field.length || indexLadybugs < 0 || field[indexLadybugs] == 0){
            continue;
        }

        field[indexLadybugs] = 0;
        let isFly = true;

        if(direction === 'right'){
            while(isFly){
                if(field[indexLadybugs + flyLength] === 0){
                    field[indexLadybugs + flyLength] =  1;
                    isFly = false;
                } else if (field[indexLadybugs + flyLength] === 1){
                    flyLength += flyLength;
                } else {
                    isFly = false;
                }
            }

        } else {
            while(isFly){
                if(field[indexLadybugs - flyLength] === 0){
                    field[indexLadybugs - flyLength] =  1;
                    isFly = false;
                } else if (field[flyLength] === 1){
                    flyLength += flyLength;
                } else {
                    isFly = false;
                }
            }
        }
    }
    console.log(field.join(' '));
}

// ladybugs([3, '0 1', '0 right 1', '2 right 1']);   
// ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([ 5, '3', '3 left 2', '1 left -2']);
ladybugs([ 0, '2 3 4', '0 right 5', '6 right 2', '7 left 1', `19 left 0`]);