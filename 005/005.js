function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const n1 = ['Asilas', 'asilas', 'briedis', 'kate', 'suo'];
const n2 = ['Asilas', 'varle', 'briedis', 'suo'];

console.table('-------map - pereina ir pasidaro masyvo kopija---------');
const copy = n1.map(value => value);
console.table(copy);

console.table('-------forEach - tiesiog pereina per masyva---------');
const copy1 = n1.filter(value => true); // pasibandyk su false , value
console.table(copy1);

console.table('--------indexOf - iesko kazko ko paprasem--------');
const index = n1.indexOf('asilas');
const index1 = n1.indexOf('kate');
const index2 = n1.indexOf('kakadu');
console.table(index);
console.table(index1);
console.table(index2);
// jei neranda rodys -1

console.table('--------filter + indexOF--------');
const copy2 = n1.filter(v => -1 !== n2.indexOf(v));

console.table(copy2);

console.table('--------7 uzdavinys--------');

const copy3 = [];
for (let i = 0; i < n1.length; i++) {
    const what = n1[i]; 
    for (let k = 0; k < n2.length; k++) {
        if (n2[k] == what) {
            copy3.push(what);
            break;
        }
    }
}
console.table(copy3);

console.table('--------FOR IN--------'); //paima index
for (const ja in n1) {
    console.log(ja);
}

console.table('--------FOR OF--------'); //paima reiskme
for (const ja of n1) {
    console.log(ja);
}

console.table('--------9 uzduotis--------');

const ma = [(rand(5, 15), rand(5, 15))];

for (let i = 2; i < 10; i++) {
    ma.push(ma[i - 1] + ma[i - 2]);
}


console.log('----------OBJEKTAI---------');

const kazkas = 'kdfsjkhfdjhfjdf';
const namasSuKaminu = {
    kaminas: 'yra 3 metrai',
    gyventojai: ['Asilas', 'asilas', 'briedis', 'kate', 'suo'],
    tas: kazkas
};
console.log(namasSuKaminu);
console.log(namasSuKaminu.gyventojai, namasSuKaminu.tas);
console.log(namasSuKaminu.tas);

namasSuKaminu.animals = {cat: 'Murka', dog: 'Amsis'};
console.log(namasSuKaminu);
console.log(namasSuKaminu.animals);
console.log(namasSuKaminu.animals.cat);

console.log('---------tiesiog linkas i nama/ reliai vienas ir tas pats----------');
const namasSuKaminu2 = namasSuKaminu;
namasSuKaminu2.animals.cat = 'kitas katinas';
console.log(namasSuKaminu.animals.cat);
console.log(namasSuKaminu2.animals.cat)

console.log('----------masyvo kopija---------');

const n4 = n1.slice(); //kopijavimas
n4.shift();

console.log(n1, n4);

console.log('----------...---------');
const a1 = {cat: 'Murka', dog: 'Amsis'};
const a2 = {...a1};

console.log(n1, n4);

console.log('----------DU NAMAI---------');
const namasSuKaminu3 = JSON.parse(JSON.stringify(namasSuKaminu));
namasSuKaminu3.animals.cat = 'kitas katinas';
console.log(namasSuKaminu3, namasSuKaminu);

console.log('-------------------MAP-----------------------');
// map - greiatai susirasti ko nori

const map = new Map();

map.set('Murka', 5);
map.set('Pilkis', 8);
map.set('Pukis', 3);

console.log(map);
console.log(map.get('Pilkis'));
map.delete('Pilkis');
console.log(map.has('Pilkis'));

const masmap = [...map];
console.log(masmap);
