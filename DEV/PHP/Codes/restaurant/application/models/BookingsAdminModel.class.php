<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 07/04/17
 * Time: 15:39
 */
class BookingsAdminModel
{
    public function listAll()
    {

        $database = new Database();

        return $database->query('SELECT * FROM Booking ORDER BY BookingDate');
    }

}