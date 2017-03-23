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
    $query = $pdo->prepare('SELECT categories.id,title,content,date_creation,pseudo,libelle FROM articles
    INNER JOIN categories ON idCategorie=categories.id
    INNER JOIN users ON idUsers=users.id
    WHERE articles.id=:idPost');

	$query->execute(array(':idPost' => $idPost));

    
	$post = $query->fetch(PDO::FETCH_ASSOC);
    return $post;
}

function removePost($idPost){
    $pdo=connectDB();
    $query = $pdo->prepare('DELETE FROM articles WHERE id=:idPost');
    
    $query->execute(array(':idPost' => $idPost));
}
function editPost($newCateg,$newTitle,$newContent,$newAuthor,$idPost){
    $pdo=connectDB();
    $query = $pdo->prepare('UPDATE articles SET idUsers=:newUser,idCategorie=:newCateg,title=:newTitle,content=:newContent WHERE id=:idPost');
    
    $query->execute(array(':newUser' => $newAuthor,':newCateg' => $newCateg,':newTitle' => $newTitle,':newContent' => $newContent,':idPost' => $idPost));
}