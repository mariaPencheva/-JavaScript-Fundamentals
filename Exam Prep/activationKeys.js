// You are about to make some good money, but first, you need to think of a way to verify who paid for your product and who didn't. You have decided to let people use the software for a free trial period and then require an activation key to continue using the product. Before you can cash out, the last step is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!
// The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
// After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// •	"Contains>>>{substring}":
// o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// o	Otherwise, prints: "Substring not found!"
// •	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
// o	All given indexes will be valid.
// •	"Slice>>>{startIndex}>>>{endIndex}":
// o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
// o	Both indices will be valid.
// Input
// •	The first line of the input will be a string consisting of letters and numbers only. 
// •	After the first line, until the "Generate" command is given, you will be receiving strings.
// Output
// •	After the "Generate" command is received, print:
// o	"Your activation key is: {activation key}"


function activationKeys(arr) {
    let activationKey = arr.shift();
    // console.log(activationKey);

    for (let i = 0; i < arr.length; i++) {
        let lines = arr[i].split('>>>');
        let command = lines.shift();

        if (command == 'Generate') {
            break;
        }

        if (command == 'Contains') {
            let substring = lines[0];

            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command == 'Flip') {
            let caseUorL = lines[0];
            let startIndex = Number(lines[1]);
            let endIndex = Number(lines[2]);
            
            let substring = activationKey.substring(startIndex, endIndex);
            if (caseUorL == 'Upper') {
                let replacement = substring.toUpperCase();
                activationKey = activationKey.replace(substring, replacement);
                console.log(activationKey);
            } else if (caseUorL == 'Lower') {
                let replacement = substring.toLowerCase();
                activationKey = activationKey.replace(substring, replacement);
                console.log(activationKey);
            }

        } else if (command == 'Slice') {
            let startIndex = Number(lines[0]);
            let endIndex = Number(lines[1]);
            let firstPart = activationKey.slice(0, startIndex);
            let endPart = activationKey.slice(endIndex);
            
            activationKey = firstPart.concat(endPart);
            console.log(activationKey);
        }
    }
    
    console.log(`Your activation key is: ${activationKey}`);
}

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);