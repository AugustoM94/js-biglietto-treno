/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca. */

const km = parseInt(prompt("Inserisci il numero di km da percorrere:"));
const age = parseInt(prompt("Inserisci l'età del passeggero:"));
let prezzo_scontato = 0;
let Prezzo_finale;
const discountUnder18 = 20/100;
const discountOver65 = 40/100;
let Prezzo_biglietto = (km * 0.21);

if(isNaN(km) || isNaN(age)) {
    location.reload();
}

if (age < 18) {
    prezzo_scontato = (Prezzo_biglietto * discountUnder18);
    Prezzo_finale = (Prezzo_biglietto - prezzo_scontato);
} else if (age > 65) {
    prezzo_scontato = (Prezzo_biglietto * discountOver65);
    Prezzo_finale = (Prezzo_biglietto - prezzo_scontato);
} else {
   Prezzo_finale = Prezzo_biglietto;
}

Prezzo_biglietto = Prezzo_biglietto.toFixed(2)
Prezzo_finale = Prezzo_finale.toFixed(2);




document.getElementById('title').innerHTML = Prezzo_finale + '€'
