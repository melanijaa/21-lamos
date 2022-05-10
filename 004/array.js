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

//masyvas masyve
const nPlus = [
[4, 7, 12],
[85, 17, 12],
[10, 33, 74],
[26, 41, 99],
]
console.table(nPlus);
console.table(nPlus[1][0]);
console.table(nPlus[3][2]);

for(let i = 0; i < nPlus.length; i++) {
        console.log(nPlus[i]); //nurodo skaiciu eilute
}

for(let i = 0; i < nPlus.length; i++) {
    for(let k = 0; k < nPlus[i].length; k++) {
        console.log(nPlus[i][k]); //nurodo visus skaicius masyvo masyve
    }
}

//for each
nPlus.forEach(m => {
    m.forEach(k => console.log(k))
});
// supaprastinta formule
nPlus.forEach(m => m.forEach(k => console.log(k)));




// i array ideti reiksme su ciklu
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const naujasNamas = [];
for (let i = 0; i <100; i++) {
    naujasNamas.push(rand(10,99));
}
console.table(naujasNamas);


console.log('---------------------------')
//10X10
const naujasNamas1 = [];

for (let k = 0; k < 10; k++) {
    const aukstas = [];
    for (let i = 0; i <10; i++) {
        aukstas.push(rand(10,99));
    }
    naujasNamas1.push(aukstas);
}
console.table(naujasNamas1);
console.log('---------------------------')
//random ilgis
for (let k = 0; k < rand(3,10); k++) {};

//trecio zodzio antra raide
const n = ['aasd', 'fdsf', 'fdsfd']
n[2][2]

