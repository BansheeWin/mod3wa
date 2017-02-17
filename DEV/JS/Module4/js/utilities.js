'use strict'; // Mode strict du JavaScript
/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function requestInteger(message) {
    var number = window.prompt(message);
    return number;
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}