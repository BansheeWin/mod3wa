<?php
include 'inc/utilities.php';

function remove(array $aTmpTasks, array $aListDelete){
    $aTasks=array();

    foreach ($aTmpTasks as $iIndex => $aCols) 
	   {
		  if (!isset($_POST['tasks'][$iIndex] )) 
          {
                array_push($aTasks, $aCols);
		  }
	   }
    return $aTasks;
}

if (isset($_POST['tasks'])) {
	
	$aTmpTasks = loadTasks();
	
	$aTasks = remove($aTmpTasks, $_POST['tasks']);
	
	saveTasks($aTasks);
}
header('location:index.php'); 
exit();