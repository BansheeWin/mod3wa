<?php
class BasketController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $oBasket = new BasketSession();
    $oUserSession = new UserSession();
        // On crée une instance de MealModel
        $oMealModel = new MealModel();

        if (isset($queryFields['delete'])) {
            $oBasket->deleteProduct($queryFields['delete']);
        }elseif (isset($queryFields['qte']) 				// verifie si on a recu le GET qte
            && $queryFields['qte'] >= 1 			// verifie si le GET qte est superieur ou egale a 1
            && ctype_digit($queryFields['qte']) 	// verifie si le GET qte est un entier
            && isset($queryFields['idMeal'])		// verifie si on a recu le GET idMeal
        )
        {
            // Verifie si le Menu existe en BDD
            $bExists = $oMealModel->getMenu($queryFields['idMeal']);

            if ($bExists != null) {
                // On peut ajouter a notre session
                $oBasket->setBasket($queryFields['idMeal'],$queryFields['qte']);
            }
        }

        // Recuperation des donnees dans la vues
        $aContentBasket = $oBasket->getBasket();
        $aDataBasket = array();


        //--- On va boucler sur $aContentBasket pour remplir la valeur $aDataBasket
        //--- pour obtenir les infos des "Meals" (Name, SalePrice, Photo)
        foreach ($aContentBasket as $iIdMeal => $iQte)
        {
            $aTmp = $oMealModel->getMenu($iIdMeal);
            if ($aTmp != null) {
                // $aTmp['Id'], $aTmp['Name'], $aTmp['Photo'], $aTmp['SalePrice'], ...
                $aTmp['Qte'] = $iQte;


                array_push($aDataBasket, $aTmp); // ou $aDataBasket[] = $aTmp;
            }
        }

        // permet de gerer le mode ajax et template complet
        if (isset($queryFields['ajaxMode'])) {
            // On envoi nos donnees (les infos des menus) à la vue
            return [
                'basket' 		=> $aDataBasket,
                '_raw_template'	=> true,
                'isConnected' =>$oUserSession->isAuthenticated(),
                'userIdentity' =>$oUserSession->getFullName()
            ];
        } else {
            return ['basket' => $aDataBasket,
                'isConnected' =>$oUserSession->isAuthenticated(),
                'userIdentity' =>$oUserSession->getFullName()
            ];
        }

    }

    public function httpPostMethod(Http $http, array $aPost)
    {
        /*
         * Méthode appelée en cas de requête HTTP POST
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
         */
    }
}

