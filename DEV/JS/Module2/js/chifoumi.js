'use strict';
var random;
var joueur;
var coup;
var min;
var max;
var message;
min = 0;
max = 2;
coup = new Array();
coup[0] = "Pierre";
coup[1] = "Feuille";
coup[2] = "Ciseaux";
    joueur = window.prompt("Saisissez votre coup", 0);
    joueur = joueur.toLowerCase().trim();
    random = Math.floor(Math.random() * (max - min + 1) + min);
    coup[random] = coup[random].toLowerCase().trim();
    if (joueur == coup[random]) {
        message = "Egalité";
    }
    else {
        switch (coup[random]) {
        case "pierre":
            if (joueur === "feuille") {
                message = "Bravo ! Tu as gagné !";
            }
            else {
                message = "Oh le nul ! Tu as perdu contre un bot !!!";
            }
            break;
        case "feuille":
            if (joueur === "pierre") {
                message = "Oh le nul ! Tu as perdu contre un bot !!!";
            }
            else {
                message = "Bravo ! Tu as gagné !";
            }
            break;
        case "ciseaux":
            if (joueur === "pierre") {
                message = "Bravo ! Tu as gagné";
            }
            else {
                message = "Oh le nul ! Tu as perdu contre un bot !!";
            }
            break;
        }
    }
    document.write("<p>" + message + "</p>")
    document.write("<p> Tu as joué : " + joueur + "</p>");
    document.write("<p> Ton aversaire a joué : " + coup[random] + "</p>");
