function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
- Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
- Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
- Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
- Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
*/

let pirmas = rand(5, 25);
let antras = rand(5, 25);
let trečias = rand(5, 25);
console.log(pirmas);
console.log(antras);
console.log(trečias);

const suma = (pirmas, antras, trečias) => pirmas + antras + trečias;
const sum = suma(pirmas, antras, trečias);
console.log(sum);

let array = [pirmas, antras, trečias];
console.log(array + '');
console.log(`${pirmas} ${antras} ${trečias}`);
console.log(`${pirmas} + ${antras} + ${trečias} = ${sum}`);

/*
2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
*/

let ketvirtas = rand(5, 10);
console.log(ketvirtas);

/*
3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
*/

const penktas = 'Labas';

for(let i = 0; i < 5; i++) {
    console.log(penktas);
}

/*
4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
*/

for(let i = 0; i < 7; i++) {
    console.log(ketvirtas);
}

/*
5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
*/

for(let i = 0; i < ketvirtas; i++) {
    console.log(ketvirtas);
}

/*
6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
*/

for(let i = 0; i < ketvirtas; i++) {
    if (ketvirtas > 7) {
        console.log(ketvirtas)
    }
}

/*
7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
- Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
- Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
- Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
- Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
*/

let sumFor = 0;
let arrŠeštas = [];

for (let i = 0; i < 5; i++) {
    let šeštas = rand(10,20);
    sumFor += šeštas
    console.log(šeštas)
    arrŠeštas.push(šeštas);
}

console.log(sumFor);

/*
8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
- Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
- Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
- Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
- Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
- Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
- Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
*/

let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;

while (value1 !== 12) {
    value1 = rand(10,25);
    console.log(value1);
    value2++
    if (value1 <= 18 ) {
        value3 = value3 + value1; 
        value4++
    }
    if (value1 % 2 === 0) { //even number 
        value5++ 
        console.log(`even number`) 
    } else if (value1 % 2 !== 0) { //odd number 
        value6++
        console.log(`odd number`) 
    }
}

console.log(`Prasisuko ${value2} kartų.`)
console.log(value3);
console.log(value4);
console.log(`Cikle yra ${value5} lyginių skaičių`);
console.log(`Cikle yra ${value6} nelyginių skaičių`);

/*
9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
- Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
- Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
- Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
*/

let e = 0;
while (e !== 5) {
     e = rand(5,10);
     console.log(e)
for(let i = 0; i < e; i++) {
        console.log(e);
    }
}

/*
10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.
*/

// 1 DALIS
let kazys = rand(10,20);
let petras = rand(5,25);

console.log(`Kazys surinko: ${kazys}.`);
console.log(`Petras surinko: ${petras}.`);

function laimetojas(kazys, petras) {
    if (kazys > petras) {
        return 'Partiją laimėjo: Kazys.';
    } else if (kazys < petras) {
        return 'Partiją laimėjo: Petras.';
    }
}
console.log(laimetojas(kazys, petras));

// 2 DALIS

let kazioSuma = 0;
let petroSuma = 0;

while((kazioSuma < 222)&&(petroSuma < 222)){
    kazioSuma += kazys;
    petroSuma += petras;
    
      if (kazioSuma >= 222 && kazioSuma > petroSuma){
      console.log(`laimejo Kazys surinkęs ${kazioSuma}` )
  }
      if (petroSuma >= 222 && petroSuma > kazioSuma){
      console.log(`laimejo Petras surinkęs ${petroSuma}` )
  }
      if (petroSuma === 222 && kazioSuma === 222){
      console.log(`Rezultatas - lygiosios` )
  }
}
