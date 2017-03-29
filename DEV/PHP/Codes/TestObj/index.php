<?php
header( 'content-type: text/html; charset=utf-8' );
//require 'php/models/Vehicule.class.php';
//require 'php/models/Moteur.class.php';
//$oMoteur = new Moteur(4,"115ch");
//$oVoiture = new Vehicule("rouge",$oMoteur,4,25,2);
//
//
//
//if (isset($_GET['color']))
//{
//    $oVoiture->setSColor($_GET['color']);
//}
//else {
//    $oVoiture->setSColor('rouge');
//}
//
//var_dump($oVoiture);
//$oVoiture->isFlatTires();
//var_dump($oVoiture);

require 'php/models/Rectangle.class.php';
require 'php/models/Carre.class.php';

$rect=new Rectangle();
$carr=new Carre();

echo($carr->getSColor());