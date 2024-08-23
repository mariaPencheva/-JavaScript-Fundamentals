function catalogue (arr) {
    let catalogue = [];
    
    for (let products of arr){
        let splitProduct = products.split(' : ');
        let product = {
            name: splitProduct[0],
            price: Number(splitProduct[1])
        }
        catalogue.push(product);
    }

    catalogue.sort((a,b) => a.name.localeCompare(b.name));
    let currentLetter = '';

    for (let product of catalogue) {

        let initial = product.name[0].toUpperCase();
        if (initial !== currentLetter) {
            console.log(initial);
            currentLetter = initial;
        }

        console.log(`  ${product.name}: ${product.price}`);
    }

}

catalogue (
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
        ]
)