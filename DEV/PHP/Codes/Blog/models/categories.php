<?php

require_once('utilities.php');

function getCategories(){
$pdo=connectDB();
	$query = $pdo->prepare('SELECT * from categories ORDER BY id');

	$query->execute();
    
	$categories = $query->fetchAll(PDO::FETCH_ASSOC);
    return $categories;
}