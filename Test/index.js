'use strict';   // Mode strict du JavaScript

/***********************************************************************************/
/* ********************************* DONNEES CARROUSEL *****************************/
/***********************************************************************************/

// Codes des touches du clavier.
const TOUCHE_ESPACE = 32;
const TOUCHE_GAUCHE = 37;
const TOUCHE_DROITE = 39;


// La liste des slides du carrousel.
var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

// Objet contenant l'Ã©tat du carrousel.
var state;



/***********************************************************************************/
/* ******************************** FONCTIONS CARROUSEL ****************************/
/***********************************************************************************/

function onSliderGoToNext()
{
    // Passage Ã  la slide suivante.
    state.index++;

    // Est-ce qu'on est arrivÃ© Ã  la fin de la liste des slides ?
    if(state.index == slides.length)
    {
        // Oui, on revient au dÃ©but (le carrousel est circulaire).
        state.index = 0;
    }

    // Mise Ã  jour de l'affichage.
    refreshSlider();
}

function onSliderGoToPrevious()
{
    // Passage Ã  la slide prÃ©cÃ©dente.
    state.index--;

    // Est-ce qu'on est revenu au dÃ©but de la liste des slides ?
    if(state.index < 0)
    {
        // Oui, on revient Ã  la fin (le carrousel est circulaire).
        state.index = slides.length - 1;
    }

    // Mise Ã  jour de l'affichage.
    refreshSlider();
}

function onSliderGoToRandom()
{
    var index;

    do
    {
        /*
         * RÃ©cupÃ©ration d'un numÃ©ro de slide alÃ©atoire diffÃ©rent
         * du numÃ©ro de slide actuel.
         */
        index = getRandomInteger(0, slides.length - 1);
    }
    while(index == state.index);

    // Passage Ã  une slide alÃ©atoire.
    state.index = index;

    // Mise Ã  jour de l'affichage.
    refreshSlider();
}

/*
 * Quand on crÃ©Ã© un gestionnaire d'Ã©vÃ¨nements, le navigateur appelle la
 * fonction en fournissant un argument event reprÃ©sentant l'Ã©vÃ¨nement lui-mÃªme.
 *
 * Si le gestionnaire d'Ã©vÃ¨nements n'a pas besoin de cet argument,
 * inutile de le dÃ©clarer !
 *
 * Mais ici on va en avoir besoin...
 */
function onSliderKeyUp(event)
{
    /*
     * Les gestionnaires d'Ã©vÃ¨nements d'appui sur une touche (Ã©vÃ¨nements
     * keydown, keyup, keypress) contiennent une propriÃ©tÃ© keyCode dans l'objet
     * event reprÃ©sentant le code de la touche du clavier.
     *
     * Il existe de trÃ¨s nombreux codes, plus ou moins standards, voir la page :
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     */

    switch(event.keyCode)
    {
        case TOUCHE_DROITE:
        // On passe Ã  la slide suivante.
        onSliderGoToNext();
        break;

        case TOUCHE_ESPACE:
        // On dÃ©marre ou on arrÃªte le carrousel.
        onSliderToggle();
        break;

        case TOUCHE_GAUCHE:
        // On passe Ã  la slide prÃ©cÃ©dente.
        onSliderGoToPrevious();
        break;
    }
}

function onSliderToggle()
{
    var icon;

    // Modification de l'icÃ´ne du bouton pour dÃ©marrer ou arrÃªter le carrousel.
    icon = document.querySelector('#slider-toggle i');

    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');

    // Est-ce que le carousel est dÃ©marrÃ© ?
    if(state.timer == null)
    {
        // Non, dÃ©marrage du carousel, toutes les deux secondes.
        state.timer = window.setInterval(onSliderGoToNext, 2000);

        /*
         * Modification du libellÃ© du bouton en mode "OFF".
         *
         * La variable spÃ©ciale this est automatiquement initialisÃ©e par le
         * navigateur avec l'objet DOM qui a dÃ©clenchÃ© l'Ã©vÃ¨nement.
         *
         * C'est le bouton "DÃ©marrer/ArrÃªter le carrousel" qui a dÃ©clenchÃ©
         * l'Ã©vÃ¨nement, donc la variable spÃ©ciale this vaut la mÃªme chose
         * que l'objet renvoyÃ© par document.querySelector('#js-slider-toggle');
         */
        this.title = 'ArrÃªter le carrousel';
    }
    else
    {
        // Oui, arrÃªt du carousel.
        window.clearInterval(state.timer);

        // RÃ©initialisation de la propriÃ©tÃ© pour le prochain clic sur le bouton.
        state.timer = null;

        /*
         * Modification du libellÃ© du bouton en mode "ON".
         *
         * La variable spÃ©ciale this est automatiquement initialisÃ©e par le
         * navigateur avec l'objet DOM qui a dÃ©clenchÃ© l'Ã©vÃ¨nement.
         *
         * C'est le bouton "DÃ©marrer/ArrÃªter le carrousel" qui a dÃ©clenchÃ©
         * l'Ã©vÃ¨nement, donc la variable spÃ©ciale this vaut la mÃªme chose
         * que l'objet renvoyÃ© par document.querySelector('#js-slider-toggle');
         */
        this.title = 'DÃ©marrer le carrousel';
    }
}

function onToolbarToggle()
{
    var icon;

    // Modification de l'icÃ´ne du lien pour afficher ou cacher la barre d'outils.
    icon = document.querySelector('#toolbar-toggle i');

    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');

    /*
     *  Les deux lignes de code ci-dessus sont Ã©quivalentes Ã  :
     *
     *
     *  if(icon.classList.contains('fa-arrow-right') == true)
     *  {
     *      icon.classList.remove('fa-arrow-right');
     *      icon.classList.add('fa-arrow-down');
     *  }
     *  else
     *  {
     *      icon.classList.add('fa-arrow-right');
     *      icon.classList.remove('fa-arrow-down');
     *  }
     */

    // Affiche ou cache la barre d'outils.
    document.querySelector('.toolbar ul').classList.toggle('hide');
}

function refreshSlider()
{
    var sliderImage;
    var sliderLegend;

    // Recherche des balises de contenu du carrousel.
    sliderImage  = document.querySelector('#slider img');
    sliderLegend = document.querySelector('#slider figcaption');

    // Changement de la source de l'image et du texte de la lÃ©gende du carrousel.
    sliderImage.src          = slides[state.index].image;
    sliderLegend.textContent = slides[state.index].legend;
}



/***********************************************************************************/
/* ******************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/

/*
 * Installation d'un gestionnaire d'Ã©vÃ¨nement dÃ©clenchÃ© quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'Ã©vÃ¨nement est une fonction anonyme que l'on donne en deuxiÃ¨me
 * argument directement Ã  document.addEventListener().
 */
document.addEventListener('DOMContentLoaded', function()
{
    // Initialisation du carrousel.
    state       = {};
    state.index = 0;                   // On commence Ã  la premiÃ¨re slide
    state.timer = null;                // Le carrousel est arrÃªtÃ© au dÃ©marrage


    // Installation des gestionnaires d'Ã©vÃ¨nement.
    installEventHandler('#slider-random', 'click', onSliderGoToRandom);
    installEventHandler('#slider-previous', 'click', onSliderGoToPrevious);
    installEventHandler('#slider-next', 'click', onSliderGoToNext);
    installEventHandler('#slider-toggle', 'click', onSliderToggle);
    installEventHandler('#toolbar-toggle', 'click', onToolbarToggle);

    /*
     * L'Ã©vÃ¨nement d'appui sur une touche doit Ãªtre installÃ© sur l'ensemble de la
     * page, on ne recherche pas une balise en particulier dans l'arbre DOM.
     *
     * L'ensemble de la page c'est la balise <html> et donc la variable document.
     */
    document.addEventListener('keyup', onSliderKeyUp);
    // Equivalent Ã  installEventHandler('html', 'keyup', onSliderKeyUp);


    // Affichage initial.
    refreshSlider();
});
