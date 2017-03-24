<?php

    include 'application/bdd_connection.php';

    if(empty($_POST))
    {
        // Récupération de tous les auteurs du blog.
        $query =
        '
            SELECT
                Id,
                FirstName,
                LastName
            FROM
                Author
        ';
        $resultSet = $pdo->query($query);
        $authors = $resultSet->fetchAll();

        // Récupération de toutes les catégories du blog.
        $query =
        '
            SELECT
                Id,
                Name
            FROM
                Category
        ';
        $resultSet = $pdo->query($query);
        $categories = $resultSet->fetchAll();

        // Sélection et affichage du template PHTML.
        $template = 'add_post';
        include 'layout.phtml';
    }
    else
    {
        // Ajout d'un article du blog.
        $query =
        '
            INSERT INTO
                Post
                (Title, Contents, Author_Id, Category_Id, CreationTimestamp)
            VALUES
                (?, ?, ?, ?, NOW())
        ';
        $resultSet = $pdo->prepare($query);
        $resultSet->execute([$_POST['title'], $_POST['contents'], $_POST['author'], $_POST['category']]);

        // Retour à la page d'accueil une fois que le nouvel article du blog a été ajouté.
        header('Location: index.php');
        exit();
    }