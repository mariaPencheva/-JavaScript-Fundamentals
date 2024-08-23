// destinations {'Bulgaria': {'Sofia': 500, 'Varna': 800}, 'France': {'Paris': 2000}} -> структура

function travelTime(arr){
    let destinations = {};

    for (let command of arr) {
        let [country, town, price] = command.split(' > ');
        //console.log(country);

        price = Number(price);
        if (country in destinations){
            if (town in destinations[country]){
                if(price < destinations[country][town]){
                    destinations[country][town] = price;
                }
            } else {
                destinations[country][town] = price;
            }
        } else {
            destinations[country] = { [town]: price };

        }
    }

    let entries = Object.entries(destinations)
                        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of entries){
        let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        // console.log(townEntries);

        let result = `${country} -> `;

        for (let [town, price] of townEntries){
            result += `${town} -> ${price} `;
        }

        console.log(result);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);