'use strict'; // Mode strict du JavaScript
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
// L'unique variable globale est un objet contenant l'état du jeu.
var game;
/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
function initGame() {
    var niveau;
    var armure;
    var sabre;
    game = {}; //new Object();
    // choix du niveau
    var niveau = window.prompt('Choisissez le niveau de difficulté : 1. Débutant - 2.intermédiaire - 3.expert');
    switch (niveau) {
    case 1:
        // débutant
        game.pvDragon = getRandomInteger(150, 200);
        game.pvJoueur = getRandomInteger(200, 250);
        break;
    case 2:
        // intermédiaire
        game.pvDragon = getRandomInteger(200, 250);
        game.pvJoueur = getRandomInteger(200, 250);
        break;
    case 3:
        // expert
        game.pvDragon = getRandomInteger(200, 250);
        game.pvJoueur = getRandomInteger(150, 200);
        break;
    default
    // je ne connais pas ce niveau
    }
    // choix des armes
    // choix de l'armure
    // définir les pdv
}

function showGameWinner() {
    if (pvDragon < pvJoueur) {
        // blablabla
    }
}

function startGame() {
    // Initialisation du jeu.
    initGame();
    // Affichage des stats en fonction des choix
    // Exécution du jeu.
    // Fin du jeu
    showGameWinner();
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
startGame();