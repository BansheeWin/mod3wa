'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function ajaxGetHtmlArticle(htmlArticle)
{
    // La réponse HTTP contient du HTML que l'on insère donc dans la page.
    $('#target').html(htmlArticle);
}

function ajaxGetJsonData(contactList)
{
    var index;

    // La réponse HTTP contient du JSON qui a été automatiquement désérialisé par jQuery.

    // Création d'une liste HTML dans la page.
    $('#target').empty().append('<ul>');

    for(index = 0; index < contactList.length; index++)
    {
        // Insertion d'un contact dans la liste HTML.
        $('<li>').append
        (
            '<p><strong>Prénom</strong> : ' + contactList[index].firstName + '</p>',
            '<p><em>Téléphone</em> : '      + contactList[index].phone     + '</p>'
        ).appendTo('#target ul');
    }
}

function ajaxGetHtmlMovies(htmlMovies)
{
    // La réponse HTTP contient du HTML que l'on insère donc dans la page.
    $('#target').html(htmlMovies);
}