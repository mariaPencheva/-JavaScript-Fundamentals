// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 

// ASCII table:
// [48; 57] - числа, [65, 90] - големи букви, [97, 122] - малки букви

function passwordValidator(pass) {
    let isValidLength = checkValidPassLength(pass);
    let isOnlyLettDig = checkOnlyLettersDigits(pass);
    let isMin2Dig = checkMin2digits(pass);

    if(isValidLength && isOnlyLettDig && isMin2Dig){
        console.log(`Password is valid`);
    }

    function checkValidPassLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }

    function checkOnlyLettersDigits(pass) { //ASCII table
        for (let curChar of pass) {
            let asciiCode = curChar.charCodeAt(0);

            if (
                !((asciiCode >= 48 && asciiCode <= 57) ||
                    (asciiCode >= 65 && asciiCode <= 90) ||
                    (asciiCode >= 97 && asciiCode <= 122))
            ) {
                console.log(`Password must consist only of letters and digits`);
                return false;
            }
        }

        return true;
    }

    function checkMin2digits(pass) {
        let digitsCounter = 0;

        for (let curChar of pass){
            let asciiCode = curChar.charCodeAt(0);
            if (asciiCode >= 48 && asciiCode <= 57){
                digitsCounter ++;
            }
        }

        if (digitsCounter < 2){
            console.log(`Password must have at least 2 digits`);
            return false;
        } else {
            return true;
        }
    }

}
passwordValidator('logIn');