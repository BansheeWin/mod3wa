<?php  
require_once('models/utilities.php');
require_once('models/categories.php');
require_once('models/posts.php');

$categories=getCategories();
$posts=getPosts();

require_once('views/index.phtml');