<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

// Paramétrage de la liaison PHP <-> MySQL, les données sont encodées en UTF-8.
$pdo->exec('SET NAMES UTF8');



// Récupération de la fiche client.
$query = $pdo->prepare
(
    'SELECT
        customerName,
        contactFirstName,
        contactLastName,
        addressLine1,
        addressLine2,
        city
     FROM customers
     INNER JOIN orders ON orders.customerNumber = customers.customerNumber
     WHERE orderNumber = ?'
);

$query->execute(array($_GET['orderNumber']));

/*
 * Récupération de toutes les données renvoyées par MySQL.
 *
 * La méthode fetch() renvoie un tableau à une dimension :
 * - la première dimension représente les colonnes SQL de la ligne de données
 */
$customer = $query->fetch(PDO::FETCH_ASSOC);



// Récupération des différentes lignes de la commande.
$query = $pdo->prepare
(
    'SELECT
        productName,
        priceEach,
        quantityOrdered,
        priceEach * quantityOrdered AS totalPrice
     FROM orderdetails
     INNER JOIN products ON products.productCode = orderdetails.productCode
     WHERE orderNumber = ?
     ORDER BY orderLineNumber' // Tri par numéro de ligne indiqué dans la base de données
);

$query->execute(array($_GET['orderNumber']));

$orderLines = $query->fetchAll(PDO::FETCH_ASSOC);



// Récupération du montant total.
$query = $pdo->prepare
(
    'SELECT SUM(priceEach * quantityOrdered) AS totalAmount
     FROM orderdetails
     WHERE orderNumber = ?'
);

$query->execute(array($_GET['orderNumber']));

$result = $query->fetch(PDO::FETCH_ASSOC);

// Création d'une variable contenant directement le montant total HT.
$totalAmount = $result['totalAmount'];



include 'order-form.phtml';