function storage(arr) {
    //01
    // let stor = new Map();

    // for (let item of arr){
    //     let tokens = item.split(' ');
    //     let product = tokens[0];
    //     let quantity = Number(tokens[1]);

    //     if (!stor.has(product)){
    //         stor.set(product, quantity);
    //     } else {
    //         let curQuan = stor.get(product);
    //         let newQuan = curQuan += quantity;
    //         stor.set(product, newQuan);
    //     }
    // }

    // for (let entry of stor){
    //     let key = entry[0];
    //     let value = entry[1]
    //     console.log(key, '->', value);
    // }

    //02
    // let store = new Map();
    // for (let item of arr){
    //     let [product, quantity] = item.split(' ');
    //     quantity = Number(quantity);

    //     if (!store.has(product)){
    //         store.set(product, quantity);
    //     } else {
    //         let curQuan = store.get(product);
    //         let newQuan = curQuan += quantity;
    //         store.set(product, newQuan);
    //     }
    // }

    // for (let [key, value] of store){
    //     console.log(key, '->', value);
    // }

    // 03
    let store = {};
    for (let items of arr){
        let [item, qty] = items.split(' ');
        qty = Number(qty);
        // console.log(qty);

        if(store.hasOwnProperty(item)){
            store[item] += qty;
        } else {
            store[item] = qty;
        }
    }

    for (let [item, qty] of Object.entries(store)){
        console.log(item, '->', qty);
    }

}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);