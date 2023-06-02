var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [A, B, C] = pegarValores(lines.shift())


let Delta = Math.pow(B, 2)-4*A*C;

let Raiz = Math.sqrt(Delta);

let X1 = (-B + Raiz) / (2 * A);

let X2 = (-B - Raiz) / (2 * A);

if (Delta <= 0 || A === 0) {
  console.log("Impossivel calcular");
  
}
else {
  console.log('R1 = ' + X1.toFixed(5));
  console.log('R2 = ' + X2.toFixed(5));  
}

