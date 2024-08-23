function passwordGenerator(arr) {
    let [str1, str2, replacementStr] = arr;

    let concatedStr = str1 + str2;
    // console.log(concatedStr);

    //let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;

    for (let char of concatedStr){
        // console.log(char);

        if (/[aeiou]/.test(char)){
            concatedStr = concatedStr.replace(char, replacementStr[index].toUpperCase());
            index ++;

            if (index == replacementStr.length){
                index = 0;
            }
        }
    }

    let password = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);

}

passwordGenerator([ 'ilovepizza', 'ihatevegetables', 'orange' ]);