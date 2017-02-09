// Déclaration d'une variable.
var counter;


/*
 * Boucle comptant de 20 à 1 inclus.
 *
 *
 * La structure de contrôle for possède trois parties :
 *
 * for(INITIALISATION; COMPARAISON; MISE A JOUR)
 * {
 *     // ...
 * }
 */
for(counter = 20; counter >= 1; counter--)
{
    document.write('<p>Le compteur vaut <strong>' + counter + '</strong>.</p>');
}

// Sans cette boucle il aurait fallu écrire manuellement dix fois la ligne 20.