<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 07/04/17
 * Time: 13:23
 */
class BookingController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $userSession=new UserSession();
        return[
            'isConnected' =>$userSession->isAuthenticated(),
            'userIdentity' =>$userSession->getFullName()
        ];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        $userSession=new UserSession();
        $bookingModel = new BookingModel();

        if(!empty($formFields['bookingDate'])){
            $insert = array(
                ':bookingDate' => $formFields['bookingDate'],
                ':bookingTime' => $formFields['bookingTime'],
                ':bookingSeats' => $formFields['bookingSeats'],
                ':userId' => $userSession->getUserId(),
                'isConnected' =>$userSession->isAuthenticated(),
                'userIdentity' =>$userSession->getFullName()
            );
            try {
                $bookingModel->createBooking($insert);
                $http->redirectTo('../');
            } catch (DomainException $e) {
                return ['error_message' => $e->getMessage()];
            }
        }

    }
}