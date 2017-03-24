<?php

    include 'application/bdd_connection.php';

    // Ajout d'un commentaire à un article du blog.
    $query =
    '
        INSERT INTO
            Comment
            (NickName, Contents, Post_Id, CreationTimestamp)
        VALUES
            (?, ?, ?, NOW())
    ';
    $resultSet = $pdo->prepare($query);
    $resultSet->execute([$_POST['nickName'], $_POST['contents'], $_POST['postId']]);

    // Retour à l'article détaillé une fois que le nouveau commentaire a été ajouté.
    header('Location: show_post.php?id='.$_POST['postId']);
    exit();