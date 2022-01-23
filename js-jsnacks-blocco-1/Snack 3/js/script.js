//  Chiedere per 10 volte all’utente di inserire un numero. 
//  Stampare la somma di tutti i numeri inseriti.

// Recuperare elemento HTML
const displayElement = document.getElementById('display');

// Inizzializzare una variabile per la somma.

let sum = 0;
let isValid = true;

//  Chiedere per 10 volte all’utente di inserire un numero.
for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt('Inserisci un numero'));
    if (isNaN(number)) {
        isValid = false;
    } else {
        sum += number;
    }
}

if (isValid) {
    console.log('somma finale: ' + sum);
} else {
    console.log('Hai inserito elementi non validi');
}