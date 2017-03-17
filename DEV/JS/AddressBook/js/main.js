'use strict';
$(function () {
    $('#showform').on('click', onClickShowForm);
    $('#addData').on('click', function (event) {
        event.preventDefault();
        onClickAddContactInfos();
        $("#contact-form").trigger("reset");
    });
    $('#clearbook').on('click', clearAdressBook);
    $(document).on('click', '#adressBookList a', changeContactInfos);
    loadAdressBook();
});