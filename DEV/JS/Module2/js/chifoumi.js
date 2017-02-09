'use strict';
var random;
var joueur;
var coup;
var min;
var max;
var message;
var computer;
min = 0;
max = 2;
/*coup = new Array();
coup[0] = "Pierre";
coup[1] = "Feuille";
coup[2] = "Ciseaux";*/
//random = Math.floor(Math.random() * (max - min + 1) + min);
//coup[random] = coup[random].toLowerCase().trim();
joueur = window.prompt("Saisissez votre coup", 0);
joueur = joueur.toLowerCase().trim();
random = Math.random();

if (random <= 0.33) {
    computer = 'rock';
}
else if (random <= 0.66) {
    computer = 'paper';
}
else {
    computer = 'scissors';
}
if (joueur == computer) {
    message = "Egalité";
    joueur = joueur + " <i class='fa fa-hand-" + joueur + "-o' aria-hidden='true'></i>";
    computer = computer + " <i class='fa fa-hand-" + computer + "-o' aria-hidden='true'></i>";
}
else {
    switch (computer) {
    case "rock":
        if (joueur == "paper") {
            message = "Bravo ! Tu as gagné !";
            joueur = joueur + " <i class='fa fa-hand-paper-o' aria-hidden='true'></i>";
            computer = computer + " <i class='fa fa-hand-rock-o' aria-hidden='true'></i>";
        }
        else {
            message = "Oh le nul ! Tu as perdu contre un bot !!!";
            joueur = joueur + " <i class='fa fa-hand-scissors-o' aria-hidden='true'></i>";
            computer = computer + " <i class='fa fa-hand-rock-o' aria-hidden='true'></i>";
        }
        break;
    case "paper":
        if (joueur == "scissors") {
            message = "Bravo ! Tu as gagné !";
            joueur = joueur + " <i class='fa fa-hand-scissors-o' aria-hidden='true'></i>";
            computer = computer + " <i class='fa fa-hand-paper-o' aria-hidden='true'></i>";
        }
        else {
            message = "Oh le nul ! Tu as perdu contre un bot !!!";
            joueur = joueur + " <i class='fa fa-hand-rock-o' aria-hidden='true'></i>";
            computer = computer + " <i class='fa fa-hand-paper-o' aria-hidden='true'></i>";
        }
        break;
    case "scissors":
        if (joueur == "rock") {
            message = "Bravo ! Tu as gagné";
            joueur = joueur + " <i class='fa fa-hand-rock-o' aria-hidden='true'></i>";
            computer = computer + " <i class='fa fa-hand-scissors-o' aria-hidden='true'></i>";
        }
        else {
            message = "Oh le nul ! Tu as perdu contre un bot !!";
            joueur = joueur + " <i class='fa fa-hand-paper-o' aria-hidden='true'></i>";
            computer = computer + " <i class='fa fa-hand-scissors-o' aria-hidden='true'></i>";
        }
        break;
    }
}
document.write("<p>" + message + "</p>")
document.write("<p> Tu as joué : " + joueur + "</p>");
document.write("<p> Ton aversaire a joué : " + computer + "</p>");