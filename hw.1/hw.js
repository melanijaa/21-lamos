function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1. Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()
*/

let a = rand(0, 4);
let b = rand(0, 4);

function dalyba(a, b) {
    if (a > b) {
        return a / b;
    } else if (a < b) {
        return b / a;
    }
}
console.log(dalyba(a, b));

/*
2. Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let c = rand(0, 25);
let d = rand(0, 25);
let e = rand(0, 25);

const median = arr => {
const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
console.log(median([c, d, e]));

/*
3. Įvedami skaičiai -f, g, h– kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().
*/

let f = rand(1, 10);
let g = rand(1, 10);
let h = rand(1, 10);

let result = (f + g < h) ? 'Trikampis!' : 'Sudaryti trikampio neišėjo';
console.log(result)

/*
4. Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems 
reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()
*/

let m = rand(0, 2);
let r = rand(0, 2);
let l = rand(0, 2);
let v = rand(0, 2);

const arr = [m, r, l, v]
console.log(arr)
const map = arr.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log(map);

/*
5. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius
*/

//1 VAR. ILGESNIS

let q = rand(-10, 10);
let w = rand(-10, 10);
let y = rand(-10, 10);

if (q > 0) {
    console.log(`+${q}+`)
} else if (q < 0) {
    console.log(`-${q}-`)
} else if ( q === 0) {
    console.log(`*${q}*`)
}

if (w > 0) {
    console.log(`+${w}+`)
} else if (w < 0) {
    console.log(`-${w}-`)
} else if ( w === 0) {
    console.log(`*${w}*`)
}

if (y > 0) {
    console.log(`+${y}+`)
} else if (y < 0) {
    console.log(`-${y}-`)
} else if ( y === 0) {
    console.log(`*${y}*`)
}

// 2 VAR.

function ran(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
 }

for(i = 0; i < 3; i++) {
    let value = ran(-10, 10);
    if(value > 0) {
        console.log(`-${value}-`);
    }
    else if (value < 0) {
        console.log(`+${value}+`);
    }
    else if (value === 0) {
        console.log(`*${value}*`);
    }
}

/*
6. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
*/

let zvakiuKiekis = rand(5, 3000);
let zvakiuKaina = 1
let zvakiuKaina1 = 0;

if(zvakiuKiekis > 1000) {
    console.log(`Kiekis: ${zvakiuKiekis}.
    Kaina be nuolaidos: ${zvakiuKiekis * zvakiuKaina}.
    Kaina su 3 % nuolaida: ${zvakiuKiekis * 0.97}eu.`)
} else if(zvakiuKiekis > 2000) {
    console.log(`Kiekis: ${zvakiuKiekis}.
    Kaina be nuolaidos: ${zvakiuKiekis * zvakiuKaina}.
    Kaina su 4 % nuolaida: ${zvakiuKiekis * 0.96}eu.`)
} else console.log(`Kiekis: ${zvakiuKiekis}.
Kaina: ${zvakiuKiekis * zvakiuKaina} EUR.`);

console.log(zvakiuKiekis);

/*
7. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()
*/

let pirmas = rand(0,100);
let antras = rand(0,100);
let trečias = rand(0,100);
let suma123 = 0;
let djfhdj = 0;

const array = [pirmas, antras, trečias];

for (let number of array) {
    suma123 += number;
    average = suma123 / array.length
}

filter = array.filter(
    function (a) { 
        return a >= 10 && a <=90; 
    }),

    average123 = filter.reduce(function (a, b) { return a + b; });

console.log(array);
console.log(average);
console.log(average123);





