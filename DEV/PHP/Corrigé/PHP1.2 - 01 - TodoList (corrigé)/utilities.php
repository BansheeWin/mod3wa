<?php

const DATAFILE = 'tasks.csv';



// --------------------------------------------------------------------------------------
// FONCTIONS
// --------------------------------------------------------------------------------------

function loadTasks()
{
	/*
	 * Ouverture du fichier CSV des tâches en mode lecture avec création d'un fichier
	 * vide s'il n'existe pas encore.
	 */
	$file = fopen(DATAFILE, 'a+');

	// Création d'une liste de tâches vide.
	$tasks = array();

	// Boucle de lecture du fichier CSV, ligne par ligne (= tâche par tâche).
	while(true)
	{
		// Lecture d'une ligne du fichier CSV, donc d'une tâche.
		$taskData = fgetcsv($file);

		// Est-ce qu'on est à la fin du fichier ?
		if($taskData == false)
		{
			// Oui, fin de la boucle de lecture du fichier CSV.
			break;
		}

		// Ajout de la tâche à la liste de tâches.
		array_push($tasks, $taskData);
	}

	// Fermeture du fichier CSV des tâches.
	fclose($file);

	return $tasks;
}

function saveTask(array $taskData)
{
	/*
	 * Ouverture du fichier CSV des tâches en mode ajout.
	 *
	 * Ajout signifie que :
	 * - Si le fichier existe, il est ouvert et on peut écrire à la fin du fichier.
	 * - Si le fichier n'existe pas, il est créé et on peut écrire dedans.
	 */
	$file = fopen(DATAFILE, 'a');

	// Ecriture d'une ligne dans le fichier CSV, une ligne contenant une tâche.
	fputcsv($file, $taskData);

	// Fermeture du fichier CSV des tâches.
	fclose($file);
}

function saveTasks(array $tasks)
{
	/*
	 * Ouverture du fichier CSV des tâches en mode écriture.
	 *
	 * Ecriture signifie que :
	 * - Si le fichier existe, le fichier est détruit puis recréé et on peut écrire dedans.
	 * - Si le fichier n'existe pas, il est créé et on peut écrire dedans.
	 */
	$file = fopen(DATAFILE, 'w');

	// Boucle d'écriture du fichier CSV, ligne par ligne (= tâche par tâche).
	foreach($tasks as $taskData)
	{
		// Ecriture d'une ligne dans le fichier CSV, une ligne contenant une tâche.
		fputcsv($file, $taskData);
	}

	// Fermeture du fichier CSV des tâches.
	fclose($file);
}