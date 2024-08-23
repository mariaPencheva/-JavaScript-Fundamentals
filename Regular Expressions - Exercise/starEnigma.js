function starEnigma(arr) {
    let msgCount = Number(arr.shift());
    let decryptedMsgs = [];

    let starPattern = /[star]/gi;

    for (let i = 0; i < msgCount; i++) {
        let msg = arr[i];
        let decryptedMsg = '';

        let matches = msg.match(starPattern); 
        // console.log(matches);

        if (matches) {
            let count = matches.length;

            for (let char of msg) {
                let code = char.charCodeAt();
                // console.log(code);
                code -= count;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }

        } else {
            decryptedMsg = msg;
        }

        decryptedMsgs.push(decryptedMsg);
    }

    // console.log(decryptedMsgs);

    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
    // The planet name starts after '@' and contains only letters from the Latin alphabet.
    // The planet population starts after ':' and is an Integer;
    // The attack type may be "A"(attack) or "D"(destruction) and must be surrounded by "!" (exclamation mark).
    // The soldier count starts after "->" and should be an Integer.
    // The order in the message should be: planet name -> planet population -> attack type -> soldier count. Each part can be separated from the others by any character except: '@', '-', '!', ':' and '>'.

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let msg of decryptedMsgs) {
        let match = msg.match(planetPattern);

        if (match) {
            let { name, type } = match.groups;

            if (type == 'A') {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }

        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));

}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])