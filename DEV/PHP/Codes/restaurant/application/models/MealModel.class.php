<?php

class MealModel
{


    public function listAll()
    {

        $database = new Database();

        return $database->query('SELECT * FROM Meal');
    }

}