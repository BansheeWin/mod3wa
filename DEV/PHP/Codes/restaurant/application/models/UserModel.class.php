<?php


class UserModel
{

    public function insertUser(array $values)
    {
        if ($this->login_exists($values[':email'])) {
            throw new DomainException('Un compte est deja associe à cette adresse mail');
        } else {
            $database = new Database();

            return $database->executeSql("INSERT INTO User
VALUES('',:firstName,:lastName,:email,:pwd,:birthDate,:address,:city,:zipCode,:country,:phone,NOW(),'')", $values);

        }

    }

    public function login_exists($email)
    {
        $database = new Database();
        $valeurs = $database->query("SELECT * FROM User");
        foreach ($valeurs as $valeur) {
            if ($email == $valeur['Email']) {
                return true;
            }
        }
    }

    public function setPassword($mdp)
    {
            return password_hash($mdp, PASSWORD_BCRYPT);
    }

    public function loginUser($email, $password)
    {

        $database = new Database();

        $sSql = "SELECT Id,Email,FirstName,LastName,Password 
        FROM User WHERE Email=?";
        $query = $database->queryOne($sSql, [$email]);

        if (password_verify($password, $query['Password'])) {
            return $query;
        } else {
            return null;
        }
    }
}