'use strict';
var saisie;
while (isNaN(saisie)) {
    saisie = parseFloat(window.prompt("Saisissez un nombre", 0));
}
document.write("<p>Vous avez saisi : " + saisie + ".</p>");