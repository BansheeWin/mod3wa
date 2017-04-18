<?php

namespace MyProject\Controller;

use Silex\Application;

class BonjourController{


    public function sayHello(Application $app,$firstName,$age)
    {
        if(!is_numeric($age)){
            return 'Saisissez un chiffre !';
        }
        else{
            if($age<18){
                return 'Get the fuck out !';
            }
            return "Hello ".$app->escape($firstName)." vous avez ".(int)$age." ans ";
        }

    }

}