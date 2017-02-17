'use strict'; // Mode strict du JavaScript
/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomInteger(min, max) {
    // Renvoie un nombre entier alÃ©atoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function requestInteger(message, min, max) {
    var integer;
    /*
     * La boucle s'exÃ©cute tant que l'entier n'est pas un nombre (fonction isNaN()) et
     * n'est pas compris entre les arguments min et max.
     */
    do {
        // On demande Ã  l'utilisateur de saisir un nombre entier.
        integer = parseInt(window.prompt(message));
    }
    while (isNaN(integer) == true || integer < min || integer > max);
    return integer;
}

function showImage(source) {
    document.write('<img src="' + source + '">');
}