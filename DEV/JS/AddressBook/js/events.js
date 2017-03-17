'use strict';

function onClickShowForm() {
    $('#contact-form').toggle("slow");
}

function onClickAddContactInfos() {
    var contact;
    contact = createContact($('#civi').val(), $('#nom').val(), $('#prenom').val(), $('#tel').val())
    var adressBook = loadData();
    var id_contact = $("#contact-form").data('contact');
    if (id_contact == 'a') {
        adressBook.push(contact);
    }
    else {
        adressBook[id_contact] = contact;
    }
    localStorage.setItem('addressBook', JSON.stringify(adressBook));
    loadAdressBook();
    $("#contact-form").data('contact', 'a');
    // Action du reset sur le formulaire
    $("#contact-form").trigger('reset');
}