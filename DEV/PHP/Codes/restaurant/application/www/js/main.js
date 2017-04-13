'use strict';
function runFormValidation() {
    var $form;
    var formValidator;


    // [data-no-validation=true]
    $form = $('form:not([data-no-validation=true])'); // document.querySelector('form')

    // Y a t'il un formulaire à valider sur la page actuelle ?
    if ($form.length >= 1) {
        formValidator = new FormValidator($form);
        formValidator.checkMinLength();
        var html='';
        for (let i in formValidator.totalErrors) {
            html+='<em>' + formValidator.totalErrors[i].message +
            ' sur le champ : ' + formValidator.totalErrors[i].nomDuChamp + '</em>'

        }
        formValidator.$errorMessage.html(html);
    }
}

$(function () {

    $('#inscription').on('click', function (event) {
        runFormValidation();
        event.preventDefault();
    });

    $('#add_panier').on('click', function () {
        var quantite = $('select[name="qte"] option:selected').val();
        var idMenu = $('select[name="menu"] option:selected').val();

        //
        $.get(getRequestUrl() + '/basket', {ajaxMode: true, idMeal: idMenu, qte: quantite}, function (retourHtml) {
            $('#my_basket').html(retourHtml);
        });
    });
    $(document).on('click', '.fa-trash', function () {

        $.get(
            getRequestUrl() + '/basket',
            {
                ajaxMode: true,
                delete: $(this).parents('tr').data('id')
            },
            function (retourHtml) {
                $('#my_basket').html(retourHtml);
            }
        );

    });

    $('#meal').on('change', function () {

        // alert($(this).val());

        // si $(this).val() vaut 5
        // http://127.0.0.1/restaurant/index.php/meal?idMenu=5

        // Requete Ajax avec jquery en method GET
        // en attente d'un resultat au format JSON
        $.getJSON(
            // 'meal?idMenu='+$(this).val(),
            'meal', {idMenu: $(this).val()},

            function (donnees) {
                $("#designation").text(donnees.Name);
                $("#photo").attr('src', getWwwUrl() + '/images/meals/' + donnees.Photo);
                $("#tarif").text(donnees.SalePrice).data('price', donnees.SalePrice);
                $("#description").text(donnees.Description);

                // On repasse la valeur du champ qte a 1 et on simule le changement
                $('select[name="qte"]').val(1).trigger('change');
            }
        );

    }).trigger('change');


    $('select[name="qte"]').on('change', function () {

        $("#total").text(($(this).val() * $("#tarif").data('price')).toFixed(2));

    });

    // Au chargement on affiche le panier
    $.get(getRequestUrl() + '/basket', {ajaxMode: true}, function (retourHtml) {
        $('#my_basket').html(retourHtml);
    });

    $('#validation').on('click', function () {
        console.log('hey');
    });
});
	