'use strict';

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera totalement construit
 * par le navigateur.
 *
 * Lorsque l'on donne en argument une fonction à jQuery, elle est utilisée comme gestionnaire
 * d'évènements pour l'évènement JavaScript natif DOMContentLoaded.
 */
$(function()
{
    $('#run').on('click', onClickExecute);
});