var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let PROD = A * B;

console.log('PROD = ' + PROD);
