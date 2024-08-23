function race(array) {
    let names = array.shift().split(', ');
    // console.log(list)

    let command = array.shift();
    let results = {};

    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    names.forEach(name => results[name] = 0);

    while (command != 'end of race') {
        // console.log(command);
        let letterMatch = command.match(letterPattern);
        // console.log(letterMatch);
        let name = letterMatch.join('');
        // console.log(name);
        let digitMatch = command.match(digitPattern);
        // console.log(digitMatch);
        let distance = digitMatch.map(Number).reduce((acc, val) => acc + val);
        // console.log(distance);

        if (name in results){
            results[name] += distance;
        }

        command = array.shift();
    }

    // console.log(results);
    let sortedRes = Object.entries(results).sort((a, b) => b[1] - a[1]);
    // console.log(sortedRes);

    console.log(`1st place: ${sortedRes[0][0]}`);
    console.log(`2nd place: ${sortedRes[1][0]}`);
    console.log(`3rd place: ${sortedRes[2][0]}`);
    
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])