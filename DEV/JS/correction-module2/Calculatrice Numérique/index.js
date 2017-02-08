'use strict';   // Mode strict du JavaScript

// Déclaration de quatre variables.
var number1;
var number2;
var operation;
var result;


// Récupération des deux nombres et de l'opération mathématique à effectuer.
number1   = parseFloat(window.prompt('Saisissez un premier nombre :'));
number2   = parseFloat(window.prompt('Saisissez un deuxième nombre :'));
operation = window.prompt('Quelle opération mathématique souhaitez-vous effectuer ?');


// Exécution de la calculatrice.
switch(operation)
{
    case '+':
    case 'addition':
    result = number1 + number2;
    break;

    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;

    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;

    case '/':
    case 'division':
    { // On peut utiliser des accolades pour écrire le code d'un case d'un switch.

        if(number2 == 0)
        {
            document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');

            // Le fait de placer un break ici permet de sortir IMMEDIATEMENT du switch.
            break;
        }

        result = number1 / number2;
    }
    break;

    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;
}


/*
 * Si l'utilisateur a saisi autre chose qu'un nombre dans les variables number1 ou number2 alors
 * les fonctions parseFloat() renvoient la valeur spéciale NaN.
 *
 * Du coup la variable result vaudra forcément NaN également !
 */
if(isNaN(result) == true)
{
    document.write("<p>Vous n'avez pas saisi deux nombres !</p>");

    // La variable result est maintenant indéfinie.
    result = undefined;
}


/*
 * Il faut afficher le résultat de l'opération uniquement s'il n'y a PAS eu d'erreur !
 *
 * Les erreurs possibles sont :
 * 1. L'utilisateur a voulu effectuer une division par zéro (ligne 38).
 * 2. L'opération demandée est inconnue (ligne 51).
 * 3. L'un des deux nombres saisis n'est pas réellement un nombre (ligne 62)
 *
 * Lorsqu'une erreur se produit la variable result vaut undefined, il faut donc tester
 * cette valeur pour détecter qu'une erreur s'est produite.
 */
if(result != undefined)
{
    document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}