<?php
require_once('../models/posts.php');
$idCateg=$_GET['idCateg'];
$posts=getPostsAjax($idCateg);

include('../views/posts.phtml');