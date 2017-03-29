<?php

include 'views/index.phtml';
require 'php/models/Shape.class.php';
require 'php/models/Point.class.php';
require 'php/models/SvgRenderer.class.php';

require 'php/models/Rectangle.class.php';
require 'php/models/Square.class.php';
require 'php/models/Circle.class.php';

$circle = new Circle();
$square = new Square();
$rect = new Rectangle();

$rect->setSColor('yellow');
$rect->setOCoord(100,120);


var_dump($circle);
var_dump($square);
var_dump($rect);
