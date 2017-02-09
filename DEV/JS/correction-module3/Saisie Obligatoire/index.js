'use strict';   // Mode strict du JavaScript

// Déclaration d'une variable.
var number;


/*
 * La boucle doit au moins s'exécuter une fois pour que la comparaison puisse s'effectuer, il faut
 * donc utiliser un DO ... WHILE.
 */
do
{
    number = parseFloat(window.prompt('Veuillez saisir un nombre :'));
}
while(isNaN(number) == true);

document.write('<p>Merci, vous avez saisi <strong>' + number + '</strong>.</p>');