<?php
   function minutesToHours($minutes){
    
    $heure=intval($minutes/60);
    $minute= $minutes%60;
        if($minute<10){
        $minute= '0'.$minute;
    }
    return $heure.' h '.$minute ;
    
}