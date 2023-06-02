var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [Codigo, Quantidade] = pegarValores(lines.shift())
let Resultado = 0

switch (Codigo) {
  case 1:
    Resultado = Quantidade * 4.00
    console.log('Total: R$ ' + Resultado.toFixed(2));
    break;
  case 2:
    Resultado = Quantidade * 4.50
    console.log('Total: R$ ' + Resultado.toFixed(2));
    break;
  case 3:
    Resultado = Quantidade * 5.00
    console.log('Total: R$ ' + Resultado.toFixed(2));
    break;
  case 4:
    Resultado = Quantidade * 2.00
    console.log('Total: R$ ' + Resultado.toFixed(2));
    break;
    case 5:
      Resultado = Quantidade * 1.50
    console.log('Total: R$ ' + Resultado.toFixed(2));
    break;
  default:
    console.log('Sorry');
}