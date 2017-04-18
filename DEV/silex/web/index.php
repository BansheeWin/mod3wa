<?php


// Chargement du fichier d'autoload généré par Composer.
include __DIR__.'/../vendor/autoload.php';


// Annonce au PHP que la classe Application se trouve dans un namespace Silex
use Silex\Application;

// Instancie la classe Application (qui se trouve dans le namespace Silex)
$app = new Application();

$app->get('/hello/{firstName}/{age}', 'MyProject\Controller\BonjourController::sayHello')
    ->assert('age', '\d{2}')
    ->bind('user')
    ->value('firstName','Garry')
    ->value('age','20');

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views'));

$app->get('/', function() use ($app) {
	return $app['twig']->render('homePage.html.twig');
});

$app['debug'] = true;
$app->run();