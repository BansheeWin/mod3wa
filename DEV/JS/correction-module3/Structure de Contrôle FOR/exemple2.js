// Déclaration d'une variable.
var counter;

// Equivalent à la partie initalisation de la boucle.
counter = 1;


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
for(; counter <= 10;)
{
    document.write('<p>Le compteur vaut <strong>' + counter + '</strong>.</p>');

    // Equivalent à la partie mise à jour de la boucle.
    counter++;
}

// Sans cette boucle il aurait fallu écrire manuellement dix fois la ligne 20.