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
    $("#formcreate").toggle('slow');
}

function addComment(e){
    e.preventDefault();
    var idPost=$('#id').val();
    var title=$('#titre').val();
    var comment=$('#comment').val();
    var pseudo=$('#pseudo').val();
    
    $.post('../inc/addComment.php',{'id':idPost,'title' : title,'comment' : comment,'pseudo' : pseudo}, function (htmlRetour) {
            $('#comments').html(htmlRetour);
        });
    
    $(this).parent('form').trigger('reset');
}