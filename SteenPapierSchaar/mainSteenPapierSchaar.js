let beurtTeller = 0;
let scoreSpeler = 0;
let scoreComputer = 0;
let winnaarRondeSpeler = "Speler";
let winnaarRondeComputer = "Computer";
let winnaarRonde = "";
let winnaarBesteUit = "";

function paginaRefreshen() {
    window.location.reload();
}

function speelSteenPapierSchaar() {

    // Als er opnieuw wordt gespeeld, dan wordt de pagina opnieuw opgeroepen.
    if (scoreSpeler == 2 || scoreComputer == 2) {
        document.getElementById('speelButton').onclick = paginaRefreshen();
        return;
    }

    // Keuze van de speler wordt bepaald.
    if (document.getElementById('keuzeSteen').checked) {
        spelersKeuze = document.getElementById('keuzeSteen').value;
        document.getElementById('afbeeldingKeuzeSpeler').src = "Images/Steen.png";
    } else if (document.getElementById('keuzePapier').checked) {
        spelersKeuze = document.getElementById('keuzePapier').value;
        document.getElementById('afbeeldingKeuzeSpeler').src = "Images/Papier.png";
    } else if (document.getElementById('keuzeSchaar').checked) {
        spelersKeuze = document.getElementById('keuzeSchaar').value;
        document.getElementById('afbeeldingKeuzeSpeler').src = "Images/Schaar.png";
    } else {
        spelersKeuze = undefined;
        return;
    }

    // Keuze van de computer wordt bepaald.
    let willekeurigGetal = Math.ceil(Math.random() * 3);
    if (willekeurigGetal == 1) {
        computersKeuze = 'steen';
        document.getElementById('afbeeldingKeuzeComputer').src = "Images/SteenC.png";
    } else if (willekeurigGetal == 2) {
        computersKeuze = 'papier';
        document.getElementById('afbeeldingKeuzeComputer').src = "Images/PapierC.png";
    } else {
        computersKeuze = 'schaar';
        document.getElementById('afbeeldingKeuzeComputer').src = "Images/SchaarC.png";
    }


    // Uitslag steen-papier-schaar wordt bepaald.
    if (computersKeuze == spelersKeuze) {
        winnaarRonde = "Gelijkspel!";
        document.getElementById('winnaarKroonSpeler').src = "Images/KroonWinnaar1Leeg.png";
        document.getElementById('winnaarKroonComputer').src = "Images/KroonWinnaar1Leeg.png";
    } else if (spelersKeuze == 'steen' && computersKeuze == 'schaar') {
        scoreSpeler++;
        winnaarRonde = winnaarRondeSpeler;
        document.getElementById('winnaarKroonSpeler').src = "Images/KroonWinnaar1.png";
        document.getElementById('winnaarKroonComputer').src = "Images/KroonWinnaar1Leeg.png";
    } else if (spelersKeuze == 'schaar' && computersKeuze == 'papier') {
        scoreSpeler++;
        winnaarRonde = winnaarRondeSpeler;
        document.getElementById('winnaarKroonSpeler').src = "Images/KroonWinnaar1.png";
        document.getElementById('winnaarKroonComputer').src = "Images/KroonWinnaar1Leeg.png";
    } else if (spelersKeuze == 'papier' && computersKeuze == 'steen') {
        scoreSpeler++;
        winnaarRonde = winnaarRondeSpeler;
        document.getElementById('winnaarKroonSpeler').src = "Images/KroonWinnaar1.png";
        document.getElementById('winnaarKroonComputer').src = "Images/KroonWinnaar1Leeg.png";
    } else  if (computersKeuze == 'steen' && spelersKeuze == 'schaar') {
        scoreComputer++;
        winnaarRonde = winnaarRondeComputer;
        document.getElementById('winnaarKroonComputer').src = "Images/KroonWinnaar1.png";
        document.getElementById('winnaarKroonSpeler').src = "Images/KroonWinnaar1Leeg.png";
    } else if (computersKeuze == 'schaar' && spelersKeuze == 'papier') {
        scoreComputer++;
        winnaarRonde = winnaarRondeComputer;
        document.getElementById('winnaarKroonComputer').src = "Images/KroonWinnaar1.png";
        document.getElementById('winnaarKroonSpeler').src = "Images/KroonWinnaar1Leeg.png";
    } else if (computersKeuze == 'papier' && spelersKeuze == 'steen') {
        scoreComputer++;
        winnaarRonde = winnaarRondeComputer;
        document.getElementById('winnaarKroonComputer').src = "Images/KroonWinnaar1.png";
        document.getElementById('winnaarKroonSpeler').src = "Images/KroonWinnaar1Leeg.png";
    } else {
        document.getElementById('winnaarKroon').src = "Images/KroonWinnaar1Leeg.png";
    }

    // Winnaar beste uit drie wordt bepaald.
    if (scoreSpeler == 2) {
        winnaarBesteUit = "Speler";
    }
    if (scoreComputer == 2) {
        winnaarBesteUit = "Computer";
    }

    // De speler of de computer behaalt een score van 2, de speel knop wordt omgezet in een opnieuw knop.
    if (scoreSpeler == 2 || scoreComputer == 2) {
        document.getElementById('speelButton').value = "Opnieuw!";
        document.getElementById('speelButton').style = "background-color: red;";
    }

    // Gecheckte radio inputs worden ongecheckd.
    if (document.getElementById('keuzeSteen').checked) {
        document.getElementById('keuzeSteen').checked = false;
    } else if (document.getElementById('keuzePapier').checked) {
        document.getElementById('keuzePapier').checked = false;
    } else if (document.getElementById('keuzeSchaar').checked) {
        document.getElementById('keuzeSchaar').checked = false;
    }

    beurtTeller = ++beurtTeller;

    document.getElementById('keuzeSpeler').innerHTML = spelersKeuze;
    document.getElementById('keuzeComputer').innerHTML = computersKeuze;
    document.getElementById('winnaarBesteUit').innerHTML = winnaarBesteUit;
    document.getElementById('uitslagScoreSpeler').innerHTML = scoreSpeler;
    document.getElementById('uitslagScoreComputer').innerHTML = scoreComputer;
    document.getElementById('beurtenTeller').innerHTML = beurtTeller;
}
