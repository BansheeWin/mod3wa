<?php

	const FILENAME = 'todolist.csv';


function saveInCsv(array $aDataCsv)
{
    $rFile = fopen(FILENAME, 'a+');
	fputcsv($rFile,$aDataCsv);
    fclose($rFile);
    echo 'Ca a marché !';
}

function loadContent(){
if (($handle = fopen("inc/todolist.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        echo "---------<br>";
        for ($c=0; $c < $num; $c++) {
            echo $data[$c] . "<br />\n";
        }
    }
    fclose($handle);
}
}
?>