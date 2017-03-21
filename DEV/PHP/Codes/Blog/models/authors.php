<?php

require_once('utilities.php');

function getAuthors(){
$pdo=connectDB();
	$query = $pdo->prepare('SELECT * from users ORDER BY id');

	$query->execute();
    
	$authors = $query->fetchAll(PDO::FETCH_ASSOC);
    return $authors;
}