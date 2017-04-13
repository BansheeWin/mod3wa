<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 06/04/17
 * Time: 15:33
 */
class MealsController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $userSession = new UserSession();

        $mealsAdminModel = new MealsAdminModel();

        return [
            'meals' => $mealsAdminModel->listAll(),
            'isConnected' =>$userSession->isAuthenticated(),
            'userIdentity' =>$userSession->getFullName()
        ];

    }

    public function httpPostMethod(Http $http, array $formFields)
    {


    }
}