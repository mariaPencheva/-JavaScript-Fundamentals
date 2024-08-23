function inventory(arr) {
    let heroes = [];

    //let entries = Object.entries(arr);
    //let data = entries;

    for (let data of arr){
        let splitData = data.split(' / ');
        //console.log(data);

        let heroName = splitData[0];
        let heroLevel = Number(splitData[1]);
        //let items = splitData[2];

        let items = splitData[2] ? splitData[2].split(', ') : []; // това е третият елемент от масива splitData, където се очаква да е списък с предметите за героя като низ, ? - ако условието преди него е истина и splitData[2].split(', ') тоест не е празен низ, тогава го разделяме на поднизове, там където срещне запетая и празно място; с ':' казваме - ако не е истина, тоест е празен низ или не съществува то тернарният оператор продължава след двуеточието което е празен масив при нас, който се присвоява на items.; Така, ако героят има предмети, items ще бъде масив с тези предмети. Ако героят няма предмети, items ще бъде празен масив, който означава, че героят няма никакви предмети.

        // Създаваме обект за всеки герой и го добавяме в масива
        heroes.push({
            name: heroName,
            level: heroLevel,
            items: items
        });

        //console.log(items);

    }

    // Сортираме героите по техните нива - от най-ниско към най-високо
    heroes.sort((a, b) => a.level - b.level);

    // Печатаме информацията за всеки герой
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
    
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);