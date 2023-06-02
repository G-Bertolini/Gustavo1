var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let A =  parseFloat(lines.shift());
let B =  parseFloat(lines.shift());
let C =  parseFloat(lines.shift());

let MEDIA = ((A*2) + (B*3) + (C*5)) /10; 


console.log('MEDIA = ' + MEDIA.toFixed(1));
