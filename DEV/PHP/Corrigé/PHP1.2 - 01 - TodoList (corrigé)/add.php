<?php

// --------------------------------------------------------------------------------------
// DEPENDANCES
// --------------------------------------------------------------------------------------

include 'utilities.php';



// --------------------------------------------------------------------------------------
// FONCTIONS
// --------------------------------------------------------------------------------------

function addTask($title, $description, $date, $priority)
{
    if(empty($description) == true)
    {
        $description = 'Tâche sans description';
    }

	// Création du tableau contenant la tâche.
	$taskData =
	[
		$title,
		$description,
		$date,
		$priority
	];

	// Enregistrement du tableau contenant la tâche.
	saveTask($taskData);
}



// --------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------

// Si l'utilisateur n'a pas saisi de titre à la tâche alors on ne l'ajoute pas.
if(empty($_POST['title']) == false) // ou if($_POST['title'] != '')
{
    // Récupération des données de formulaire.
    $description = $_POST['description'];
    $date        = $_POST['year'].'-'.$_POST['month'].'-'.$_POST['day'];
    $priority    = $_POST['priority'];
    $title       = $_POST['title'];

    // Ajout de la tâche aux tâches existantes.
    addTask($title, $description, $date, $priority);
}

/*
 * Redirection vers la page d'accueil.
 *
 * Il est impératif de rediriger en HTTP GET après l'envoi d'un formulaire en HTTP POST.
 * Cela s'appelle le Post-Redirect-Get ou PRG
 *
 * Lire la page Wikipédia à ce sujet :
 * http://fr.wikipedia.org/wiki/Post-Redirect-Get
 */
header('Location: index.php');
exit();