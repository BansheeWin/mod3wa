<?php

function connectDB(){
    try {
        $pdo = new PDO('mysql:dbname=my_blog;host=127.0.0.1', 'root', 'troiswa');
        $pdo->exec("SET NAMES 'UTF8'");
    } catch (PDOException $e) {
        echo 'Connexion échouée : ' . $e->getMessage();
    }
    return $pdo;
}