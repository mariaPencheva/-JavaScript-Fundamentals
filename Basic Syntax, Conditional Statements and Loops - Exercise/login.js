function login(input) {
    let username = input[0];
    let password = '';
    let counter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let guess = input[1];
    let index = 2;

    while (guess !== password) {
        counter++;

        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log("Incorrect password. Try again.");

        guess = input[index];
        index++;


    }

    console.log(`User ${username} logged in.`);

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);