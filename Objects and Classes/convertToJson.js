function convertToJson(name, lastName, hairColor){
    let obj = {
        name: name, 
        lastName: lastName,
        hairCol: hairColor
    } 

    let encoded = JSON.stringify(obj);
    console.log(encoded);

}

convertToJson('Peter', 'Smith', 'Blond')