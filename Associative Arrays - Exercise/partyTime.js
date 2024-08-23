function partyTime(input) {
    
    let vipGuests = [];
    let normalGuests = [];

    let command = input.shift();

    while (command !== "PARTY") {
        let firstChar = command[0];
        // console.log(firstChar);

        if (isNaN(firstChar[0])) {
            normalGuests.push(command);
        } else {
            vipGuests.push(command);
        }

        command = input.shift();
    }

    let allGuests = vipGuests.concat(normalGuests);

    for (const guest of input) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }

    console.log(allGuests.length);
    allGuests.forEach((guest) => console.log(guest));


}

partyTime([
    '7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY',
    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'
]);