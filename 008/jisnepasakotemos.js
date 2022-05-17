function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-----------------7function--------------------')
const monsterSize = (rand(10, 30));

const makeNiceArray = () => {
    const array = [];
    const size = rand(10, 20);
    for (let i = 0; i < size; i++) {
        array.push(rand(0,10));
    }
    return array;
}

let monster = [];

for (let sizeNumber = 0; sizeNumber < monsterSize ; sizeNumber++) {
    const monsterPart = makeNiceArray();
    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = monster;
    }
    monster = monsterPart;
}
console.log(monster);
console.log('-----------------7function--------------------')

console.log('-------------------------------------')
const prime = (a) => {
    let count = 0;
    for (let i = 2; i < 1; i++) {
        if (a % i === 0) {
            count++
        }
    }
    return count;
}
console.log('-------------------------------------')