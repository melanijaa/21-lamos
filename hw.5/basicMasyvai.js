function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/

const masyvas = [];


/*
2. Naudodamiesi 1 uždavinio masyvu:
1. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
2.Raskite didžiausią masyvo reikšmę ir jos indeksą;
3. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
4. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
5. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
6. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
7. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
8. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
*/

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

/*
5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
*/

/*
6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
*/

/*
7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
*/

/*
8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
*/

/*
9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
*/