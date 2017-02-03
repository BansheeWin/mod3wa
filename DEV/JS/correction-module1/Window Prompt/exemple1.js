// Déclaration d'une variable.
var firstName;


/*
 * Demande à l'utilisateur de saisir quelque chose dans une popup, lorsque la popup se referme le
 * résultat sera affecté à la variable.
 */
firstName = window.prompt('Comment vous appelez-vous ?');

// Affichage du contenu de la variable dans un paragraphe HTML.
document.write('<p>');
document.write(firstName);
document.write('</p>');