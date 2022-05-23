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

/*
let data=7;
while(data>=0) {
  if(data<=5) {
    data--;
    continue;
  }
  console.log(data);
  data--;
}

let zodis = "Programavimas";
console.log(zodis.charAt(4))

let zodis1="MokymasisMokykloje";
console.log(zodis1.indexOf('M'))

var x=1; 
    var y=2;
    console.log("Atsakymas: "+x+y);

    const arr = [5, 4, 3, 2, 1];
    arr.forEach((x,y) => {
        console.log(y)
    });
*/


  
      

