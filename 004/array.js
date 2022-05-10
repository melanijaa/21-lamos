//array yra duomenu struktura
//array yra objektas

const namas = ['petras', 'asilas', 'barsukas', 'kate'];

console.log(namas);
//lentele
console.table(namas);
//vieta array
console.log(namas[1]);
//pakeisti 'gyventoja'
namas[1] = 'kazys';
console.table(namas);
//'apgyvendinimas'
namas[4] = 'suo';
console.table(namas);
//'sukuria tuscia array'
namas[87] = 'paukstukas';
console.log(namas);
console.table(namas);
//length
console.log(namas.length);
// ideti elementa i array, bus paskutineje vietoje
namas.push('gyvate');
console.table(namas);
// idedame i 0 pozicija
namas.unshift('pele');
console.table(namas);
// istrinti kazka is array pabaigos
namas.pop();
console.table(namas);
// istrinti kazka is array pradzios
namas.shift();
console.table(namas);
//
namas.splice(2,1);
console.table(namas);
// kiek pasalinti i virsu
namas.splice(2,2);
console.table(namas);
//issiusti saskaita visiems
for (let i = 0; i < namas.length; i++) {
    console.log(namas[i]); // i = 0, 1, 2, ... pastoviai keisis
}

const nPlus = [
[4, 7, 12],
[85, 17, 12],
[10, 33, 74],
[26, 41, 99],
]
console.table(nPlus);