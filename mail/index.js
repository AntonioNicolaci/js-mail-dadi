// array che contiene tutte le email presenti nel sistema.
const database_email = ["carlocalenda69@parlamento.it", "stefanolavori@mela.com", "angeloporetti@luppolo.it", "hideokojima@kojimaproduction.jp", "giorgiomuratore@gmail.com", "francescofrattali@gmail.com", "antonionicolaci48@gmail.com", "milesmorales@nycollege.com", "wolfeyglickvgc@gmail.com", "paperellagialla@coding.com", "Gabriponte@siae.it", "superman@dc.com", "ironman@stark.com", "howardwolowitz@sinagogapasadena.com", "eugenio@twitch.com", "elonmusk@ceotwetter.com", "bellanapoli@gmail.com", "easter@egg.com", "sonostanco@capo.it"];

function popUpEmail(){ // funzione per far comparire le email per una lettura più facile dell'esercizio
    document.getElementById("p_email").innerHTML = 
    `<span>carlocalenda69@parlamento.it</span>
    <span>stefanolavori@mela.com</span>
    <span>angeloporetti@luppolo.it</span>
    <span>hideokojima@kojimaproduction.jp</span>
    <span>giorgiomuratore@gmail.com</span>
    <span>francescofrattali@gmail.com</span>
    <span>antonionicolaci48@gmail.com</span>
    <span>milesmorales@nycollege.com</span>
    <span>wolfeyglickvgc@gmail.com</span>
    <span>paperellagialla@coding.com</span>
    <span>Gabriponte@siae.it</span>
    <span>superman@dc.com</span>
    <span>ironman@stark.com</span>
    <span>howardwolowitz@sinagogapasadena.com</span>
    <span>eugenio@twitch.com</span>
    <span>elonmusk@ceotwetter.com</span>
    <span>bellanapoli@gmail.com</span>
    <span>easter@egg.com</span>
    <span>sonostanco@capo.it</span>
    <button onclick="popDownEmail()" style="margin-bottom: 2em">Cliccami per farle scomparire</button>`
}

function popDownEmail(){ // funzione per far scomparire le email
    document.getElementById("p_email").innerHTML = "";
}

function emailFunction() { // funzione che controlla se l'email è presente nel sistema
    const email = document.getElementById("email").value; // prende il valore del campo nella pagina web che corrisponde all'email.
    let controllo_email = true; // se questa variabile diventa falsa attiverà un if che specifica che questa email non è presente nel database.

    for (let i = 0; database_email.length > i; i++) { // questo ciclo for contine un BREAK, che si attiva se l'email inserita è nel database
        if (database_email[i] == email) {
            document.getElementById("email_result").innerHTML = `<span id="email_giusta">Email nella lista, accesso a breve... forse</span>`;
            controllo_email = true; // Se l'email non è presente il programma non entrerà mai qui dentro e la variabile non diventerà mai falsa
            break;
        } else {
            controllo_email = false; // Se l'email non è presente questa variabile sarà sempre falsa e attiverà l'if subito sotto
        }

        if (controllo_email == false) { // entrare dentro questo if comporta che non c'erano email corrispondenti
            document.getElementById("email_result").innerHTML = `<span id="email_sbagliata">Email non presente nella lista</span>`;
        }
    }
}
