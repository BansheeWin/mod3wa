<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 06/04/17
 * Time: 15:33
 */
class BookingsController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $bookingsAdminModel = new BookingsAdminModel();
        $userSession = new UserSession();

        return [
            'bookings' => $bookingsAdminModel->listAll(),
            'isConnected' =>$userSession->isAuthenticated(),
            'userIdentity' =>$userSession->getFullName()];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {


    }
}