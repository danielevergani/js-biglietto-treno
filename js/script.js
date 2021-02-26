// calcolo del prezzo del biglietto

// 1. inserimento dati base, km, età, inizializzazione tariffakm
alert("benvenuto nel nostro calcolatore di prezzo")

var km = parseInt(prompt("quanti chilometri percorrerai?"));

if ( isNaN(km) ){   //validazione dato
  km = parseInt(prompt("devi scrivere un numero"))
}

if ( km > 16723 ){
  alert("sa vero che le linee attive in Italia hanno una lunghezza massima di 16723 vero? non le sembra eccessivo? ")
}

document.getElementById("lunghezza_tratta").innerHTML = km;

var eta = parseInt(prompt("quanti anni hai?"));

if ( isNaN(eta) ){    //validazione dato
  eta = parseInt(prompt("devi scrivere un numero"))
}

console.log(eta);

var tariffaKm = 0.21;

// 2. calcolo prezzo base

var prezzoStandard = km * tariffaKm;

document.getElementById("tariffa_base").innerHTML = prezzoStandard;

// 3. calcolo prezzo scontato

var convSconto = "";

if (eta < 18){
  convSconto = prezzoStandard * 0.2
  prezzoScontato = prezzoStandard - convSconto
  // document.getElementById("importo_sconto").innerHTML = convSconto.toFixed(2);
  // document.getElementById("prezzo_scontato").innerHTML = prezzoScontato.toFixed(2);
  document.writeln('lei ha diritto a uno sconto di ' + convSconto.toFixed(2) + '&euro; quindi il suo totale è di ' + prezzoScontato.toFixed(2) + '&euro;');
}
else if(eta >= 65){
  convSconto = prezzoStandard * 0.4
  prezzoScontato = prezzoStandard - convSconto
  // document.getElementById("importo_sconto").innerHTML = convSconto.toFixed(2);
  // document.getElementById("prezzo_scontato").innerHTML = prezzoScontato.toFixed(2);
  document.writeln('lei ha diritto a uno sconto di ' + convSconto.toFixed(2) + '&euro; quindi il suo totale è di ' + prezzoScontato.toFixed(2) + '&euro;');
}
else{
  prezzoScontato = prezzoStandard
}

console.log(convSconto);
console.log(prezzoScontato.toFixed(2));
