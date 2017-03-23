<?php
require_once('utilities.php');
function getPostComments($idPost){
    $pdo=connectDB();
    $query = $pdo->prepare('SELECT idArticle,titre,commentaire,date_post,pseudo from comments 
    INNER JOIN users ON idUsers=users.id
    WHERE idArticle=:idPost
    ORDER BY date_post DESC');

	$query->execute(array(':idPost' => $idPost));
    
	$comments = $query->fetchAll(PDO::FETCH_ASSOC);
    return $comments;
}

function addComment($idPost,$titre,$comment,$date,$idUser){
    $pdo=connectDB();
	$query = $pdo->prepare("INSERT INTO comments 
    VALUES ('',:idArticle,:titre,:comment,:date,:idUser)");

	$query->execute(array(':idArticle' => $idPost,':titre' => $titre,':comment' => $comment,':date' => $date,':idUser' => $idUser));
    
}