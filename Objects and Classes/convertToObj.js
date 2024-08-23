function convertToObj(arg){
    let parsed = JSON.parse(arg);
    let keys = Object.keys(parsed);

     for (let key of keys){
        console.log(`${key}: ${parsed[key]}`);
    }
}

convertToObj(
    '{"name": "George", "age": 40, "town": "Sofia"}'
)