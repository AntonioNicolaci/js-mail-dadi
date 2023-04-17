function randomFunction() { // funzione per il tiro di dado
    const randomPC = Math.floor(Math.random() * 6) + 1;
    const randomUtente = Math.floor(Math.random() * 6) + 1;

    if (randomPC > randomUtente) {
        document.getElementById("random_game").innerHTML = "Ha vinto il banco";
    } else {
        document.getElementById("random_game").innerHTML = "Ha vinto il giocatore";
    }
}