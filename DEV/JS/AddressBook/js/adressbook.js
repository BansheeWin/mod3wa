'use strict';

function createContact(civi, nom, prenom, tel) {
    var contact = {
        'civility': civi
        , 'name': nom
        , 'firstName': prenom
        , 'phone': tel
    };
    return contact;
}

function loadAdressBook() {
    var adressebook = loadData();
    $('#adressBookList').empty();
    if (adressebook.length != 0) {
        for (var i = 0; i < adressebook.length; i++) {
            $('#adressBookList').append('<li>' + '<a href="javascript:;" data-index="' + i + '">' + adressebook[i].firstName + ' ' + adressebook[i].name + '</a>' + '</li>');
        }
    }
    else {
        $('#adressBookList').append('<li>Carnet d\'adresse vide</li>');
    }
}

function clearAdressBook() {
    var nulltab = new Array();
    localStorage.setItem('addressBook', JSON.stringify(nulltab));
    loadAdressBook();
}

function loadData() {
    // Déclaration de la variable annuaire avec récupération 
    // des données sur la 'key' => "annuaire"
    var annuaire = localStorage.getItem('addressBook');
    // Si la 'key' n'existe pas on reçoit null
    if (annuaire == null) {
        // du coup, on modifie notre variable en tableau (array)
        annuaire = [];
    }
    else {
        // On parse les données pour convertir le résultat de annuaire 
        // (ici au format chaine) le parse transforme cette chaine en objet
        annuaire = JSON.parse(annuaire);
    }
    // On retourne notre tableau
    return annuaire;
}

function changeContactInfos() {
    var annuaire = loadData();
    var index = $(this).data('index');
    $("#contact-form").data('contact', index);
    $("#civi").val(annuaire[index].civility); // civility
    $("#nom").val(annuaire[index].name); // lastname
    $("#prenom").val(annuaire[index].firstName); // firstname
    $("#tel").val(annuaire[index].phone); // phone
}