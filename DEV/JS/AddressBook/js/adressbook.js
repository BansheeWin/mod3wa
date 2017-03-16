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
    var adressebook;
    var storageItem = localStorage.getItem('addressBook');
    if (storageItem != null) {
        adressebook = JSON.parse(storageItem);
        $('#adressBook').append('<ul><li>' + adressebook["name"] + ' ' + adressebook["firstName"] + '</li></ul>');
    }
    else {
        $('#adressBook').append('<li>Carnet d\'adresse vide</li>');
    }
}

function clearAdressBook() {
    localStorage.clear();
}