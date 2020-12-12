const fs = require('fs');

let numbers;

fs.readFile("./list.txt", 'utf8', (err, data) => {
    if (err) return console.err(err);
    else {
        numbers = data.match(/.+[0-9]/g);
        console.log(numbers);
        calculate(numbers);
    }
});

/**
 * 
 * @param {} array
 */
function calculate(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {

            // checks if the sum is 2020
            if ((parseInt(numbers[i]) + parseInt(numbers[j])) === 2020) {
                console.log(`${numbers[i]} + ${numbers[j]}`);
                console.log(parseInt(numbers[i]) * parseInt(numbers[j]));
            }
        }
    }
}
