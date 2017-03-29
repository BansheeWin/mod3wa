<?php

class Moteur
{
    private $iCylinder;

    private $sPower;

    /**
     * Moteur constructor.
     * @param $iCylinder
     * @param $sPower
     */
    public function __construct($iCylinder, $sPower)
    {
        $this->iCylinder = $iCylinder;
        $this->sPower = $sPower;
    }

    /**
     * @return mixed
     */
    public function getICylinder()
    {
        return $this->iCylinder;
    }

    /**
     * @param mixed $iCylinder
     */
    public function setICylinder($iCylinder)
    {
        $this->iCylinder = $iCylinder;
    }

    /**
     * @return mixed
     */
    public function getSPower()
    {
        return $this->sPower;
    }

    /**
     * @param mixed $sPower
     */
    public function setSPower($sPower)
    {
        $this->sPower = $sPower;
    }

}