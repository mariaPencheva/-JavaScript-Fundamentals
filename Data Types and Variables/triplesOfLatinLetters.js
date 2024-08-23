function triplesOfLatinLetters(numAsStr) {
    let n = Number(numAsStr);

    let chars = 'abcdefghijklmnopqrstuvwxyz'

    for (let k = 0; k < n; k++) {

        for (let j = 0; j < n; j++) {

            for (let i = 97; i < n; i++) {

                console.log(chars[k] + chars[j] + chars[i]);

            }
        }
    }

} 

triplesOfLatinLetters(`3`);