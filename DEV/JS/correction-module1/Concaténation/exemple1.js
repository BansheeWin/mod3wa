// Déclaration de deux variables.
var age;
var firstName;


// Affectation d'une valeur à une variable.
firstName = 'Tom';

/*
 * Concaténation d'un nombre avec une chaîne de caractères.
 * Le + ici est compris comme une concaténation car la valeur ' ans' n'est pas un nombre.
 *
 * Affectation du résultat à une variable.
 */
age = 30 + ' ans';

// La variable age vaut maintenant la chaîne de caractères '30 ans'.


/*
 * Affichage de deux paragraphes directement dans la page HTML.
 *
 * Les chaînes de caractères sont concaténées avec le +
 */
document.write("<p>Bonjour, je m'appelle " + firstName + '</p>');
document.write("<p>J'ai " + age + '</p>');

/*
 * On utilise des guillemets doubles pour certaines chaînes de caractères car elles contiennent un
 * ou plusieurs caractères de guillemets simples.
 */