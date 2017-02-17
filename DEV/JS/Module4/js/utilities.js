'use strict'; // Mode strict du JavaScript
/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function requestInteger(message, min, max) {
    var int;
    do {
        int = parseInt(window.prompt(message));
    }
    while (isNaN(int) == true || int < min || int > max);
    return int;
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showImage(source) {
    document.write('<img src="' + source + '">');
}