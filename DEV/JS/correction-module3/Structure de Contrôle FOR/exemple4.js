// Déclaration de deux variables.
var index;
var numbers = [ 10, 20, 30, 40, 50 ];


document.write('<h2>Première variante</h2>');

/*
 * Boucle affichant tous les éléments d'un tableau.
 *
 *
 * La structure de contrôle for possède trois parties :
 *
 * for(INITIALISATION; COMPARAISON; MISE A JOUR)
 * {
 *     // ...
 * }
 */
for(index = 0; index < 5; index++)
{
    document.write('<p>' + numbers[index] + '</p>');
}


document.write('<h2>Deuxième variante</h2>');

/*
 * Le problème de la boucle du dessus c'est qu'elle est STATIQUE :
 * qu'arrive-t'il si le tableau dispose de plus ou de moins de 5 éléments ?
 *
 * Il faut rendre la comparaison de la boucle DYNAMIQUE, en se basant sur la longueur du tableau.
 *
 * Les tableaux étant de la classe Array, ils possèdent une propriété length :
 * http://devdocs.io/javascript/global_objects/array/length
 */
for(index = 0; index < numbers.length; index++)
{
    document.write('<p>' + numbers[index] + '</p>');
}