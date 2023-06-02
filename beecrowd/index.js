var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
//let [primeiroValor, segundoValor, ...resto] = pegarValores(lines.shift())
//console.log(resto);

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let X = A + B;

console.log('X = ' + X);
