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
        $user= new UserSession();
        $userIdentity=$user->getFullName();
        $userEmail=$user->getEmail();
        $isConnected=$user->isAuthenticated();
        $mealModel = new MealModel();

        return [
            'userIdentity' => $userIdentity,
            'userEmail' => $userEmail,
            'isConnected' => $isConnected,
            'meals' => $mealModel->listAll()
        ];
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
            try {
                $idUser = $userModel->insertUser($insert);
                $user= new UserSession();
                $user->create($idUser,$formFields['firstName'],
                    $formFields['lastName'],$formFields['email']);
                $http->redirectTo('../');
            }
            catch(DomainException $e){
                return ['error_message' => $e->getMessage()];
            }

        }

    }
}
