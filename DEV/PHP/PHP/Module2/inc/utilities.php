<?php

	const FILENAME = 'todolist.csv';


function saveInCsv(array $aDataCsv)
{
    $rFile = fopen(FILENAME, 'a+');
	fputcsv($rFile,$aDataCsv);
    fclose($rFile);    
}
function saveTasks(array $aDatas){
    $fp = fopen('inc/todolist.csv', 'w');

    foreach ($aDatas as $fields) {
        fputcsv($fp, $fields);
    }

    fclose($fp);
}
function addTask($sTitle, $sDescription, $sDate, $iPriority) 
{
    $aDataCsv = array ($sTitle,$sDescription,$sDate,$iPriority);
    saveInCsv($aDataCsv);
}
// Lire le contenu du fichier csv
function loadTasks()
{
	// variable imposé par Tommy
	$aTasks = array();
	
	// Ouverture du fichier
	$rFile = fopen('inc/todolist.csv', 'r');
	
	// boucler à l' "infini"
	while (true)
	{
		// On lit le fichier ligne par ligne et enregistre dans une variable temporaire
		// @see : http://php.net/manual/fr/function.fgetcsv.php
		$aTmpTasks = fgetcsv($rFile);
		
		// si la variable temporaire retourne false (via fgetcsv)
		if ($aTmpTasks == false) {
			// c'est la fin du fichier
			break;
		}
		
		// on peut enregistrer la ligne (tableau) dans notre variable
		// l'index s'auto increment
		$aTasks[] = $aTmpTasks;
	}
	
	// Fermeture du fichier pour libérer la mémoire
	fclose($rFile);	
	// Retourne la liste des données récupérées
	return $aTasks;	
}

function removeAll(){
    unlink('todolist.csv');
}
?>