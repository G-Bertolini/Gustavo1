var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let  Num = parseInt(lines.shift());
let Horas = parseInt(lines.shift());
let ValorH = parseFloat(lines.shift());

let Salario =(Horas*ValorH);

console.log('NUMBER = ' + Num);
console.log('SALARY = U$' + Salario.toFixed(2));