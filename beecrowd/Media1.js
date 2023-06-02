var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let nota1 = parseFloat(lines.shift());
let nota2 = parseFloat(lines.shift());

MEDIA = ((nota1*3.5) + (nota2*7.5)) /11; // Qual a lógica? 

console.log('MEDIA = ' + MEDIA.toFixed(5)); // tofixed(5) para deixar 5 casas decimais após a virgula
