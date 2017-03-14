<?php

try {
    $pdo = new PDO('mysql:dbname=classicmodels;host=127.0.0.1', 'root', 'troiswa');
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
}


if (isset($pdo) && isset($_GET['search'])) {
	$query = $pdo->prepare('SELECT orderNumber,orderDate,shippedDate,status FROM orders WHERE orderNumber LIKE :choix ORDER BY orderDate DESC');

	$query->execute(array(':choix' => '%'.$_GET['search'].'%'));
	//$query->execute([':choix_utilisateur' => $_GET['country']]);
    
	$orders = $query->fetchAll(PDO::FETCH_ASSOC);
}

$queryStatus = $pdo->query('SELECT DISTINCT(status) FROM orders');

$ordersStatus = $queryStatus->fetchAll(PDO::FETCH_ASSOC);


?>