'use strict';
$(function () {
    $('#showform').on('click', onClickShowForm);
    $('#addData').on('click', function (event) {
        event.preventDefault();
        onClickAddContactInfos();
    });
    $('#clearbook').on('click', clearAdressBook);
});
loadAdressBook();