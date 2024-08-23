// function palindromeIntegers(arr) {

//     for (let num of arr){
//         let isPalindrome = checkIsPalindrome(num)
//         console.log(isPalindrome);
//     }

//     function checkIsPalindrome(num) {
//         let numStr = String(num);
//         let reversedNumStr = '';

//         for (let i = numStr.length - 1; i >= 0; i--){
//             let curChar = numStr[i];
//             reversedNumStr += curChar;
//         }

//         let isPalindrome = numStr == reversedNumStr; //логически израз; ако са равни/ ако не са равни връща съответно true/false

//         return isPalindrome;

//     }

// }

function palindromeIntegers(arr) {
    for(let num of arr){
        let numStr = String(num);
        let reversedNumStr = numStr.split('').reverse().join('');
        console.log(numStr == reversedNumStr); //true/false
    }
}

palindromeIntegers([123,323,421,121]);