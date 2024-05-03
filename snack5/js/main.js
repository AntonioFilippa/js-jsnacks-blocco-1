"use strict";
console.log("ci sono");





// Array vuoto per memorizzare i numeri dispari


let numeriDispari = [];


// Richiedere 6 numeri all'utente

for (let i = 0; i < 6; i++) {

     
    let numeroInserito = prompt(`Inserisci il ${i + 1}° numero: `);


    // Controllare se il numero è dispari e inserirlo nell'array


   if (numeroInserito % 2 !== 0) {

        numeriDispari.push(numeroInserito);

        console.log(`Numero dispari inserito: ${numeroInserito}`);

    } 
    else if (numeroInserito % 2 === 0)
    
    {

        console.log(`Numero ${numeroInserito} pari , ignorato.`);
}
   //CONTROLLO SE L'UTENTE INVIA NULL O CHIUDE IL PROMPT
if (numeroInserito === null) {
          
            
    console.error("Errore: Nessun valore inserito.");
i--;
}

//CONTROLLO SE UTENTE INSERISCE VALORI NON NUMERICI


if (isNaN(numeroInserito)) {
   console.error("Errore: Inserisci un numero valido.");
    i--;

}

}



//controllo se il valore inserito è null
    
// Stampare l'array dei numeri dispari

console.log("Array dei numeri dispari:");

console.log(numeriDispari);