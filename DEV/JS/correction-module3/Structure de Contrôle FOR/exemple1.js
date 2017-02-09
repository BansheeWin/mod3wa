// Déclaration d'une variable.
var counter;


/*
 * Boucle comptant de 1 à 10 inclus.
 *
 *
 * La structure de contrôle for possède trois parties :
 *
 * for(INITIALISATION; COMPARAISON; MISE A JOUR)
 * {
 *     // ...
 * }
 */
for(counter = 1; counter <= 10; counter++)
{
    document.write('<p>Le compteur vaut <strong>' + counter + '</strong>.</p>');
}

// Sans cette boucle il aurait fallu écrire manuellement dix fois la ligne 20.