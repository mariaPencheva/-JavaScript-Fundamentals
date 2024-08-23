function cityInfo(city) {

    /*01var*/
    // let keys = Object.keys(city);
    //  //console.log(keys);

    //  for (let key of keys){
    //      console.log(key, '->', city[key]);
    //  }


    // //02var
    // for (let key in city) {
    //     console.log(key, '->', city[key]);
    // }


    //03var
    for (let entry of Object.entries(city)){
        //console.log(entry);
        console.log(entry[0], '->', entry[1]);
    }


    // //04var
    // for (let [key, value] of Object.entries(city)){
    //     console.log(key, '->', value);
    // }

}

cityInfo({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: '1000'
});