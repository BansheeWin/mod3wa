<?php


// Declaration de nos variables
$sText = '';
$sErrorMsg = '';


function translate($sText, $sLang) 
{
	$dictionary = 
	[
		'cat'    => 'chat',
		'dog'    => 'chien',
		'monkey' => 'singe',
		'sea'    => 'mer',
		'sun'    => 'soleil'
	];

	$sTrad = '';
	$sErrorMsg = '';

	// Inutile de array_flip si le mot est vide
	// si la traduction est demandée en anglais
	if ($sLang == 'EN') {
		// Je control que la valeur existe dans mon tableau
		if (in_array($sText, $dictionary)) 
		{
			$sTrad = array_search($sText, $dictionary);
		}
		else 
		{
			// sinon on ne connait pas ce mot ...
			// ... on enregistre dans $sErrorMsg le 
			// fait qu'on ne connait pas ce mot
			$sErrorMsg = 'Je ne connais pas ce mot.';
		}
	}
	// sinon en francais si la valeur du champ existe dans notre dictionnaire	
	elseif (array_key_exists($sText, $dictionary) ) 
	{
		// On enregistre la traduction dans la chaine $sText
		$sTrad = $dictionary[$sText];
	}
	else 
	{
		// sinon on ne connait pas ce mot ...
		// ... on enregistre dans $sErrorMsg le 
		// fait qu'on ne connait pas ce mot
		$sErrorMsg = 'Je ne connais pas ce mot.';
	}	
	
	
	return array( 
		'error'	=> $sErrorMsg,
		'trad'	=> $sTrad
	);
}


// Si on recoit une soummission de formulaire
if (sizeof($_POST) > 0) {
	
	// Si le champ text a été rempli
	if (!empty($_POST['word']) && !empty($_POST['direction'])) 
	{ 
        switch($_POST['direction']){
            case 'EN':
            $lang = "anglais";
            break;
            case 'FR':
            $lang = "français";
            break;
            
        }
		$aTab = translate(strtolower($_POST['word']), $_POST['direction']);

		$sText = "Le mot ' ".strtolower($_POST['word'])." ' vaut ' ".$aTab['trad']." ' en ".$lang;
		$sErrorMsg = $aTab['error'];
		
	} 
	// sinon le champ est vide
	else {
		// sinon le champ est vide on enregistre dans $sErrorMsg  
		$sErrorMsg = 'Vous devez rentrer un mot.';
	}
}
	



// affichage de la vue
include 'views/layout.phtml';