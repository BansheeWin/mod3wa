<?php

    // Validation de la query string dans l'URL.
    if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']))
    {
        header('Location: index.php');
        exit();
    }

    include 'application/bdd_connection.php';

    // Récupération d'un article du blog.
    $query =
    '
        SELECT
            Post.Id,
            Title,
            Contents,
            CreationTimestamp,
            FirstName,
            LastName
        FROM
            Post
        INNER JOIN
            Author
        ON
            Post.Author_Id = Author.Id
        WHERE
            Post.Id = ?
    ';
    $resultSet = $pdo->prepare($query);
    $resultSet->execute([$_GET['id']]);
    $post = $resultSet->fetch();

    // Récupération de tous les commentaires de l'article du blog.
    $query =
    '
        SELECT
            NickName,
            Contents,
            CreationTimestamp
        FROM
            Comment
        WHERE
            Post_Id = ?
    ';
    $resultSet = $pdo->prepare($query);
    $resultSet->execute([$_GET['id']]);
    $comments = $resultSet->fetchAll();

    // Sélection et affichage du template PHTML.
    $template = 'show_post';
    include 'layout.phtml';