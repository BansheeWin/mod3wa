<?php
require_once('../models/posts.php');
require_once('../models/categories.php');
require_once('../models/authors.php');
$idPost=$_GET['id'];
$post=getSinglePost($idPost);
$categories=getCategories();
$authors=getAuthors();

if (isset($_POST['title'])&&isset($_POST['content'])){
    $id=$_POST['id'];
    $newCateg=$_POST['categ'];
    $newTitle=$_POST['title'];
    $newContent=$_POST['content'];
    $newAuthor=$_POST['pseudo'];
    editPost($newCateg,$newTitle,$newContent,$newAuthor,$id);
}
include('../views/edit.phtml');