//function digitalRoot(n) {
//let sum = 0;
//let mas = n.toString().split('');
//let mas2 = mas.map((i) => Number(i));
//mas2.map((item) => (sum += item));
//return sum;
//}

//  let mas2 = mas.toString()
//  .split('')
//  if(mas2.length > 1)
//  mas.2}
//console.log(digitalRoot(1687));

//function digitalRoot(n) {
//  if (n < 10) {
//    return n;
//  } else {
//    let sum = 0;
//    let mas = n.toString().split('');
//    let mas2 = mas.map((i) => Number(i));
//    mas2.map((item) => (sum += item));
//    return digitalRoot(sum);
//  }
//}
//console.log(digitalRoot(5639699));

//
//function dig(n) {
//  let array = n.toString().split('');
//  let sum = 0;
//  let mas = array.map((item) => (sum += Number(item)));
//  return mas;
//}
//console.log(dig(16));

function high(x) {
  let mas = x
    .toLowerCase()
    .split(' ')
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  let index = mas.indexOf(Math.max(...mas));
  return x.split(' ')[index];
}
console.log(high('I wwas eyrtui yu'));
