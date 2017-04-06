<?php

class LoginController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        /*
         * Méthode appelée en cas de requête HTTP GET
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
         */
        $userSession = new UserSession();
        $isConnected=$userSession->isAuthenticated();

        if(isset($isConnected)&&$isConnected==true):
            $http->redirectTo('../');
        endif;
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        /*
         * Méthode appelée en cas de requête HTTP POST
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
         */
        $user= new UserModel();

        if(!empty($formFields['email'])&& !empty($formFields['email'])){
            $email=$formFields['email'];
            $pwd=$formFields['pwd'];


            $values=$user->loginUser($email,$pwd);

        }
        if($values!=null) {
            $userSession = new UserSession();

            $userSession->create($values['Id'], $values['FirstName'], $values['LastName'],
                $values['Email']);

            $http->redirectTo('../');
        }
        else{
            echo 'Réesaye';
        }

    }
}
