<?php

define('ROOT_DIR',__DIR__);
// Chargement du fichier d'autoload généré par Composer.
include __DIR__.'/../vendor/autoload.php';


// Annonce au PHP que la classe Application se trouve dans un namespace Silex
use Silex\Application;

// Instancie la classe Application (qui se trouve dans le namespace Silex)
$app = new Application();

$app->get('/hello/{firstName}/{age}', 'MyProject\Controller\BonjourController::sayHello')
    ->assert('age', '\d+')
    ->value('firstName','Garry')
    ->value('age','20');

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views'));

$app->get('/', 'MyProject\Controller\HomeController::httpGetMethod');
$app->post('/', 'MyProject\Controller\HomeController::httpPostMethod');
$app['debug'] = true;
$app->run();