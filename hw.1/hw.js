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

let arr = [m, r, l, v];
console.log(arr);
let n = arr.length;
countFreq(arr, n); 

function countFreq(arr, n)
{
    let visited = Array.from({length: n}, (_, i) => false);
    for (let i = 0; i < n; i++) {
        if (visited[i] == true)
            continue;
            let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                visited[j] = true;
                count++;
            }
        }
           console.log(arr[i] + " " + count );
    }
}

/*
5. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius
*/

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

/*
6. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
*/

/*
7. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()
*/
