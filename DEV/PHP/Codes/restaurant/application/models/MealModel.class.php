<?php

class MealModel
{


    public function listAll()
    {

        $database = new Database();

        return $database->query('SELECT * FROM Meal');
    }
    public function getMenu($iIdMenu)
    {


        $database = new Database();
        $sSql = 'SELECT * FROM Meal WHERE Id=:MonMenu';
        return $database->queryOne($sSql, [':MonMenu' => $iIdMenu]);
        // OU
        // $sSql = 'SELECT * FROM Meal WHERE Id=?';
        // $database->queryOne($sSql, [$iIdMenu]);
    }
}