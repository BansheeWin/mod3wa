'use strict';

var first;
var second;
var result;
var operation;

operation = window.prompt("Quelle opération voulez-vous effectuer ?", "addition");
first = parseInt(window.prompt("Valeur du premier chiffre ?", 0));
second = parseInt(window.prompt("Valeur du second chiffre ?", 0));

switch (operation) {
    case "addition":
        result = first + second;
        break;
    case "soustraction":
        result = first - second;
        break;
    case "multiplication":
        result = first * second;
        break;
    case "division":
        result = first / second;
        break;
    default:

}


document.write("<p>Choix de l'opération : " + operation + "</p>");
document.write("<p>Vous calculez : " + first + " avec " + second + "</p>");
document.write("<p>Le total de votre opération est de : " + result + "</p>");
