<?php

include 'utilities.php';

function addTask($sTitle, $sDescription, $sDate, $iPriority) 
{
	//var_dump($sTitle, $sDescription, $sDate, $iPriority);
    $aDataCsv = array ($sTitle,$sDescription,$sDate,$iPriority);
    saveInCsv($aDataCsv);
}

if (  !empty($_POST['title']) && 
    isset($_POST['message']) &&
    isset($_POST['date']) && 
    isset($_POST['important'])
   ) {
	addTask($_POST['title'], $_POST['message'], $_POST['date'], $_POST['important']);

}
	header('location:../index.php'); 
exit();