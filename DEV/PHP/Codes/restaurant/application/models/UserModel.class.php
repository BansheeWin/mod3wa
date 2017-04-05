<?php


class UserModel
{

    public function insertUser(array $values)
    {

        $database = new Database();

        return $database->executeSql("INSERT INTO User 
VALUES('',:firstName,:lastName,:email,:pwd,:birthDate,:address,:city,:zipCode,:country,:phone,NOW(),'')",$values);


    }

    public function setPassword($mdp){
        return password_hash($mdp,PASSWORD_BCRYPT);
    }

    public function loginUser($email,$password){

        $database = new Database();

        $sSql="SELECT Id,Email,FirstName,LastName,Password 
        FROM User WHERE Email=?";
        $query=$database->queryOne($sSql,[$email]);

        if(password_verify($password,$query['Password'])){
            return $query;
        }
        else
        {
            return null;
        }
    }
}