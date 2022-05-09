console.log('labas!!!')

let skaicius = 444;
console.log(!!skaicius);
let skaicius2 = 0;
console.log(!!skaicius2);
let neSkaicius = '444';
console.log(!!neSkaicius);
let neSkaicius2 = '0';
console.log(!!neSkaicius2);
let ne = '  ';
console.log(!!ne);
let nop = '';
console.log(!!nop);
let loginis = false;
console.log(5>8);
console.log(8>5);

console.log(typeof skaicius);
console.log(typeof neSkaicius);
console.log(typeof loginis);

// new
if (neSkaicius) {
    console.log('yes!');
} else if (skaicius) {
    console.log('maybe!')
} else {
    console.log('no!');
}

// nieko nedaro, nes nieko neturi savyje
if (nop) {
    console.log('nop!');
}

//new
if (5 > 8) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (5 < 8) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (5 === 5) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (5 >= 8) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (5 !== 8) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (55 === ' 5 5 ') {
    console.log('yes!');
} else {
    console.log('no!');
}

if (55 === '55') {
    console.log('yes!');
} else {
    console.log('no!');
}

if (55 === '55a') {
    console.log('yes!');
} else {
    console.log('no!');
}

if (true === true) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (false === false) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (false === true) {
    console.log('yes!');
} else {
    console.log('no!');
}

if (true === 'true') {
    console.log('yes!');
} else {
    console.log('no!');
}

//jei norime, kad konvertacija ivyktu rasome ==, nei grieztai norime, kad atitiktu rasome ===

console.log(true || true);
console.log(false || true);
console.log(1 || 1);

// && pirmai renkasi false
console.log(false && true);
console.log(true && true);

// jei bent viena teisingas jis pasirinks true
if (5 > 8 || 6 > 3) {
    console.log('yes!');
} else {
    console.log('no!');
}

// && renkasi neteisinga
if (5 > 8 && 6 > 3) {
    console.log('yes!');
} else {
    console.log('no!');
}


/*
>    <===>  <=
<    <===>  >=
==    <===>  !==
||    <===>  &&

*/

let t = 8;
if (t > 8) {
    console.log('yes!');
} else {
    console.log('no!');
}

//priesingai

if (t < 8) {
    console.log('yes!');
} else {
    console.log('no!');
}

//reverse veikia tik su =

if (t <= 8) {
    console.log('yes!');
} else {
    console.log('no!');
}

console.log('', '6', +'6')
console.log('zodis', 7, ''+7)

let kas = 'asd';

switch(kas) {
    case 'anas':
        console.log('ANAS');
        break;
    case 'tas':
        console.log('TAS');
        break;
    case 'antis':
        console.log('ANTIS');
        break;
    default:
        console.log('labanaktis');
}
