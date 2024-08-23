function orders(products, counter) {
    let pricePerProduct = 0;
    
    switch (products) {
        case "coffee":
            pricePerProduct = 1.50;
            break;
        case "water":
            pricePerProduct = 1.00;
            break;
        case "coke":
            pricePerProduct = 1.40;
            break;
        case "snacks":
            pricePerProduct = 2.00;
            break;
    }
    
    let total = pricePerProduct * counter;
    console.log(total.toFixed(2));
}

orders("water", 5);