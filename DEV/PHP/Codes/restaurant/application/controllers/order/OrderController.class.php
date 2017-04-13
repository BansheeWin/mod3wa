<?php

class OrderController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $oBasket = new BasketSession();
        $panier=$oBasket->getBasket();


        $oMealModel = new MealModel();

        $oUserSession = new UserSession();
        $oUser = new UsersAdminModel();
        $userId=$oUserSession->getUserId();
        $userInfos=$oUser->getOneUser($userId);
        $basket= [];
        foreach($panier as $i =>$item){

            $aTmp = $oMealModel->getMenu($i);
            $aTmp['Qte']=$panier[$i];
            $basket[]=$aTmp;
        }
        if (sizeof($panier) > 0 && $userId > 0) {
            $oOrderModel = new OrderModel();
            $oOrderModel->createCde($userId, $panier);
        }
        return [
            'basket' => $basket,
            'user' => $userInfos,
            'isConnected' =>$oUserSession->isAuthenticated(),
            'userIdentity' =>$oUserSession->getFullName()
        ];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {

    }
}