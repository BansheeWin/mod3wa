<?php

// --------------------------------------------------------------------------------------
// DEPENDANCES
// --------------------------------------------------------------------------------------

include 'utilities.php';



// --------------------------------------------------------------------------------------
// FONCTIONS
// --------------------------------------------------------------------------------------

function removeTasks(array $allTasks, array $indexes)
{
    // Création d'un nouveau tableau de tâches.
	$tasks = array();

	// Parcours de la liste de tâches spécifiées.
	foreach($allTasks as $index => $taskData)
    {
        /*
         * Est-ce que l'indice de la tâche se trouve dans la liste des indices
         * de tâches qu'on ne doit pas conserver ?
         */
        if(in_array($index, $indexes) == false)
        {
            // Non, on conserve donc la tâche en la copiant dans notre nouveau tableau.
            array_push($tasks, $taskData);
        }
    }

/*
	Le code ci-dessus peut s'écrire avec une boucle for.
	for($index = 0; $index < count($allTasks); $index++)
	{
        if(in_array($index, $indexes) == false)
        {
            array_push($tasks, $allTasks[$index]);
        }
    }
*/

	return $tasks;
}



// --------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------

// Si aucune case à cocher n'est cochée, l'indice n'existera pas dans $_POST !
if(array_key_exists('indexes', $_POST) == true)
{
    // Chargement de toutes les tâches existantes.
    $allTasks = loadTasks();

    /*
     * Création d'une nouvelle liste de tâches ne comprenant que les tâches qui n'ont pas
     * été sélectionnées.
     *
     * Exemple : $allTasks contient une liste de 3 tâches, si on coche les tâches 1 et 3,
     * $indexes = [ 0, 2 ] et $tasks à la sortie contiendra une liste de tâches avec
     * uniquement la deuxième tâche (qui avait $index = 1).
     */
    $tasks = removeTasks($allTasks, $_POST['indexes']);

    // Sauvegarde de la nouvelle liste de tâches (les tâches qui n'ont pas été cochées).
    saveTasks($tasks);
}

/*
 * Redirection vers la page d'accueil.
 *
 * Il est impératif de rediriger en HTTP GET après l'envoi d'un formulaire en HTTP POST.
 * Cela s'appelle le Post-Redirect-Get ou PRG - Lire la page Wikipédia à ce sujet.
 */
header('Location: index.php');
exit();