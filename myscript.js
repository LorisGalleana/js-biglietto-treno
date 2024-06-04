//chiedi numero di chilometri da percorrere
let numberKm = prompt("Inserisci numero di chilometri da percorrere");
//dichiara età
let customerAge = prompt("Inserisci età passeggero")
//prezzo al chilometro = 0.21€
let priceKm = 0.21;
// calcolo corsa
let baseTicketPrice = numberKm*priceKm
//sconto 20% per i minorenni
let discountMinor = 0.2;
//sconto 40% per gli over 65
let discountOver65 = 0.4;

//calcolo prezzo biglietto = (chilometri * 0.21€) - sconto arrotondato a due decimali
let finalTicketPrice;
//se ha meno di 18 anni il biglietto costa
if (customerAge < 18) {
    finalTicketPrice = Math.round((((baseTicketPrice)-((baseTicketPrice)*discountMinor)) + Number.EPSILON) * 100) / 100;
    console.log(finalTicketPrice);
} 
//se ha più di 65 anni il biglietto costa
else if (customerAge > 65) {
    finalTicketPrice = Math.round((((baseTicketPrice)-((baseTicketPrice)*discountOver65)) + Number.EPSILON) * 100) / 100;
    console.log(finalTicketPrice);
} 
//se ha un età compresa tra i 18 e i 65 anni il biglietto costa
else {
    finalTicketPrice = Math.round((baseTicketPrice + Number.EPSILON) * 100) / 100;
    console.log(finalTicketPrice);
}

//scrivi prezzo nella pagina
document.getElementById("ticketprice").innerHTML = "Il prezzo del tuo biglietto è: " + finalTicketPrice + "€";