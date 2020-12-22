/**
 * Starting at the top-left corner of your map and 
 * following a slope of right 3 and down 1, 
 * how many trees would you encounter?
 */
const fs = require('fs');

fs.readFile("./input.txt", 'utf8', (err, data) => {
  if (err) return console.err(err);
  else {
    // tener en cuenta que las columnas de cada fila es "infinita"
    const trees = data.match(/[.,#]/g);

    let row = 0;
    let col = 0;
    let cont = 0;
    let position = 0;

    while (position <= trees.length) {
      if (trees[position] === '#') cont++;

      // baja una fila
      row++;

      // mueve 3 columnas a la derecha
      col += 3;

      // si supera 30, resta 31 (anchura total de las filas) para simular que ha dado
      // una vuelta entera
      if (col > 30) col -= 31;

      position = (row * 31) + col;
    }
    // console.log(trees[position]);

    console.log(cont);
  }
});
