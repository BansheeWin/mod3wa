<?php
try {

    $oUserModel = new UserModel();
    $oUserModel->signUp();


// ici du coup on ne passe pas si login existe
    echo 'Le compte n\'existe pas encore';

} catch (DomainException $e) {
    echo $e->getMessage();
    /*
    return [
    'error_message' 	=>  $e->getMessage();
    ];*/
}

class  UserModel
{
    public function signUp()
    {

        if ($this->verifie_si_login_exists()) {
            throw new DomainException('Un compte est deja associe à cette adresse mail');
        }


// Mon inscription en SQL ICI
    }


    public function verifie_si_login_exists()
    {
        return false;
    }
}