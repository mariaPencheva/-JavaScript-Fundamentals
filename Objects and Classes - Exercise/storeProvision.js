function storeProvision(stockArr, productsArr){
    let products = {};

   for (let i = 0; i < stockArr.length; i += 2){
        let productName = stockArr[i];
        let qty = Number(stockArr[i + 1]);

        //console.log(productName, qty);

        products[productName] = qty;
    }

    //console.log(products);
    
    for (let j = 0; j < productsArr.length; j += 2){
        let productName = productsArr[j];
        let qty = Number(productsArr[j + 1]);
 
        if (productName in products){  
            products[productName] += qty;
        } else {
            products[productName] = qty;
        }

    }

    let entries = Object.entries(products);

    
    for(let entry of entries){

        // let prod = entry[0];
        // let value = entry[1];

        // console.log(`${prod} -> ${value}`);
        console.log(entry.join(' -> '));
    }

}

storeProvision(
    [ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ],
    [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]
)