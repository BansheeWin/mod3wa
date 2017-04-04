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
            $insert = array(
                ':firstName' => $formFields['firstName'],
                ':lastName' => $formFields['lastName'],
                ':email' => $formFields['email'],
                ':pwd' => $formFields['pwd'],
                ':birthDate' => $formFields['birthDate'],
                ':address' => $formFields['address'],
                ':city' => $formFields['city'],
                ':zipCode' => $formFields['zipCode'],
                ':country' => $formFields['country'],
                ':phone' => $formFields['phone'],

            );
            $userModel = new UserModel();

            $userModel->insertUser($insert);
        }
        header('Location: user');
    }
}
