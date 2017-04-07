<?php

class BookingModel
{


    public function createBooking($aValues)
    {
        $sSql="INSERT INTO Booking VALUES('',:bookingDate,:bookingTime,:bookingSeats,:userId,NOW())";
        $database = new Database();

        $database->executeSql($sSql,$aValues);
    }

}