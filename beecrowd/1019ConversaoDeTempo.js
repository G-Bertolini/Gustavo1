var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift()); 

let N2 = N % 3600; 

let N3 = N2 % 60;

let horas = parseInt(N / 3600);

let minutos = parseInt(N2 / 60);

let segundos = parseInt(N3);


console.log(horas + ":" + minutos + ":" + segundos);

