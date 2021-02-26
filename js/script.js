// calcolo del prezzo del biglietto

// 1. inserimento dati base, km, età, inizializzazione tariffakm

var km = parseInt(prompt("quanti chilometri percorrerai?"));

if ( isNaN(km) ){   //validazione dato
  km = parseInt(prompt("devi scrivere un numero"))
}

console.log(km);

var eta = parseInt(prompt("quanti anni hai?"));

if ( isNaN(eta) ){    //validazione dato
  eta = parseInt(prompt("devi scrivere un numero"))
}

console.log(eta);

var tariffaKm = 0.21;

// 2. calcolo prezzo base

var prezzoStandard = km * tariffaKm;

console.log(prezzoStandard);

// 3. calcolo prezzo scontato

var convSconto = "";

if (eta < 18){
  convSconto = prezzoStandard * 0.2
  prezzoScontato = prezzoStandard - convSconto
}
else if(eta >= 65){
  convSconto = prezzoStandard * 0.4
  prezzoScontato = prezzoStandard - convSconto
}
else{
  prezzoScontato = prezzoStandard
}

console.log(convSconto);
console.log(prezzoScontato.toFixed(2));
