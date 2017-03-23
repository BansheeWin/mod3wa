<?php
$idPost=$_POST['id'];
require_once('../models/comments.php');
if (isset($_POST['title']) && isset($_POST['comment'])){
    
    $titre=$_POST['title'];
    $comment=$_POST['comment'];
    $pseudo=$_POST['pseudo'];
    $date=date("Y-m-d H:i:s");
    addComment($idPost,$titre,$comment,$date,$pseudo);
}

$comments=getPostComments($idPost);
include('../views/comments.phtml');
