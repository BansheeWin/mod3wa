<?php

class OrderModel
{

    public function createCde($iIdUser, array $aDataPanier)
    {
        $aDataBasket = array();

        $oMealModel = new MealModel();
        $fTotal = 0;
        foreach ($aDataPanier as $iIdMeal => $iQte) {
            $aInfosMenu =$oMealModel->getMenu($iIdMeal);

            $aTmp = [];

            if ($aInfosMenu  != null) {
                $fTotal += $aInfosMenu['SalePrice']*$iQte;
                // $aTmp['Id'], $aTmp['Name'], $aTmp['Photo'], $aTmp['SalePrice'], ...
                $aTmp[':Meal_Id'] = $iIdMeal;
                $aTmp[':PriceEach'] = $aInfosMenu['SalePrice'];
                $aTmp[':QuantityOrdered'] = $iQte;

                $aDataBasket[] = $aTmp;
            }
        }

        $aDataOrder = [
            ':TaxAmount'	=> ($fTotal*5.5)/100,
            ':TaxRate'		=> 5.5,
            ':TotalAmount'	=> ($fTotal*1.055),
            ':User_Id'		=> $iIdUser
        ];

        $iIdCde = $this->addOrder($aDataOrder);


        if ($iIdCde > 0) {

        foreach ($aDataBasket as $aLine) {
            $aLine = array_merge([':Order_Id' => $iIdCde], $aLine);
            $this->addOrderLine($aLine);
        }
    }
}


    private function addOrder(array $aData)
    {
        $sSql = 'INSERT INTO `Order` 
		
			(User_Id,TotalAmount,TaxRate,TaxAmount, CreationTimestamp, CompleteTimestamp) 
			
			VALUES (
			    :User_Id,
			    :TotalAmount,
			    :TaxRate,
				:TaxAmount,
				NOW(),
				NOW()
			)';

        $database = new Database();
        return $database->executeSql($sSql, $aData);
    }


    private function addOrderLine(array $aData)
    {
        $sSql = 'INSERT INTO `OrderLine`

			(QuantityOrdered, Meal_Id, Order_Id, PriceEach)

			VALUES (
				:QuantityOrdered,
				:Meal_Id,
				:Order_Id,
				:PriceEach
			)';

        $database = new Database();
        return $database->executeSql($sSql, $aData);
    }


}