<?php
class MealController
{

    public function httpGetMethod(Http $http, array $queryFields)
    {
        $mealModel = new MealModel();
        if (!isset($queryFields['idMenu']))
        {
            //$meals     = $mealModel->listAll();

            return
                [
                    'meals'    => $mealModel->listAll()
                ];
        }
        else {
            // La je suis en Ajax
            $meal = $mealModel->getMenu($queryFields['idMenu']);
            $http->sendJsonResponse($meal);

        }
    }

}
