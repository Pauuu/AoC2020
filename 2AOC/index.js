const fs = require('fs');

const passwords = [];

fs.readFile("./list.txt", 'utf8', (err, data) => {
    if (err) return console.err(err);
    else {

        const passwordsRgx = data.match(/[a-z,0-9]+/g);

        for (let i = 0; i < passwordsRgx.length; i += 4) {
            passwords.push({
                min: passwordsRgx[i],
                max: passwordsRgx[i + 1],
                letter: passwordsRgx[i + 2],
                passw: passwordsRgx[i + 3]
            });
        }

        console.log(JSON.stringify(passwords));
    }
});

