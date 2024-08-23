function vacation(count, type, day){
    let pricePerPerson = 0;

    switch (type) {
        case "Students":
            if(day === "Friday"){
                pricePerPerson = 8.45;
            } else if(day === "Saturday"){
                pricePerPerson = 9.80;
            } else if(day === "Sunday"){
                pricePerPerson = 10.46;
            }
        break;

        case "Business":
            if(day === "Friday"){
                pricePerPerson = 10.90;
            } else if(day === "Saturday"){
                pricePerPerson = 15.60;
            } else if(day === "Sunday"){
                pricePerPerson = 16;
            }
        break;

        case "Regular":
            if(day === "Friday"){
                pricePerPerson = 15;
            } else if(day === "Saturday"){
                pricePerPerson = 20;
            } else if(day === "Sunday"){
                pricePerPerson = 22.50;
            }
        break;
    
    }

    let totalPrice = count * pricePerPerson;

    if(type === "Students" && count >= 30){
        totalPrice *= 0.85;
    } else if (type === "Business" && count >= 100){
        let discountedPrice = 10 * pricePerPerson;
        totalPrice -= discountedPrice;
    } else if (type === "Regular" && (count >= 10 && count <= 20)){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");