<?php


function addComment($idPost,$titre,$comment,$date,$idUser){
    $pdo=connectDB();
	$query = $pdo->prepare("INSERT INTO comments 
    VALUES ('',:idArticle,:titre,:comment,:date,:idUser)");

	$query->execute(array(':idArticle' => $idPost,':titre' => $titre,':comment' => $comment,':date' => $date,':idUser' => $idUser));
    
}