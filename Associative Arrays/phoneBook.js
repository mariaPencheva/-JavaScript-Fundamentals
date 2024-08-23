function phoneBook(arr) {
    let phoneB = {};

    for (let item of arr){
        //let tokens = item.split(' ');
        //console.log(tokens);
        let [name, phone] = item.split(' ');
        //let name = tokens[0];
        //let phone = tokens[1];
        //console.log(name);

        phoneB[name] = phone;
        //console.log(phoneB);
    }

    //01
    //let entry = Object.entries(book);
    // for (let row of entry){
    //     let name = row[0];
    //     let phone = row[1];
    //     console.log(name, '->', phone);
    // }

    for (let [name, phone] of Object.entries(phoneB)){
        console.log(name, '->', phone);

    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);