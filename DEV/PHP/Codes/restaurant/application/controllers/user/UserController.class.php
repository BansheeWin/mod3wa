<?php

class UserController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        /*
         * Méthode appelée en cas de requête HTTP GET
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
         */
        $user = new UserSession();
        if(!empty($_SESSION)){

            echo 'Bonjour ' . $user->getFullName();
        }
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        /*
         * Méthode appelée en cas de requête HTTP POST
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
         */

        if(!empty($formFields['firstName'])){
            $userModel = new UserModel();
            $insert = array(
                ':firstName' => $formFields['firstName'],
                ':lastName' => $formFields['lastName'],
                ':email' => $formFields['email'],
                ':pwd' => $userModel->setPassword($formFields['pwd']),
                ':birthDate' => $formFields['birthDate'],
                ':address' => $formFields['address'],
                ':city' => $formFields['city'],
                ':zipCode' => $formFields['zipCode'],
                ':country' => $formFields['country'],
                ':phone' => $formFields['phone'],

            );


            $userModel->insertUser($insert);
        }
        header('Location:');
    }
}
