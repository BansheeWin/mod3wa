<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 06/04/17
 * Time: 15:41
 */
class UsersAdminModel
{
    public function listAll()
    {

        $database = new Database();

        return $database->query('SELECT * FROM User');
    }

    public function deleteUser($id){
        $database = new Database();

        return $database->queryOne('DELETE FROM User WHERE Id=?',[$id]);
    }
}