// FOR , kai iškart žinome kiek ciklo prasisukumų mums reiks;

// kai nežinom, kiek bus ciklų, naudojame WHILE. nuo 0 iki begalybės;

// do.. while nuo 1 iki begalybės; besąlygiškai daro pirma komandą ir tik paskui tikrina antra, trečia ir t.t.

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

//BREAK
//CONTINUE


//WHILE
let a = 0;

while(true) {
    if(++a > 100){ //saugiklis
        console.log('ciklo pabaiga')
        break; 
    }
}

//FOR 
for(let i = 0; i < 10; i++) {

    if (i === 6) {
        break;
    }

    if (i === 6 || i === 3) {
        continue;
    }
    console.log(`Darbas sukasi:
    ${i + 1} ratas`);
}

//DO WHILE

let c = 0;
do {
    if (a++ > 100) {
        console.log('dhfjhdf');
        break;
    } c++
} while (c < 10) {
    console.log(c);
}

// ciklas cikle
for (let i = 0; i < 5; i++) {
    console.log(`didelis ${i + 1}`);
    for (let k = 0; k < 3; k++) {
        console.log(`maziukas ${k + 1}`);
    }
}

// leksteje gali buti rand(10,30) kasniu kotleto;
// kasnis susikramto per rand(1,10);
// per kiek sukramptom

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const kotletoKasniai = rand(10,30);
let kotletasSuvalgytasPer = 0;

for (let i = 0; i < kotletoKasniai; i++) {
    const gabaliukasSukramtomas = rand(1,10);
    kotletasSuvalgytasPer += gabaliukasSukramtomas;
}

console.log(kotletasSuvalgytasPer);


//kitaip
for (let i = 0; i < kotletoKasniai; i++) {
    do {
        kotletasSuvalgytasPer++
    } while (rand(0, 4));
}

console.log(kotletasSuvalgytasPer);