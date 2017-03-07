<?php

include 'utilities.php';

if (  !empty($_POST['title']) && 
    isset($_POST['message']) &&
    isset($_POST['date']) && 
    isset($_POST['important'])
   ) {
	addTask($_POST['title'], $_POST['message'], $_POST['date'], $_POST['important']);

}
header('location:../index.php'); 
exit();