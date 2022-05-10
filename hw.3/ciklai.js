function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
*/

for (i = 0; i < 5; i++){
    console.log('Labas');
}

/*
2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
*/

for (i = 0; i < 5; i++) {
    console.log(i)
}

/*
3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
*/

for (i = 0; i <= 40; i+=10) {
    console.log(i)
}

/*
4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
*/

for (i = 49; i <= 53; i++) {
    console.log(i)
}

/*
5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
*/

for (i = 4; i >= 0; i--) {
    console.log(i)
}

/*
6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
*/

const pazymiai = [0, 2, 4, 6, 8];


let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];

    console.log(parseInt(pazymys));
    i2++;
}

/*
7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
*/

for (i = 0; i < 5; i++) {
    console.log(rand(0,10));
}

/*
8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
*/

let e = 0;
while (e !== 5) {
     e = Math.floor(Math.random() * 10);
     console.log(e)
}

/*
9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
*/

let a = 0;
while (a <= 100) {
     let b = Math.floor(Math.random() * 10);
     a += b;
}
console.log(a)

/*
10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
*/

let f = 0;
let g = 0;
while (f !== 5 && f !== 7) {
     f = Math.floor(Math.random() * 10);
     console.log(f)
     g++
}
console.log(`Prasisuko ${g} ciklas/ai.`)

/*
11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
*/

let suma = 0;
let ciklas = 0;

while (suma <= 20 || ciklas < 11) {
    let randomNum1 = rand(0,10)
    suma += randomNum1;
    ciklas++
    console.log(randomNum1);
}

/*
12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
*/

let z = 0;
let countZ = 0;

while (true) {
    z = rand(0,10);
    console.log(z);
    if (z % 2 !== 0) {
        countZ++
    } 
    if (countZ === 3) {
        break;
    }
}

/*
13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
*/

let num1 = 0;
let num2 = 0;

while(true) {
    num1 = rand(0,10);
    num2 = rand(0,10);
    console.log(num1, num2);
    if(num1 === num2) {
        break;
    } 
}

/*
14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
*/

let suma1 = 0;
let suma2 = 0;

while (suma1 < 100 || suma2 < 100) {
    number1 = rand(0,10);
    number2 = rand(0,10);
    suma1 += number1;
    suma2 += number2
    console.log(`${number1},${suma1} | ${number2},${suma2}`)
}

/*
15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).
*/

//copypaste
let random1 = 0;
let random2 = 0;
let count1 = 0;
let count2 = 0;

do{
    let random1 = rand(0, 10);
    let random2 = rand(0, 10);
    console.log(random1, random2)

    if(random1 % 2 != 0){
        count1++
    }
    if(random2 % 2 != 0){
       count2++
   }
   if (count1 >= 3 && count2 >= 3) {
       break;
   }
 }
 while(count1 != 3 || count2 != 3);
