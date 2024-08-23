// During World War 2, you are a mathematician who joined the cryptography team to decipher the enemy's enigma code. Your job is to create a program to crack the codes. 
// On the first line of the input, you will receive the encrypted message. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content. There are several types of instructions, split by '|'
// •	"Move {number of letters}":
// o	Moves the first n letters to the back of the string
// •	"Insert {index} {value}":
// o	Inserts the given value before the given index in the string
// •	"ChangeAll {substring} {replacement}":
// o	Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// •	On the first line, you will receive a string with a message.
// •	On the following lines, you will be receiving commands, split by '|' .
// Output
// •	After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"


function theImitationGame(arr) {
    let message = arr.shift();

    let command = arr.shift();

    while (command != 'Decode') {
        let tokens = command.split('|');
        let action = tokens[0]; 

        if (action == 'Move') {
            let lettersCount = Number(tokens[1]);
            let firstLetters = message.slice(0, lettersCount);

            message = message.replace(firstLetters, '') + firstLetters;
            // console.log(encryptedMess);

        } else if (action == 'Insert') {
            let idx = Number(tokens[1]);
            let val = tokens[2];

            message = message.slice(0, idx) + val + message.slice(idx);
            // console.log(encryptedMess);
        } else {
            let substring = tokens[1];
            let replacement = tokens[2];

            while (message.includes(substring)){
                message = message.replace(substring, replacement);
            }
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);

    //02 var

//     let encryptedMess = arr.shift();

//     for (let i = 0; i < arr.length; i++) {
//         let lines = arr[i].split('|');
//         // let [command, arg1, arg2] = arr[i].split('|');
//         let command = lines[0];

//         if (command === 'Decode') {
//             break;
//         }

//         if (command == 'Move') {
//             let count = Number(lines[1]);
//             let firstPart = encryptedMess.substring(0, count);
//             let secondPart = encryptedMess.substring(count);
//             encryptedMess = secondPart + firstPart;

//         } else if (command == 'Insert') {
//             let index = lines[1];
//             let value = lines[2];
//             encryptedMess = encryptedMess.slice(0, index) + value + encryptedMess.slice(index);

//         } else if (command == 'ChangeAll') {
//             let substring = lines[1];
//             let replacement = lines[2];

//             while (encryptedMess.includes(substring)) {
//                 encryptedMess = encryptedMess.replace(substring, replacement);
//             }

//         }
//     }
// console.log(`The decrypted message is: ${encryptedMess}`);

    
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);