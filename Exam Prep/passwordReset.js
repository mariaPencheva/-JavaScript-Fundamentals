// Yet again, you have forgotten your password. Naturally, it's not the first time this has happened. Actually, you got so tired of it that you decided to help yourself with an intelligent solution.
// Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
// •	"TakeOdd"
// o	 Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// •	"Cut {index} {length}"
// o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// o	The given index and the length will always be valid.
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replace all of its occurrences with the substitute text given and print the result.
// o	If it doesn't, prints "Nothing to replace!".
// Input
// •	You will be receiving strings until the "Done" command is given.
// Output
// •	After the "Done" command is received, print:
// o	"Your password is: {password}"
// Constraints
// •	The indexes from the "Cut {index} {length}" command will always be valid.


function passwordReset(arr) {
    let password = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ');
        let command = line.shift();

        if (command == 'Done') {
            break;
        }

        if (command == 'TakeOdd') {
            let newStr = '';
            for (let j = 1; j < password.length; j += 2) {
                let curLetter = password[j];
                newStr += curLetter;
            }
            password = newStr;
            console.log(password);

        } else if (command == 'Cut') {
            let firstIndex = Number(line[0]);
            let length = Number(line[1]);

            let firstPart = password.substring(0, firstIndex);
            let secondPart = password.substring(firstIndex + length);
            password = firstPart + secondPart;
            console.log(password);

        } else if (command == 'Substitute') {
            let searchSymbol = line[0];
            let replacement = line[1];

            if (password.includes(searchSymbol)) {
                password = password.split(searchSymbol).join(replacement);
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }

    console.log(`Your password is: ${password}`);

}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);

// passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
// "TakeOdd",
// "Cut 18 2",
// "Substitute ! ***",
// "Substitute ? .!.",
// "Done"]);