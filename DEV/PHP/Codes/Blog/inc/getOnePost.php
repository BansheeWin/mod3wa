<?php
require_once('../models/posts.php');
require_once('../models/authors.php');
require_once('../models/comments.php');
$idPost=$_GET['id'];
$post=getSinglePost($idPost);
$comments=getPostComments($idPost);
$authors=getAuthors();

include('../views/post.phtml');