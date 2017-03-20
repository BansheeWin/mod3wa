<?php
header("Content-type: text/javascript");
$contactList = 
[
    [ 'firstName' => 'Tom',       'phone' => '0102030405' ],
    [ 'firstName' => 'Joana',     'phone' => '0102233445' ],
    [ 'firstName' => 'Catherine', 'phone' => '0605455548' ]
];

$json_data=json_encode($contactList);
echo $json_data;