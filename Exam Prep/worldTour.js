// You are a world traveler, and your next goal is to make a world tour. To do that, you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid.
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid.
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences).
// Note: After each command, print the current state of the string!
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}".
// Input / Constraints
// •	JavaScript: you will receive a list of strings.
// •	An index is valid if it is between the first and the last element index (inclusive) (0 ….. Nth) in the sequence.
// Output
// •	Print the proper output messages in the proper cases as described in the problem description.


function worldTour(arr) {
    let stops = arr.shift(); 

    for (let line of arr) {
        let tokens = line.split(':');
        let command = tokens[0];

        if (command === 'Add Stop') {
            let index = Number(tokens[1]);
            let addStr = tokens[2];
            if (index >= 0 && index < stops.length) {
                stops = stops.substring(0, index) + addStr + stops.substring(index); 
            }
        } else if (command === 'Remove Stop') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && endIndex < stops.length && startIndex <= endIndex) {
                stops = stops.substring(0, startIndex) + stops.substring(endIndex + 1);
            }
        } else if (command === 'Switch') {
            let oldStr = tokens[1];
            let newStr = tokens[2];

            if (stops.includes(oldStr)) {
                stops = stops.split(oldStr).join(newStr);
            }

        } else if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break; 
        }

        console.log(stops);
    }
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);