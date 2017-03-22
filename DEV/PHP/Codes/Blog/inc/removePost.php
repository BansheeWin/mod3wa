<?php
require_once('../models/posts.php');
$idPost=$_GET['idPost'];
removePost($idPost);

$posts=getPosts();
include('../views/adminPostList.phtml');