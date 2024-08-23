function meetings(arr) {
    let calendar = {};

    for (let item of arr){
        let tokens = item.split(' ');
        let day = tokens[0];
        let name = tokens[1];
        // let [day, name] = item.split(' ');
        // console.log(tokens);

        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        calendar[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    //let entry = Object.entries(meetings);
    for (let [day, name] of Object.entries(calendar)){
        console.log(day, '->', name);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);