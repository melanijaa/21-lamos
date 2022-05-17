/*
https://docs.google.com/document/d/1W_PXawhBTbCNqwmNOpisJWkxXnrTUtOV9-owb8Ufdrc/edit
*/

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
*/

function text(parameter) {
    return `String'o "${parameter}" pirma raide yra ${parameter[0]} ir string'as sudarytas is ${parameter.length} raidziu.`;
}

const argumentas = text('abrakadabra');
console.log(argumentas);

/*
2. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
*/

function text1(parameter1) {
    return `${parameter1} `
}

const argumentas1 = text1('abrakadabra');
console.log(argumentas1.repeat(23));

/*
3. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
*/

function liekana(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            count++
        }
    }
    return `Skaičius ${number} be liekanos dalinasi iš ${count} sk.`
}
console.log(liekana(6356457));

/*
4. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
*/

const array = [];
let number = 0;

for (let i = 0; i < 100; i++) {
    number = rand(33, 77);
    array.push(number);
}
console.log(array);
console.log(array.sort(function(a, b){return b - a}));

/*
5. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
*/

const array1 = [];
let number1 = 0;

for (let i = 0; i < 100; i++) {
    number1 = rand(333, 777);
    array1.push(number1);
}
console.log(array1);

/*
6. Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
*/

const monsterSize = (rand(10, 30));

const makeNiceArray = () => {
    const array = [];
    const size = rand(10, 20);
    for (let i = 0; i < size; i++) {
        array.push(rand(0,10));
    }
    return array;
}

let monster = [];

for (let sizeNumber = 0; sizeNumber < monsterSize ; sizeNumber++) {
    const monsterPart = makeNiceArray();
    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = monster;
    }
    monster = monsterPart;
}
console.log(monster);

/*
7. Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.
*/

/*
8. Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.
*/
console.log('----------------------888---------------')

const whiteCat = [rand(1, 33), rand(1, 33), rand(1, 33), rand(1, 33)];

const yesOrNo = (a, c = 3) => {
    for (let i = 0; i < c; i++) {
        if (prime(a.slice(-c)[i])) {
            return true;
        }
    }
    return false;
}

while(yesOrNo(whiteCat)) {
    whiteCat.push(rand(1, 33));
}

console.log(whiteCat);

console.log('----------------------888---------------')

/*
9. Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite. 
*/

const prime = (a) => {
    let count = 0;
    for (let i = 2; i < 1; i++) {
        if (a % i === 0) {
            count++
        }
    }
    return count;
}

const sqArray = [];

for (let i = 0; i < 10; i++) {
    const row = [];
    for (let y = 0; y < 10; y++) {
        row.push(rand(1, 100));
    }
    sqArray.push(row);
}

const primeSum = a => {
    let sum = 0;
    let count = 0;
    a.forEach(e => e.forEach(value => {
        if(!prime(value)) {
        count++
        sum += value        }
    }));
    console.log(sum);
    console.log(count);
    return count ? sum / count : 0;
}

console.log(...sqArray);
console.table(...sqArray);
console.table(sqArray);
console.log(primeSum(sqArray));

const findMin = a => {
    let min = 100; // a[0][0]
    let coord = [0, 0];
    a.forEach((r, ri) => r.forEach((value, ci) => {
        if (value < min) {
            min = value;
            coord = [ri, ci];
        }
    }));
    return coord ;
}

console.table(findMin(sqArray))

let s = 100;

while (primeSum(sqArray) < 70) {
    if( --s === 0) {
        console.log('BR');
        break;
    }
    const [x, y] = findMin(sqArray);
    sqArray[x][y] += 3;
}

console.table(findMin(sqArray))

//global scope???
//this???