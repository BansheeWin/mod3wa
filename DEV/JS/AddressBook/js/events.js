'use strict';

function onClickShowForm() {
    $('#contact-form').toggle("slow");
}

function onClickAddContactInfos() {
    var contact;
    contact = createContact($('#civi').val(), $('#nom').val(), $('#prenom').val(), $('#tel').val())
    localStorage.setItem('addressBook', JSON.stringify(contact));
}