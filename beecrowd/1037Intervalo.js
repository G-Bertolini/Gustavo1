var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
//let [A, B, C] = pegarValores(lines.shift())


//let Intervalos = [[0,25], [25,50], [50,75], [75,100]];

let Valores = parseFloat(lines.shift());

if (Valores >= 0 && Valores <=25.00)
{
  console.log('Intervalo [0,25]');
}

else if(Valores >=25.01 && Valores <= 50){
  console.log('Intervalo (25,50]');
}
else if(Valores >=50.01 && Valores <= 75){
  console.log('Intervalo (50,75]');
}

else if(Valores >=75.01 && Valores <= 100){
  console.log('Intervalo (75,100]');
}
else{
  console.log('Fora de intervalo');
}