<?php

class UsersController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $usersAdminModel = new UsersAdminModel();
        $userSession = new UserSession();
        $userActuel=$userSession->getUserId();
        if(isset($queryFields['id'])&&$queryFields['id']!=$userActuel){
            $usersAdminModel->deleteUser($queryFields['id']);
        }elseif(isset($queryFields['id'])&&$queryFields['id']==$userActuel){
            echo 'Tu peux pas supprimer ton compte';
        }
        return [
            'users' => $usersAdminModel->listAll()
        ];

    }

    public function httpPostMethod(Http $http, array $formFields)
    {

    }
}
