<?php

class UsersController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $usersAdminModel = new UsersAdminModel();

        return [
            'users' => $usersAdminModel->listAll()
        ];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {

    }
}
