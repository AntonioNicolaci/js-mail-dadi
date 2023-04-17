// array che contiene tutte le email presenti nel sistema.
const database_email = ["carlocalenda69@parlamento.it", "stefanolavori@mela.com", "angeloporetti@luppolo.it", "hideokojima@kojimaproduction.jp", "giorgiomuratore@gmail.com", "francescofrattali@gmail.com", "antonionicolaci48@gmail.com", "milesmorales@nycollege.com", "wolfeyglickvgc@gmail.com", "paperellagialla@coding.com", "Gabriponte@siae.it", "superman@dc.com", "ironman@stark.com", "howardwolowitz@sinagogapasadena.com", "eugenio@twitch.com", "elonmusk@ceotwetter.com", "bellanapoli@gmail.com", "easter@egg.com", "sonostanco@capo.it"];

function popUpEmail(){
    document.getElementById("p_email").innerHTML = `<p>"carlocalenda69@parlamento.it", "stefanolavori@mela.com", "angeloporetti@luppolo.it", "hideokojima@kojimaproduction.jp", "giorgiomuratore@gmail.com", "francescofrattali@gmail.com", "antonionicolaci48@gmail.com", "milesmorales@nycollege.com", "wolfeyglickvgc@gmail.com", "paperellagialla@coding.com", "Gabriponte@siae.it", "superman@dc.com", "ironman@stark.com", "howardwolowitz@sinagogapasadena.com", "eugenio@twitch.com", "elonmusk@ceotwetter.com", "bellanapoli@gmail.com", "easter@egg.com", "sonostanco@capo.it"</p>
    <button onclick="popDownEmail()" style="margin-bottom: 2em">Cliccami per farle scomparire</button>`
}

function popDownEmail(){
    document.getElementById("p_email").innerHTML = "";
}

function emailFunction() { // funzione che controlla se l'email è presente nel sistema
    const email = document.getElementById("email").value; // prende il valore del campo nella pagina web che corrisponde all'email.
    let controllo_email = true; // se questa variabile diventa falsa attiverà un if che specifica che questa email non è presente nel database.

    for (let i = 0; [database_email.length - 1] > i; i++) { // questo ciclo for contine un BREAK, che si attiva se l'email inserita è nel database
        if (database_email[i] == email) {
            document.getElementById("email_result").innerHTML = "Email nella lista, accesso a breve... forse";
            controllo_email = true; // Se l'email non è presente il programma non entrerà mai qui dentro e la variabile non diventerà mai falsa
            break;
        } else {
            controllo_email = false; // Se l'email non è presente questa variabile sarà sempre falsa e attiverà l'if subito sotto
        }

        if (controllo_email == false) { // entrare dentro questo if comporta che non c'erano email corrispondenti
            document.getElementById("email_result").innerHTML = "Email non presente nella lista"
        }
    }
}

function randomFunction() { // funzione per il tiro di dado
    const randomPC = Math.floor(Math.random() * 6) + 1;
    const randomUtente = Math.floor(Math.random() * 6) + 1;

    if (randomPC > randomUtente) {
        document.getElementById("random_game").innerHTML = "Ha vinto il banco";
    } else {
        document.getElementById("random_game").innerHTML = "Ha vinto il giocatore";
    }
}
