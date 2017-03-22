function clickSwitch() {
    var idCateg;
    idCateg = $(this).data('id');
    $.get('inc/getPosts.php',{'idCateg' : idCateg}, function (htmlRetour) {
            $('#articles').html(htmlRetour);
        });
}

function removePost(e) {
    e.preventDefault();
    var idPost;
    idPost = $(this).data('idremove');
    var parent = $(this).parents('tr');
    $.get('inc/removePost.php',{'idPost' : idPost}, function (htmlRetour) {
           parent.remove();
        });
}
function onClickShowForm(){
    $("#postCreateForm").toggle('slow');
}

function addComment(){
    var title=$('#titre').val();
    var comment=$('#comment').val();
    var pseudo=$('#pseudo').val();
    
    console.log(title,comment,pseudo);
    $.post('../models/comments.php',{'titre' : title,'commentaire' : comment,'pseudal' : pseudo}, function (htmlRetour) {
            $('#comments').html(htmlRetour);
        });
}