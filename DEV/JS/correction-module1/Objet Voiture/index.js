'use strict';   // Mode strict du JavaScript

// Déclaration d'une variable.
var myCar;


// Affectation d'un objet vide à la variable.
myCar = new Object();       // syntaxe longue.

// La syntaxe raccourcie est : myCar = {};


// Création de propriétés dans l'objet.
myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;

/*
 * Les lignes de code ci-dessus peuvent également être écrites comme ceci :
 *
 * myCar =
 * {
 *     brand      : 'Alfa Roméo',
 *     buyDate    : new Date('2013-06-20'),
 *     passengers : [ 'Nicolas', 'Charlotte' ],
 *     year       : 2012
 * };
 */


// Affichage du contenu de l'objet directement dans la page HTML.
document.write('<strong>Informations sur la voiture :</strong>');
document.write('<ul>');

document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');

/*
 * Utilisation de la méthode toDateString() des objets de la classe Date
 * afin d'obtenir une chaîne de caractères avec une date lisible.
 */
document.write("<li>Date de l'achat : " + myCar.buyDate.toDateString() + '</li>');

// myCar est un objet qui contient une propriété buyDate qui est un objet de la classe Date.

document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');

// myCar est un objet qui contient une propriété passengers qui est un tableau.

document.write('</ul>');