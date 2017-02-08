'use strict';
var first;
var second;
var result;
var operation;
operation = 0;
while (!isNaN(operation)) {
    operation = window.prompt("Quelle opération voulez-vous effectuer ?", 0);
}
while (isNaN(first) && isNaN(second)) {
    first = parseFloat(window.prompt("Valeur du premier chiffre ?", 0));
    second = parseFloat(window.prompt("Valeur du second chiffre ?", 0));
}
switch (operation.toLowerCase().trim()) {
case "+":
case "addition":
    result = first + second;
    break;
case "-":
case "soustraction":
    result = first - second;
    break;
case "*":
case "multiplication":
    result = first * second;
    break;
case "/":
case "division":
    if (second != 0) {
        result = first / second;
        break;
    }
    else {
        result = 0;
        document.write("<p>On ne peut pas diviser par 0</p>");
    }
default:
    operation = "Erreur dans le choix"
    first = 0;
    second = 0;
    result = 0;
    break;
}
document.write("<p>Choix de l'opération : " + operation + "</p>");
document.write("<p>Vous calculez : " + first + " avec " + second + "</p>");
document.write("<p>Le total de votre opération est de : " + result + "</p>");