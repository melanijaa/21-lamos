function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
*/

const pinigine = [];
for (let i = 0; i < rand(10,30); i++) {
    pinigine.push(rand(0,10));
}
console.log(pinigine);
console.table(pinigine);

/*
2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
*/

//1 variantas
const sum = pinigine.reduce((partialSum, a) => partialSum + a, 0);
console.log(`Piniginėje yra ${sum} pinigai.`);

//2 variantas
let sum1 = 0;
for (let i = 0; i < pinigine.length; i++) {
    sum1 += pinigine[i];
}
console.log(`Piniginėje yra ${sum1} pinigai.`);

/*
3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
*/

let sum2 = 0;
for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) 
    sum2 += pinigine[i];
} console.log(`Piniginėje yra ${sum2} popierinių pinigų.`);


/*
4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
*/

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2) {
        pinigine[i] = 0;
    }
}
console.log(pinigine);

/*
5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
*/

let big = Math.max(...pinigine);
let count = pinigine.reduce(function(a, b) {
    return a + (b === big);
}, 0);

console.log(Math.max(...pinigine));
console.log(count);

/*
6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
*/

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === 0) {
        pinigine[i] = i;
    }
}
console.log(pinigine);

/*
7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
*/

//1 budas
while(pinigine.length !== 30) {
    pinigine.push(rand(0,10));
}
console.log(pinigine);

//2 budas
for (let i = 0; i < 30 - pinigine.length ; i++) {
    pinigine.push(rand(5,25));
}
console.log(pinigine);

/*
8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
*/

const monetos = [];
const pinigai = [];

for(let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2) {
        monetos.push(pinigine[i]);
    } else if (pinigine[i] >= 2) {
        pinigai.push(pinigine[i]);
    } 
}
console.log(monetos);
console.log(pinigai);

/*
9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
*/

const wallet = [...monetos, ...pinigai];
console.log(wallet);

/*
10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
*/

const cards = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
wallet.push(...cards);
console.log(wallet);

/*
11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
*/

const cardsABC = cards.sort();
console.log(cardsABC);

/*
12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
*/

for (let i = 0; i <= 13 ; i++) {
    if (rand(1,2) === 1) {
        cards.push('MasterCard');
    } else {
        cards.push('Visa');
    }
}
console.log(cards);

/*
13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
*/

let cardA = 0;
let cardB = 0;

for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 'MasterCard') {
        cardA++;
    }
    if (cards[i] === 'Visa') {
        cardB++;
    }
}
console.log(`MasterCard: ${cardA}. Visa: ${cardB}.`)

/*
14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
*/

const lottery = [];

for (let i = 0; i < 10 ; i++) {
    lottery[i] = rand(1000000000, 9999999999);
}

wallet.push(...lottery);
console.log(wallet);

/*
15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
*/

const lotteryMinMax = lottery.sort (
    function(a, b) {
    return a - b
});
console.log(lotteryMinMax);

/*
16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
*/

const  money = rand(3, 10);
let test = 0;

do {
    pinigai.push(money);
    test += money
} while (test < 500)

console.log(pinigai);
console.log(test);

/*
17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
*/

let winner = 0;
for (let i = 0; i < lottery.length; i++) {
    if (lottery[i] % 777 === 0) {
        winner++
    }
} 
console.log(`Laimingų bilietų: ${winner}`);

/*
18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
*/

// pirma uzduoties dalis
const photos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
wallet.push(...photos);
console.log(wallet);

// antra uzduoties dalis
const photosMinMax = photos.sort (
    function(a, b) {
    return a.length - b.length
});
console.log(photosMinMax);