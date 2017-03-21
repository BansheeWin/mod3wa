<?php

$title = $_POST['title'];
$content = $_POST['content'];
$idUser = $_POST['pseudo'];
$idCateg = $_POST['categ'];
$date = date("Y-m-d");

require_once('../models/posts.php');
insertPosts($title,$content,$idUser,$idCateg,$date);

header('location:../postcreate.php');