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
});
