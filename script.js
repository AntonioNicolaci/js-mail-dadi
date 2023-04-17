const database_email = ["carlocalenda69@parlamento.it", "stefanolavori@mela.com", "angeloporetti@luppolo.it", "hideokojima@kojimaproduction.jp", "giorgiomuratore@gmail.com", "francescofrattali@gmail.com", "antonionicolaci48@gmail.com", "milesmorales@nycollege.com", "wolfeyglickvgc@gmail.com", "paperellagialla@coding.com", "Gabriponte@siae.it", "superman@dc.com", "ironman@stark.com", "howardwolowitz@sinagogapasadena.com", "eugenio@twitch.com", "elonmusk@ceotwetter.com", "bellanapoli@gmail.com", "easter@egg.com", "sonostanco@capo.it"];

function emailFunction() {
    const email = document.getElementById("email").value;
    let controllo_email = true;
    for (let i = 0; [database_email.length - 1] > i; i++) {
        if (database_email[i] == email) {
            document.getElementById("email_result").innerHTML = "Email nella lista, accesso a breve... forse";
            break;
        } else {
            controllo_email = false;
        }

        if (controllo_email == false) {
            document.getElementById("email_result").innerHTML = "Email non presente nella lista"
        }
    }
}

function randomFunction() {
    const randomPC = Math.floor(Math.random() * 6) + 1;
    const randomUtente = Math.floor(Math.random() * 6) + 1;

    if (randomPC > randomUtente) {
        document.getElementById("random_game").innerHTML = "Ha vinto il banco";
    } else {
        document.getElementById("random_game").innerHTML = "Ha vinto il giocatore";
    }
}
