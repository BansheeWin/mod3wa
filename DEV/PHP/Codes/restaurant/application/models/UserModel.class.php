<?php


class UserModel
{

    public function insertUser(array $values)
    {

        $database = new Database();

        return $database->executeSql("INSERT INTO User 
VALUES('',:firstName,:lastName,:email,:pwd,:birthDate,:address,:city,:zipCode,:country,:phone,NOW(),'')",$values);


    }
}