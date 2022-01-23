//  Fornire all'utente due prompt in successione per inserire due numeri
//  Stampare in pagina il numero più alto

//  Fornire all'utente due prompt in successione per inserire due numeri
const risultatiElement = document.getElementById('risultati');
const firstNumber = parseInt(prompt('Inserire un numero'));
const secondNumber = parseInt(prompt('Inserire un numero diverso rispetto al precedente'));

//  Determinazione della tringa di testo del risultato
let risultato = 'Il numero più alto è '

//  Programma

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    risultato = 'Valori non validi';
    //  Check validità valori
} else {
    if ( firstNumber > secondNumber) {
        risultato += firstNumber;
    } else if ( firstNumber < secondNumber) {
        risultato += secondNumber;
    } else {
        risultato += 'I numeri sono uguali';
    }
}

//  Stampare in pagina il numero più alto
risultatiElement.innerText = risultato;