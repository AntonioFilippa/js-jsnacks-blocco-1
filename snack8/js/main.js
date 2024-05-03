// RICHIEDO 4 CIFRE TRAMITE PROMPT


let numeroUtente = prompt("Inserisci un numero di 4 cifre: ");
// console.log(numeroUten);

// CONTROLLO SE IL VALORE E' NUMERICO O SE E' INTERO

//errore di validazione
if (numeroUtente.length !== 4 || isNaN(parseInt(numeroUtente))) {
  
    console.error("Errore: Inserisci un numero di 4 cifre valido.");
    
    location.reload();
    
    // RIPETI IN CASO DI ERRORE 

} else {

    console.log("numeroUtente: ")
    
    // CONVERTO IN NUMERO INTERO PER ESTRARRE LE CIFRE 
    
    
    let numero = parseInt(numeroUtente);
    
    
    let sommaCifre = 0;
    
    for (let i = 0; i < 4; i++) {
      
        sommaCifre += numero % 10; // ESTRAGGO ULTIMA CIFRA DAL CODICE E MANTENGO UNA SOMMA PARZIALE CON LET SOMMACIFRE
      
        numero = Math.floor(numero / 10); // IL NUMERO VIENE DIVISO PER 10 PER SPOSTARSI ALLA CIFRA PRECEDENTE
    
        //A FINE CICLO DOVREMMO AVER RECUPERATO TUTTI E 4 I NUMERI
    }
    
    // STAMPARE RISULTATO SU CONSOLE
    
    
    console.log("La somma delle cifre del numero è:", sommaCifre);
}
