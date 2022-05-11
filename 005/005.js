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
