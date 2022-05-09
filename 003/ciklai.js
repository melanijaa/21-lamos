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
