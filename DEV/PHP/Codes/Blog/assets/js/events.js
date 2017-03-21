function clickSwitch() {
    var idCateg;
    idCateg = $(this).data('id');
    console.log(idCateg);
    $.get('inc/posts.php',{'idCateg' : idCateg}, function (htmlRetour) {
            $('#articles').html(htmlRetour);
        });
}

function onClickShowForm(){
    $("#postCreateForm").toggle('slow');
    $("#postlist").toggle('slow');
}