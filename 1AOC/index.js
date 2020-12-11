const fs = require('fs');
fs.readFile("./list.txt", 'utf8', (err, data) => {
    if (err) return console.err(err);
    else {
        let numbers = data.match(/.+[0-9]/g);
        console.log(numbers);
    }
});