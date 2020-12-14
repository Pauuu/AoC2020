const fs = require('fs');

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
                first: passwordsRgx[i],
                second: passwordsRgx[i + 1],
                letter: passwordsRgx[i + 2],
                passw: passwordsRgx[i + 3]
            });
        }

        // counts the total passowrds that are valid
        passwords.forEach(password => {
            if (checkCharIndex(
                password.passw,
                password.letter,
                password.first,
                password.second)) totalValidPasswords++;
        });

        // output the result
        console.log(totalValidPasswords);
    }
});

// checks if the are chars in the first and second given position
// "index 0" does not exist
function checkCharIndex(string, char, firstChar, secondChar) {
    // XOR comparation
    if (
        (string.charAt(firstChar - 1) !== char &&
            string.charAt(secondChar - 1) === char)
        ||
        (string.charAt(firstChar - 1) === char &&
            string.charAt(secondChar - 1) !== char)
    ) return true;

    return false;
}

// counts the numbers of chars of string given a specific char
function charCount(string, letter) {
    let count = 0;

    for (let char = 0; char < string.length; char++) {
        if (letter === string.charAt(char)) count++;
    }

    return count;
}