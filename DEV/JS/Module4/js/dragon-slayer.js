'use strict'; // Mode strict du JavaScript
/* global getRandomInteger */
/* global requestInteger */
/* global showImage */
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
// L'unique variable globale est un objet contenant l'état du jeu.
var game;
const LEVEL_EASY = 1;
const LEVEL_NORMAL = 2;
const LEVEL_HARD = 3;
const WEAPON_ONE = 1;
const WEAPON_TWO = 2;
const WEAPON_THREE = 3;
const ARMOR_COPPER = 1;
const ARMOR_IRON = 2;
const ARMOR_LEGENDARY = 3;
/*****************************************************************************/
/******************************* FONCTIONS JEU *****************************/
/*************************************************************************************************/
function initGame() {
    game = {}; //new Object();
    // choix du niveau
    game.level = requestInteger('Choisissez le niveau de difficulté : 1. Débutant - 2.intermédiaire - 3.expert');
    switch (game.level) {
    case 1:
        // débutant
        game.dragonHP = getRandomInteger(150, 200);
        game.playerHP = getRandomInteger(200, 250);
        break;
    case 2:
        // intermédiaire
        game.dragonHP = getRandomInteger(200, 250);
        game.playerHP = getRandomInteger(200, 250);
        break;
    case 3:
        // expert
        game.dragonHP = getRandomInteger(200, 250);
        game.playerHP = getRandomInteger(150, 200);
        break;
    }
    // choix des armes
    game.armor = requestInteger('Armure : 1.Caleçon  - 2.Cotte de mailles - 3. Armure légendaire');
    switch (game.armor) {
    case 1:
        // Caleçon
        game.armorRatio = 1;
        break;
    case 2:
        // Cotte de mailles
        game.armorRatio = 1.25;
        break;
    case 3:
        // Armure légendaire
        game.armorRatio = 2;
        break;
    }
    // choix de l'armure
    game.weapon = requestInteger('Arme : 1. Poireau - 2.Epée - 3.Mjölnir');
    switch (game.weapon) {
    case 1:
        // Poireau
        game.weaponRatio = 0.5;
        break;
    case 2:
        // Epée
        game.weaponRatio = 1;
        break;
    case 3:
        // Mjölnir
        game.weaponRatio = 2;
        break;
    }
}

function computeDragonDamagePoint() {
    var damagePoint;
    if (game.difficulty == LEVEL_EASY) {
        // Le dragon inflige moins de dÃ©gÃ¢ts si le niveau de difficultÃ© est facile.
        damagePoint = getRandomInteger(10, 20);
    }
    else {
        damagePoint = getRandomInteger(30, 40);
    }
    // Calcul du rÃ©sultat final en fonction de l'armure du joueur.
    return Math.round(damagePoint / game.armorRatio);
}

function computePlayerDamagePoint() {
    var damagePoint;
    // Les dÃ©gÃ¢ts infligÃ©s par le joueur varient selon la difficultÃ© du jeu.
    switch (game.difficulty) {
    case LEVEL_EASY:
        damagePoint = getRandomInteger(25, 30);
        break;
    case LEVEL_NORMAL:
        damagePoint = getRandomInteger(15, 20);
        break;
    case LEVEL_HARD:
        damagePoint = getRandomInteger(5, 10);
        break;
    }
    // Calcul du rÃ©sultat final en fonction de l'Ã©pÃ©e du joueur.
    return Math.round(damagePoint * game.swordRatio);
}

function gameLoop() {
    var damagePoint;
    var dragonSpeed;
    var playerSpeed;
    // Le jeu s'exÃ©cute tant que le dragon et le joueur sont vivants.
    while (game.dragonHP > 0 && game.playerHP > 0) {
        console.log('Tour numÃ©ro ' + game.round);
        // DÃ©termination de la vitesse du dragon et du joueur.
        dragonSpeed = getRandomInteger(10, 20);
        playerSpeed = getRandomInteger(10, 20);
        // Est-ce que le dragon est plus rapide que le joueur ?
        if (dragonSpeed > playerSpeed) {
            // Oui, le joueur se prend des dÃ©gÃ¢ts et perd des points de vie.
            damagePoint = computeDragonDamagePoint();
            // Diminution des points de vie du joueur.
            game.hpPlayer -= damagePoint;
            // Identique Ã  game.hpPlayer = game.hpPlayer - damagePoint;
            console.log('Le dragon est plus rapide et vous brÃ»le, il vous enlÃ¨ve ' + damagePoint + ' PV');
        }
        else {
            // Non, le dragon se prend des dÃ©gÃ¢ts et perd des points de vie.
            damagePoint = computePlayerDamagePoint();
            // Diminution des points de vie du dragon.
            game.hpDragon -= damagePoint;
            // Identique Ã  game.hpDragon = game.hpDragon - damagePoint;
            console.log('Vous Ãªtes plus rapide et frappez le dragon, vous lui enlevez ' + damagePoint + ' PV');
        }
        showGameState();
        // On passe au tour suivant.
        game.round++;
    }
}

function showGameStates() {
    // Affichage des stats en fonction des choix utilisateur qui ont étés validés
    console.log('Points de vie de départ :' + game.playerHP);
    console.log('Joueur : ' + game.playerHP + ' PV,' + 'Dragon : ' + game.dragonHP + ' PV')
}

function showGameWinner() {
    if (game.dragonHP <= 0) {
        showImage('images/knight.gif');
        console.log("Vous avez vaincu le dragon !");
        console.log("Il vous restait " + game.playerHP + " PV");
    }
    else // if(game.playerHP <= 0)
    {
        showImage('images/dragon.gif');
        console.log("Le dragon a gagné, vous avez été carbonisé !");
        console.log("Il restait " + game.dragonHP + " PV au dragon");
    }
}

function startGame() {
    // Initialisation du jeu.
    console.clear();
    initGame();
    // ExÃ©cution du jeu.
    showGameStates();
    // Fin du jeu.
    showGameWinner();
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/