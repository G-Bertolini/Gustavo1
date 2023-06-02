var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let Ano = parseInt(lines.shift());



console.log(Ano + 'ano(s)' + Mes + 'mes(s)' + Dia + 'Dia(s)');
