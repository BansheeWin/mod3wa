// Déclaration de trois variables.
var number1;
var number2;
var sum;


/*
 * Affectation de la saisie de l'utilisateur aux variables.
 *
 * Les deux variables sont donc de type String.
 */
number1 = window.prompt('Veuillez saisir un premier nombre :');
number2 = window.prompt('Veuillez saisir un deuxième nombre :');

/*
 * window.prompt() a renvoyé une chaîne de caractère (type String) même si on a saisi un nombre.
 * On doit donc convertir nos variables en nombres avant de pouvoir les additionner.
 *
 * Les fonctions parseInt() et parseFloat() convertissent une variable de type String en une
 * variable de type Number.
 */
number1 = parseInt(number1);
number2 = parseInt(number2);


/*
 * Addition des deux variables.
 *
 * Ce n'est PAS une concaténation car les deux variables sont de type Number.
 */
sum = number1 + number2;


// Affichage du résultat directement dans la page HTML.
document.write(sum);