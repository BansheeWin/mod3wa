<?php

try {
    $pdo = new PDO('mysql:dbname=classicmodels;host=127.0.0.1', 'root', 'troiswa');
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
}

if (isset($pdo) && !empty($_GET['orderNumber'])) {
	$query = $pdo->prepare('SELECT orderNumber,productName,productLine,quantityOrdered,priceEach FROM orderdetails INNER JOIN products ON orderdetails.productCode=products.productCode WHERE orderdetails.orderNumber=:numero ORDER BY productLine ASC');

	$query->execute(array(':numero' => $_GET['orderNumber']));

	$orders = $query->fetchAll(PDO::FETCH_ASSOC);

	$queryCustom = $pdo->prepare('SELECT orderNumber,customerName,contactLastName,contactFirstName,addressLine1,city,postalCode FROM orders INNER JOIN customers ON orders.customerNumber=customers.customerNumber WHERE orders.orderNumber=:numero');

	$queryCustom->execute(array(':numero' => $_GET['orderNumber']));

	$customs = $queryCustom->fetch(PDO::FETCH_ASSOC);
}
$total=0;
include('../views/orders.phtml');