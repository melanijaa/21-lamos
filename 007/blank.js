console.log(document); //HTML

const tagH1 = document.querySelector('h1');
console.log(tagH1); //padeda surasti kazka dokumente

// https://www.w3schools.com/cssref/css_selectors.asp //SVARBU
const tagH11 = document.querySelector('h1 + h1');
console.log(tagH11); //jei toks pat HTML tagas
const tagH12 = document.querySelector('h1:last-of-type');
console.log(tagH12); //jei toks pat HTML tagas

//visi tagai, kurie yra h1
const allH1 = document.querySelectorAll('h1');
console.log(allH1); //good for forEach
console.log(allH1[1]);
console.log(allH1[0]);
console.log(allH1[2]);

console.log('------------ForEach------------');
allH1.forEach(h1 => console.log(h1));

console.log('------kaip nudazyti visus elementus su JS------'); //pasiskolinta is CSS
allH1.forEach(h1 => {
    console.log(h1);
    h1.style.color = 'pink';
    h1.style.backgroundColor = 'rgb(34, 139, 34)'; //#228B22
    h1.innerText = 'TEXT'; //pakeisti h1 tag teksta
    h1.innerHTML = '<i>TEXT</i>' //pakeisti teksto stiliu
});

console.log('------------EVENT------------');

const butt = document.querySelector('button');

butt.addEventListener('click', () => {
    console.log('SUBMIT')
    butt.style.color = butt.style.color == 'red' ? 'black' : 'red';
})


console.log('--------click and change color--------');
allH1.forEach(h1 => {
    h1.addEventListener('click', () => {
       h1.style.color = h1.style.color == 'pink' ? 'black' : 'pink';
    })
})

console.log('--------click and change color--------');

const a = document.querySelector('a');
a.addEventListener('click', e => {
    e.preventDefault(); //preventina nuejima
    e.target.style.color = 'red'; //vietoje a.style.color yra e.target
})

console.log('---------------------------');
document.querySelector('#vaikas').addEventListener('click', e => {
    e.stopPropagation();
    console.log('vaikas')
    e.target.style.backgroundColor = 'blue';
})

document.querySelector('#tevas').addEventListener('click', e => {
    console.log('tevas', , e.target);
    document.querySelector('#tevas').style.backgroundColor = 'blue';
})