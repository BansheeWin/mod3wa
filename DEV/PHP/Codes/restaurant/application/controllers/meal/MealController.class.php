<?php
class MealController
{

    public function httpGetMethod(Http $http, array $queryFields)
    {
        $mealModel = new MealModel();
        $userSession=new UserSession();

        if (!isset($queryFields['idMenu']))
        {
            //$meals     = $mealModel->listAll();

            return
                [
                    'meals'    => $mealModel->listAll(),
                    'isConnected' =>$userSession->isAuthenticated(),
                    'userIdentity' =>$userSession->getFullName()

                ];
        }
        else {
            // La je suis en Ajax
            $meal = $mealModel->getMenu($queryFields['idMenu']);
            $http->sendJsonResponse($meal);

        }
    }

}
