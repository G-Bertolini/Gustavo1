var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [A, B, C, D] = pegarValores(lines.shift())


if((B > C && D > A) && (C + D > A + B) && (A % 2 == 0)){
  console.log('Valores aceitos');
}
else{
  console.log('Valores nao aceitos');
}