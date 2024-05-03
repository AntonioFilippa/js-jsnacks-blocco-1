

//CREO DUE VARIABILI DATE DALL'UTENTE TRAMITE PROMPT

let parola1 = prompt('inserisci parola');

let parola2 = prompt('inserisci parola');

//CREO ARRAY PER CALCOLARE LUNGHEZZA DELLE STRINGHE

let i = parola1.length
let i2 = parola2.length

//MISURO I E I2 E DO RISULTATO FINALE

if (i > i2) {
    console.log(parola2);
    console.log(parola1);
}

if (i == i2) {
    console.log(parola1);
    console.log(parola2);
    console.log("le parole sono uguali");
} else if (i < i2) {
    console.log(parola1);
    console.log(parola2);
}