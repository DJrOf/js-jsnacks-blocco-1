//  Fornire all'utente due prompt nei quali inserire due parole
//  Stampare: 'parola corta' + 'parola lunga'

//  Fornire all'utente due prompt nei quali inserire due parole

const firstWord = prompt('Inserisci una parola').trim();
const secondWord = prompt('Inserisci una seconda parola').trim();

let message = 'Le due parole hanno la stessa lunghezza';

if (firstWord.length === 0 || secondWord.length === 0 ) {
message = 'Valori incorretti';
    } else {
        if (firstWord.length > secondWord.length) {
            message = secondWord + '' + firstWord;
        } else if (firstWord.length < secondWord.length) {
            message = firstWord + '' + secondWord;
    }
}

//  Stampare: 'parola corta' + 'parola lunga'
console.log(message)
document.getElementById('display')
