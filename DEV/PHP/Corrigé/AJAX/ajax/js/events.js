'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onClickExecute()
{
    var radioChoice;

    // Récupération de la valeur du bouton radio qui a été sélectionné.
    radioChoice = $('input[name=what]:checked').val();

    // Exécution d'une requête AJAX différente selon le bouton radio.
    switch(radioChoice)
    {
        // Récupération d'un article HTML venant du serveur (PHP).
        case '1':
        $.get('php/1-get-html-article.php', ajaxGetHtmlArticle);
        break;

        // Récupération de données JSON venant du serveur (PHP).
        case '2':
        $.getJSON('php/2-get-json-data.php', ajaxGetJsonData);
        break;

        // Récupération d'un template HTML venant du serveur (PHP).
        case '3':
        $.get('php/3-get-html-movies.php', ajaxGetHtmlMovies);
        break;
    }
}