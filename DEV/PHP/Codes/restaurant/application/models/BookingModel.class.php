<?php

class BookingModel
{


    public function createBooking($aValues)
    {
        $sSql="INSERT INTO Booking VALUES('',:bookingDate,:bookingTime,:bookingSeats,:userId,NOW())";
        $database = new Database();

        $database->executeSql($sSql,$aValues);
    }

    public function verifyDate($sDate)
    {

        if ($sDate < date('Y-m-d') ) {
            throw new DomainException('Vous ne pouvez pas commander dans le passé sans Delorean.');
        }

    }
}