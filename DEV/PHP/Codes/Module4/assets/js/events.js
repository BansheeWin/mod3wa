function clickSwitch() {
    var radioChoice;
    radioChoice = $('input[name=what]:checked').val();
    switch (($('input[name=what]:checked').val())) {
    case '1':
        $.get('php/fichier.php', function (htmlRetour) {
            $('#target').html(htmlRetour);
        });
        break;
    case '2':
        $.getJSON('php/json.php', ajaxGetJson)
        break;
    case '3':
        $.get('php/films.php', function (htmlRetour) {
            $('#target').html(htmlRetour);
        });
        break;
    }
}