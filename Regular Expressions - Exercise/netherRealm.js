// demonBook = {
//     demonName: Azazel,
//     health: 615,
//     damage: 0.00
// }

//[^@\-!:>]* - without these

function netherRealm(str) {
    let demonBook = {};
    let demonsNames = str.split(/,/g).map((el) => el.trim());

    let healthPattern = /   /g; 
    let damagePattern = /[+-]?\d+(\.\d+)?/g;
    let specialCharsPattern = /[*\/]/g;

    for (let curName of demonsNames) {

        if (curName.includes(' ') || curName.includes(',')) {
            continue; // Пропускане на невалидни имена
        }

        let matchHealth = curName.match(healthPattern);
        let demonHealth = (matchHealth || [])
                            .reduce((acc, char) => acc + char.charCodeAt(0), 0);

        let matchDamage = curName.match(damagePattern) || [];
        let demonDamage = matchDamage.reduce((acc, value) => acc + Number(value), 0);

        let specialChars = curName.match(specialCharsPattern) || [];
        specialChars.forEach(char => {
            if (char === '*') {
                demonDamage *= 2;
            } else if (char === '/') {
                demonDamage /= 2;
            }
        });

        demonBook[curName] = {
            health: demonHealth,
            damage: demonDamage.toFixed(2)
        };
    
    }

    let sortedNames = Object.keys(demonBook).sort((a, b) => a.localeCompare(b));
    for (let name of sortedNames) {
        console.log(`${name} - ${demonBook[name].health} health, ${demonBook[name].damage} damage`);
    }

}

// netherRealm('M3ph-0.5s-0.5t0.0**');
netherRealm('M3ph1st0**, Azazel');
// netherRealm('Gos/ho');