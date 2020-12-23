const fs = require('fs');

fs.readFile("./input.txt", 'utf8', (err, data) => {
    if (err) return console.err(err);
    else {
        // tener en cuenta que las columnas de cada fila es "infinita"
        const trees = data.match(/[.,#]/g);

        // array de movimientos: el primer valor es cuanto se ha de mover a la derecha,
        // el segundo cuanto se ha de mover hacia abajo
        const movements = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

        let row;        // fila actual
        let col;        // columna actual
        let cont;       // arboles chocados por cada tipo de movimiento
        let position;   // posicion actual en el array del mapa
        let total = 1;  // total de arboles chocados

        for (let movement = 0; movement < movements.length; movement++) {
            row = 0;
            col = 0;
            cont = 0;
            position = 0;

            while (position < trees.length) {
                if (trees[position] === '#') cont++;
                
                // baja Y filas
                row += movements[movement][1];
                
                // mueve X columnas a la derecha
                col += movements[movement][0];

                // si supera 30, resta 31 (anchura total de las filas) para simular que ha dado
                // una vuelta entera
                if (col > 30) col -= 31;

                position = (row * 31) + col;
            }
            
            total *= cont;  
        }

        console.log(total);
    }
});
