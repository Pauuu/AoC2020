const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

const passwords = [];

fs.readFile("./list.txt", 'utf8', (err, data) => {
    if (err) return console.err(err);
    else {

        // total passwords that are valid
        let totalValidPasswords = 0;

        // the array of each element of the password's list
        const passwordsRgx = data.match(/[a-z,0-9]+/g);

        // creates the array of objects of the list of passwords
        for (let i = 0; i < passwordsRgx.length; i += 4) {
            passwords.push({
                min: passwordsRgx[i],
                max: passwordsRgx[i + 1],
                letter: passwordsRgx[i + 2],
                passw: passwordsRgx[i + 3]
            });
        }

        // counts the total passowrds that are valid
        passwords.forEach(password => {
            const totalChars = charCount(password.passw, password.letter);

            if (totalChars >= password.min && totalChars <= password.max) {
                totalValidPasswords++;
            }
        });

        // output the result
        console.log(totalValidPasswords);
    }
});

// counts the numbers of chars of string given a specific char
function charCount(string, letter) {
    let count = 0;

    for (let char = 0; char < string.length; char++) {
        if (letter === string.charAt(char)) count++;
    }

    return count;
}