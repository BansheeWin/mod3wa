<?php
include 'inc/utilities.php';
ini_set("display_errors",0);error_reporting(0);


    $aTasks=loadTasks();

//var_dump($aTasks);
include 'views/layout.phtml';
?>