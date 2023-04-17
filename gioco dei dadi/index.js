function randomFunction() { // funzione per il tiro di dado
    const randomPC = Math.floor(Math.random() * 6) + 1;
    const randomUtente = Math.floor(Math.random() * 6) + 1;

    if (randomPC > randomUtente) {
        document.getElementById("random_game").innerHTML = `<span id="banco_vince">Ha vinto il banco</span>`;
    } else {
        document.getElementById("random_game").innerHTML = `<span id="utente_vince">Ha vinto il giocatore</span>`;
    }

    document.getElementById("span_utente").innerHTML = "Il tuo numero è:";
    document.getElementById("span_utente_numero").innerHTML = randomUtente;
    document.getElementById("span_pc").innerHTML = "Il numero del banco è:";
    document.getElementById("span_pc_numero").innerHTML = randomPC;
}