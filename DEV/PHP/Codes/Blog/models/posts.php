<?php
require_once('utilities.php');

function getPosts(){
    $pdo=connectDB();
    $query = $pdo->prepare('SELECT articles.id,title,content,date_creation,pseudo,libelle from articles 
    INNER JOIN users ON idUsers=users.id
    INNER JOIN categories ON idCategorie=categories.id
    ORDER BY date_creation DESC');

	$query->execute();
    
	$posts = $query->fetchAll(PDO::FETCH_ASSOC);
    return $posts;
}
function getPostsAjax($idCateg){
    $pdo=connectDB();
    $query = $pdo->prepare('SELECT articles.id,title,content,date_creation,pseudo,libelle from articles 
    INNER JOIN users ON idUsers=users.id
    INNER JOIN categories ON idCategorie=categories.id
    WHERE categories.id=:idCateg
    ORDER BY date_creation DESC');

	$query->execute(array(':idCateg' => $idCateg));

    
	$posts = $query->fetchAll(PDO::FETCH_ASSOC);
    return $posts;
}

function insertPosts($title,$content,$idUser,$idCateg,$datecrea){
    $pdo=connectDB();
    
    $query = $pdo->prepare("INSERT INTO articles 
    VALUES ('',:idUser,:idCateg,:title,:content,:date)");

	$query->execute(array(':idUser' => $idUser,':idCateg' => $idCateg,':title' => $title,':content' => $content,':date' => $datecrea));

}

function getSinglePost($idPost){
    $pdo=connectDB();
    $query = $pdo->prepare('SELECT id,title,content,date_creation from articles
    WHERE articles.id=:idPost');

	$query->execute(array(':idPost' => $idPost));

    
	$post = $query->fetch(PDO::FETCH_ASSOC);
    return $post;
}

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

function removePost($idPost){
    $pdo=connectDB();
    $query = $pdo->prepare('DELETE FROM articles WHERE id=:idPost');
    
    $query->execute(array(':idPost' => $idPost));
}