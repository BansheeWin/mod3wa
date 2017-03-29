<?php

class Vehicule
{

    private $sColor;
    public $oMoteur;
    private $iNbRoues;
    private $iFlatTires;
    private $iSpareWheel;

    /**
     * Vehicule constructor.
     * @param $sColor
     * @param $oMoteur
     * @param $iNbRoues
     * @param $flatTires
     * @param $iSpareWheel
     */
    public function __construct($sColor, $oMoteur, $iNbRoues, $flatTires, $iSpareWheel)
    {
        $this->sColor = $sColor;
        $this->oMoteur = $oMoteur;
        $this->iNbRoues = $iNbRoues;
        $this->iFlatTires = $flatTires;
        $this->iSpareWheel = $iSpareWheel;
    }


    /**
     * @return mixed
     */
    public function getSColor()
    {
        return $this->sColor;
    }

    /**
     * @param mixed $sColor
     */
    public function setSColor($sColor)
    {
        $this->sColor = $sColor;
    }

    /**
     * @return mixed
     */
    public function getIFlatTires()
    {
        return $this->iFlatTires;
    }

    /**
     * @param mixed $flatTires
     */
    public function setIFlatTires($flatTires)
    {
        $this->iFlatTires = $flatTires;
    }

    /**
     * @return mixed
     */
    public function getISpareWheel()
    {
        return $this->iSpareWheel;
    }

    /**
     * @param mixed $iSpareWheel
     */
    public function setISpareWheel($iSpareWheel)
    {
        $this->iSpareWheel = $iSpareWheel;
    }

    /**
     * @return mixed
     */
    public function getINbRoues()
    {
        return $this->iNbRoues;
    }

    /**
     * @param mixed $iNbRoues
     */
    public function setINbRoues($iNbRoues)
    {
        $this->iNbRoues = $iNbRoues;
    }

    public function isFlatTires(){
        if($this->iFlatTires<$this->iNbRoues) {
            $iMissing = $this->iFlatTires - $this->iSpareWheel;
            if ($this->iFlatTires >= 1) {
                if ($this->isSpareWheel() >= $this->iFlatTires) {
                    $this->iSpareWheel = $this->iSpareWheel - $this->iFlatTires;
                    $this->iFlatTires = 0;
                    echo 'Les réparations ont été effectuées';
                    echo "</br>Roues de secours restantes : $this->iSpareWheel";
                } else {
                    echo "Impossible de changer les pneus crevées (il manque : " . $iMissing . " roue(s) de secours)";
                }
            } else {
                echo 'Pas de roues crevées';
            }
        }
        else{
            echo "Sérieux comment t'as fait pour crever $this->iFlatTires pneus";
        }

    }
    public function isSpareWheel(){
        if($this->iSpareWheel>1){
            return $this->iSpareWheel;
        }
        else{
            return 0;
        }
    }



}