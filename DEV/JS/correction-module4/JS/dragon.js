'use strict'; // Mode strict du JavaScript
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
// L'unique variable globale est un objet contenant l'Ã©tat du jeu.
var game;
// DÃ©claration des constantes du jeu, rend le code plus comprÃ©hensible.
const ARMOR_COPPER = 1;
const ARMOR_IRON = 2;
const ARMOR_MAGICAL = 3;
const LEVEL_EASY = 1;
const LEVEL_NORMAL = 2;
const LEVEL_HARD = 3;
const SWORD_WOOD = 1;
const SWORD_STEEL = 2;
const SWORD_EXCALIBUR = 3;
/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
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
    while (game.hpDragon > 0 && game.hpPlayer > 0) {
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

function initializeGame() {
    // Initialisation de la variable globale du jeu.
    game = new Object();
    game.round = 1;
    game.difficulty = requestInteger('Niveau de difficultÃ© ?\n' + '1. Facile - 2. Normal - 3. Difficile', 1, 3);
    /*
     * DÃ©termination des points de vie de dÃ©part du joueur et du dragon selon
     * le niveau de difficultÃ©.
     */
    switch (game.difficulty) {
    case LEVEL_EASY:
        game.hpDragon = getRandomInteger(150, 200);
        game.hpPlayer = getRandomInteger(200, 250);
        break;
    case LEVEL_NORMAL:
        game.hpDragon = getRandomInteger(200, 250);
        game.hpPlayer = getRandomInteger(200, 250);
        break;
    case LEVEL_HARD:
        game.hpDragon = getRandomInteger(200, 250);
        game.hpPlayer = getRandomInteger(150, 200);
        break;
    }
    game.armor = requestInteger('Armure ?\n' + '1. Cuivre - 2. Fer - 3. Magique', 1, 3);
    game.sword = requestInteger('EpÃ©e ?\n' + '1. Bois - 2. Acier - 3. Excalibur', 1, 3);
    switch (game.armor) {
        // Une armure en cuivre protÃ¨ge normalement.
    case ARMOR_COPPER:
        game.armorRatio = 1;
        break;
        // Une armure en fer diminue un peu les dÃ©gÃ¢ts infligÃ©s.
    case ARMOR_IRON:
        game.armorRatio = 1.25;
        break;
        // Une armure magique divise par deux les dÃ©gÃ¢ts infligÃ©s.
    case ARMOR_MAGICAL:
        game.armorRatio = 2;
        break;
    }
    switch (game.sword) {
        // Une Ã©pÃ©e en bois nÃ©cessite deux fois plus de dÃ©gÃ¢ts que la normale.
    case SWORD_WOOD:
        game.swordRatio = 0.5;
        break;
        // Une Ã©pÃ©e en acier inflige des dÃ©gÃ¢ts normaux.
    case SWORD_STEEL:
        game.swordRatio = 1;
        break;
        // L'Ã©pÃ©e lÃ©gendaire inflige le double de dÃ©gÃ¢ts.
    case SWORD_EXCALIBUR:
        game.swordRatio = 2;
        break;
    }
}

function showGameState() {
    console.log('Dragon : ' + game.hpDragon + ' PV, ' + 'joueur : ' + game.hpPlayer + ' PV');
}

function showGameWinner() {
    if (game.hpDragon <= 0) {
        showImage('images/knight.jpg');
        console.log("Vous avez gagnÃ©, vous Ãªtes vraiment fort !");
        console.log("Il vous restait " + game.hpPlayer + " PV");
    }
    else // if(game.hpPlayer <= 0)
    {
        showImage('images/dragon.jpg');
        console.log("Le dragon a gagnÃ©, vous avez Ã©tÃ© carbonisÃ© !");
        console.log("Il restait " + game.hpDragon + " PV au dragon");
    }
}

function startGame() {
    // Initialisation du jeu.
    console.clear();
    initializeGame();
    // ExÃ©cution du jeu.
    console.log('Points de vie de dÃ©part :');
    showGameState();
    gameLoop();
    // Fin du jeu.
    showGameWinner();
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
startGame();