/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca. */

let km = parseInt(prompt ("Inserisci il numero di km da percorrere:"));
let age = parseInt(prompt ("Inserisci l'età del passeggero:"));
let tariffa = 0.21;

if ('age' < 18) {
  'Prezzo_totale_biglietto' = 'km' * ('tariffa' - ('tariffa' * 20/100));
} else if ('age' > 65) {
    'Prezzo_totale_biglietto' = 'km' * ('tariffa' - ('tariffa' * 40/100));
} else {
    'Prezzo_totale_biglietto' = ('km' * 'tariffa');
}
let Prezzo_totale_biglietto = `

<p> 'Prezzo_totale_biglietto' </p>

`
document.getElementById('title').innerHTML = Prezzo_totale_biglietto
