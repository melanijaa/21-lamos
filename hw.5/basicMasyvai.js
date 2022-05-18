function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/

const masyvas = [];
for (let i = 0; i < 30; i++) {
    masyvas.push(rand(5,25));
}
console.log(masyvas);
console.table(masyvas);
console.log(masyvas.length);

/*
2. Naudodamiesi 1 uždavinio masyvu:
*/

//1 Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let filter = masyvas.filter(x => x > 10).length;
console.log(`Masyve skaičių > 10 yra ${filter}`);

//2 Raskite didžiausią masyvo reikšmę ir jos indeksą;

let bigNum = Math.max(...masyvas);
let index = masyvas.indexOf(bigNum);

console.log(`Didžiausias skaičius masyve: ${bigNum}, o jo vieta masyve yra ${index}.`);

//2.1

let minNum = Math.min(...masyvas);
let index1 = masyvas.indexOf(minNum);

console.log(`Mažiausias skaičius masyve: ${minNum}, o skaičiaus vieta masyve: ${index1}`);

//3 Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

function EvenOddSum(arr, n)
{
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0)
            even += arr[i];
        else
            odd += arr[i];
    }
 
    console.log('even number sum = ' + even);
    console.log('odd number sum = ' + odd);
}
 
    let n = masyvas.length;
 
    EvenOddSum(masyvas, n);

//4 Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const array4 = [];
for (i = 0; i < masyvas.length; i++) {
    array4.push(masyvas[i] - i);
}
console.log(array4)

//5 Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

// 5.1 būdas ilgesnis ir ne toks efektyvus
while(masyvas.length !== 39) {
    masyvas.push(rand(5,25));
}
console.log(masyvas);

// 5.2 budas
for (let i = 0; i < 39 - masyvas.length ; i++) {
    masyvas.push(rand(5,25));
}
console.log(masyvas);

//6 Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);

const array5 = [];
const array6 = [];

for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0) {
        array5.push(masyvas[i]) 
    }
    if (i % 2 !== 0) {
        array6.push(masyvas[i]) 
    }
}
console.log(array5);
console.log(array6);


//7 Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 15 && i % 2 === 0) {
        masyvas[i] = 0;
    }
}
console.log(masyvas);

//8 Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        console.log(i);
        break;
    }
}

/*
3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
*/

const raides = ['A', 'B', 'C', 'D'];
const masyvas1 = [];
for (let i = 1; i <= 200; i++) {
    masyvas1.push(raides[rand(0,3)]);
}
console.log(masyvas1);

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < masyvas1.length; i++) {
    if (masyvas1[i] === 'A'){
        countA++;
    }
    if (masyvas1[i] === 'B'){
        countB++;
    }
    if (masyvas1[i] === 'C'){
        countC++;
    }
    if (masyvas1[i] === 'D'){
        countD++;
    }
}
console.log(`Raidžių masyve yra: A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);

/*
4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
*/

console.log('---------------4-----------------');
const abc = 'ABCD';
const array1 = [];
const array2 = [];
const array3 = [];
const randArray = (array) => {
    while (array.length < 200) {
        array.push(abc.charAt(rand(0, abc.length - 1)));
    } return array;
}

console.log(randArray(array1));
console.log(randArray(array2));
console.log(randArray(array3));

const arraysSum = [];
array1.forEach((v, i) => v + array2[i] + array3[i]);
console.log(arraysSum)

console.log('----------------4----------------');

/*
5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
*/

// 1 budas
const arr1 = [];
const arr2 = [];
let iterationSum = 100;

for (let i = 0; i < iterationSum; i++) {
    const randA = rand(100, 999)
    const randB = rand(100, 999)
    let idxA = arr1.indexOf(randA);
    let idxB = arr2.indexOf(randB);
    
    if(arr1.length < 100){
        if(idxA === -1){
            arr1.push(randA);
        } else {
         iterationSum++
        }
    }
    if(arr2.length <100){
        if(idxB === -1){
            arr2.push(randB);
        } else {
         iterationSum++
        }
    }
}

console.log(arr1); //gali būti console.table
console.log(arr2);


// 2 budas
const longSet1 = new Set()

do {
    longSet1.add(rand(100, 999));
} while (longSet1.size < 100);

const longArray = [...longSet1];

const longSet2 = new Set()

do {
    longSet2.add(rand(100, 999));
} while (longSet2.size < 100);

const longArray1 = [...longSet2];

console.log(longArray)
console.log(longArray1)

/*
6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
*/

const arr5 = [];
for (let i = 0; i < arr1.length; i++) {
    if(!arr2.includes(arr1[i])) {
        arr5.push(arr1[i]);
    }
}
console.log(arr5);

/*
7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
*/

const arr4 = [];
for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i];
    for (let k = 0; k < arr2.length; k++) {
        if (arr2[k] === num) {
            arr4.push(num);
            break;
        }
    }
}
console.log(arr4);

/*
8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
*/

const freakArray = [];
longArray1.forEach((v, i) => {
    freakArray[v] = longArray1[i];
});

console.log(freakArray);
console.table(freakArray);

/*
9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
*/

const ma = [rand(5, 15), rand(5, 15)];

for (let i = 2; i < 10; i++) {
    ma.push(ma[i - 1] + ma[i - 2]);
}
console.table(ma);
