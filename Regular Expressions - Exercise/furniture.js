function furniture(arr) {
    let items = [];
    let totalPrice = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
    let command = arr.shift();

    while (command != 'Purchase') {
        let match = command.match(pattern);
        // console.log(match);

        if (match) {
            // let name = match.groups.name;
            // let price = match.groups.price;
            // let qty = match.groups.qty;

            let { name, price, qty } = match.groups;
            let furniturePrice = Number(price) * Number(qty);

            items.push(name);
            totalPrice += furniturePrice;
        }
        command = arr.shift();
    }

    console.log(`Bought furniture:`);

    if (items.length > 1){
        console.log(items.join('\n'));
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);