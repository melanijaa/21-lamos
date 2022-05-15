function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aplink = 0;
let katėSuvalgo = 0;
let suvalgė = 0;

//kiek kartu apsisuko kate aplink nama, kol suvalge 20 ziurkiu

while (suvalgė < 20) {
    katėSuvalgo = rand(3, 5);
    suvalgė += katėSuvalgo;
    aplink++
}
console.log(suvalgė);
console.log(aplink);





  
      

