function dungeonestDarkNEW(arr){
    let dunRooms = arr[0];
    let rooms = dunRooms.split('|');

    let health = 100;
    let coins = 0;

    let bestRoom = 0;

    for(let i = 0; i < rooms.length; i++){
        bestRoom++;

        let room = Array(rooms[i]);
        let tokens = String(room).split(' ');

        let monsterOrItem = tokens[0];
        let numb = Number(tokens[1]);

        if(monsterOrItem == 'potion'){
            let newHp = health + numb <= 100 ? numb : 100 - health;
            health += newHp;
            console.log(`You healed for ${newHp} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (monsterOrItem == 'chest'){
            coins += numb;
            console.log(`You found ${numb} coins.`);
        } else {
            health -= numb;
            if(health > 0){
                console.log(`You slayed ${monsterOrItem}.`);
            } else {
                console.log(`You died! Killed by ${monsterOrItem}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }
    
    if(health > 0){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

// dungeonestDarkNEW(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDarkNEW(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
