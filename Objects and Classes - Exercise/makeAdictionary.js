function makeAdictionary(arr) {
    let dictionary = {};

    for (let i = 0; i < arr.length; i ++){
        let parsedObj = JSON.parse(arr[i]);

        for(let entry of Object.entries(parsedObj)){
            let term = entry[0];
            let definition = entry[1];
            dictionary[term] = definition;
        }
    }

    let keys = Object.keys(dictionary); 
    let sortedKeys = keys.sort(); 
    
    for (let term of sortedKeys){
        let definition = dictionary[term];

        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

makeAdictionary(
    [ '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' ]
)