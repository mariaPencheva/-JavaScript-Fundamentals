function addressBook(arr) {
    //01
    // let adrBook = {};

    // for (let item of arr){
    //     let tokens = item.split(':');
    //     let name = tokens[0];
    //     let adress = tokens[1];
    //     adrBook[name] = adress;
    // }

    // let entries = Object.entries(adrBook);
    // entries.sort((a, b) => a[0].localeCompare(b[0]));
    
    // let sorted = {};

    // for(let [name, adress] of entries){
    //     sorted[name] = adress;
    // }

    // for(let[name, adress] of Object.entries(sorted)){
    //     console.log(name, '->', adress);
    // }

    //02
    let adressB = {};

    for (let item of arr){
        let [name, adress] = item.split(':');
        adressB[name] = adress;
    }

    let sortedEntries = Object
                        .entries(adressB)
                        .sort((a, b) => a[0].localeCompare(b[0])); //sorted alphabetically by name

    for (let [name, adress] of sortedEntries){
        console.log(name, '->', adress);
    }

    //03
    // let adressB = {};

    // for (let item of arr){
    //     let [name, adress] = item.split(':');
    //     adressB[name] = adress;
    // }
    
    // let sorted = Object.entries(adressB)
    //                     .sort((a, b) => a[0].localeCompare(b[0]))
    //                     .map(entry => entry.join(' -> '))
    //                     .join('\n');
    
    // console.log(sorted);
    
    
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);