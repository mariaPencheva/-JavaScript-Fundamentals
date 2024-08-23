function towns(arr) {

    for (let rows of arr){
        let tokens = rows.split(' | ');
        // let [city, longitude, latitude] = rows.split(' | ');
        
        let city = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);
    
        let townObj = {
            town: city,
            latitude: latitude,
            longitude: longitude
        }

        console.log(townObj);
    }


}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])