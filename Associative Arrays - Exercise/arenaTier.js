// // "{gladiator} -> {technique} -> {skill}"
// // "{gladiator} vs {gladiator}"

// запис на зада1ата: 
// {
//     "Peter": {
//         "Duck": 400
//     },
//     "Julius": {
//         "Shield": 150
//     },
//     "Gladius": {
//         "Heal": 200,
//         "Support": 250,
//         "Shield": 250
//     }
// }

function arenaTier(arr) {
    let arena = {};

    while (arr[0] != 'Ave Cesar') {
        let line = arr.shift();
        // console.log(line);
        let tokens = line.split(' -> ');

        if (tokens.length == 3) {
            let name = tokens[0];
            let tech = tokens[1];
            let skill = Number(tokens[2]);

            if (!arena.hasOwnProperty(name)) {
                arena[name] = {};
            }

            let gladiator = arena[name];
            if ((!gladiator.hasOwnProperty(tech)) || gladiator[tech] < skill) {
                gladiator[tech] = skill;
            }
        } else {
            let [name1, name2] = line.split(' vs ');
            //console.log(gladiator1, gladiator2);
            let gladiator1 = arena[name1];
            let gladiator2 = arena[name2];

            if (!gladiator1 || !gladiator2) {
                continue;
            }

            let techsGladiator1 = Object.keys(gladiator1);
            let techsGladiator2 = Object.keys(gladiator2);

            let hasMatch = false;

            for (let tech of techsGladiator1) {
                if (techsGladiator2.includes(tech)) {
                    hasMatch = true;
                }
            }

            if (!hasMatch) {
                continue;
            }

            let total1 = 0;
            let total2 = 0;

            for (let skill of Object.values(gladiator1)) {
                total1 += skill;
            }
            for (let skill of Object.values(gladiator2)) {
                total2 += skill;
            }

            if (total1 > total2) {
                delete arena[name2];
            } else {
                delete arena[name1];
            }
        }

    }


    let result = Object.entries(arena).sort(compareSkill);

    for (let [name, techs] of result ){
        let total = 0;
        for (let skill of Object.values(techs)){
            total += skill;
        }

        console.log(`${name}: ${total} skill`);

        let sortedTechs = Object.entries(techs).sort(compareTechs);
        for (let [techs, skill] of sortedTechs){
            console.log(`- ${techs} <!> ${skill} `);
        }
    }

    //console.log(result);

    function compareSkill(a, b) {
        let total1 = 0;
        let total2 = 0;

        for (let skill of Object.values(a[1])) {
            total1 += skill;
        }
        for (let skill of Object.values(b[1])) {
            total2 += skill;
        }

        return (total2 - total1) || a[0].localeCompare(b[0]);
    }


    function compareTechs(a, b){
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    }
 
}


arenaTier(
    [
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
)