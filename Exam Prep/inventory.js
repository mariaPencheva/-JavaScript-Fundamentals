// As a young traveler, you gather items and craft new items.
// Input / Constraints
// You will receive a journal with some collecting items, separated with a comma and a space (", "). After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// •	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
// •	"Drop - {item}" - you should remove the item from your inventory if it exists.
// •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
// •	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".


function inventory(arr) {
    let journal = arr.shift().split(', ');

    for (let i = 0; i < arr.length; i ++){
        let curLine = arr[i];
        let tokens = curLine.split(' - ');
        let command = tokens[0];
        //console.log(tokens);

        if (curLine === "Craft!"){
            break;
        } else if (command === "Collect"){
            let item = tokens[1];

            if (!(journal.includes(item))){
                journal.push(item);
            }

        } else if (command === "Drop"){
            let item = tokens[1];

            if (journal.includes(item)){
                let index = journal.indexOf(item);
                journal.splice(index, 1);
            }

        } else if (command === "Combine Items"){
            let curItem = tokens[1].split(':');
            let oldItem = curItem[0];
            let newItem = curItem[1];

            if(journal.includes(oldItem)){
                let index = journal.indexOf(oldItem);
                journal.splice(index + 1, 0, newItem);
            } else {
                continue;
            }

        } else if (command === "Renew"){
            let item = tokens[1];
            let index = journal.indexOf(item);
            
            if (journal.includes(item)){
                journal.splice(index, 1);
                journal.push(item);
            }
        }

    }
    
    console.log(journal.join(', '));

}
// inventory([
//     'Iron, Wood, Sword', 
//     'Collect - Gold', 
//     'Drop - Wood', 
//     'Craft!'
//   ]);

inventory([
    'Iron, Sword',
    'Collect - Gold',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);