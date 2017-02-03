// Déclaration d'une variable.
var firstVariable;

// définition de la variable
firstVariable = "";

// affectation d'un valeur à la variable
firstVariable = "<p>Bonjour tout le monde !</p>";

// Affichage du contenu de la variable directement dans la page HTML
document.write("<p>" + firstVariable + "</p>");

firstVariable = "j'ai été modifié";

document.write("<p>" + firstVariable + "</p>");

// Déclaration d'une constante et affectation immédiate d'une valeur.
const FIRST_CONSTANT = "Ceci est une constante";


// Affichage du contenu de la constante directement dans la page HTML.
document.write(FIRST_CONSTANT);

/*************************************
 *
 *       Petit calcul d'aire
 *
 * ***********************************/


const PI = 3.14159265359;
var aire;
var rayon;

rayon = 19;

aire = 2 * PI * rayon;
// aire = 2 * 3.14159265359 * 19;

document.write(aire);
