// You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains a command and a number, separated by space. The command can be:
// •	"potion"
// o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// o	First print: "You healed for {amount} hp."
// o	After that, print your current health: "Current health: {health} hp."
// •	"chest"
// o	You've found some bitcoins, the number in the second part.
// o	Print: "You found {amount} bitcoins."
// •	In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. You should remove the monster's attack from your health. 
// o	If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've managed to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines: 
// "You've made it!
// Bitcoins: {bitcoins}
// Health: {health}"
// Input / Constraints
// You receive a string representing the dungeon's rooms, separated with '|' (vertical bar): "room1|room2|room3…".
// Output
// Print the corresponding messages described above.


function muOnline(roomsAsStr) {
    let rooms = roomsAsStr.split('|');

    let health = 100;
    let coins = 0;

    let bestRoom = 0;

    for (let i = 0; i < rooms.length; i++) {
        bestRoom++;
        let eachRoom = rooms[i].split(' ');

        let command = eachRoom[0];
        let number = Number(eachRoom[1]);

        if (command === "potion") {
            if (number + health > 100) {
                number = 100 - health;
            }
            health += number;
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command == "chest") {
            coins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            let monster = '';
            monster = command;
            health -= number;

            if (health > 0) {
                // health -= number;
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
    }

    if (health > 0) {
        console.log('You\'ve made it!');
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"); 0