<?php


$aOrders = array();

$aOrders[] = array(
	'orderNumber'	=> 10100,
	'orderDate' 	=> '2003-01-06',
	'shippedDate'	=> '2003-01-10',
	'status' 		=> 'Shipped',
);

$aOrders[] = array(
	'orderNumber'	=> 10101,
	'orderDate' 	=> '2003-01-09',
	'shippedDate'	=> '2003-01-18',
	'status' 		=> 'Shipped',
);

$aOrders[] = array(
	'orderNumber'	=> 10102,
	'orderDate' 	=> '2003-01-10',
	'shippedDate'	=> '2003-01-18',
	'status' 		=> 'Shipped',
);

$aOrders[] = array(
	'orderNumber'	=> 10103,
	'orderDate' 	=> '2003-01-29',
	'shippedDate'	=> '2003-01-31',
	'status' 		=> 'Shipped',
);


include 'views/layout.phtml';