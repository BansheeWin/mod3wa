<?php
/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 20/04/17
 * Time: 15:54
 */

namespace MyProject\Controller;
use Silex\Application as App;
use Symfony\Component\HttpFoundation\Request;

class HomeController
{
    public function homeRun(App $app, Request $request)
    {

        return $app['twig']->render(
            'homePage.html.twig'
        );
    }
}