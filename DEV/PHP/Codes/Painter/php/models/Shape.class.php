<?php


abstract class Shape
{

    protected $sColor;
    protected $oCoords;
    protected $fOpacity;

    /**
     * Shape constructor.
     * @param $sColor
     * @param $oCoords
     * @param $fOpacity
     */
    public function __construct()
    {
        $this->sColor = 'black';
        $this->oCoords = new Point();
        $this->fOpacity = '1';
    }


    //abstract public function draw($arg);
    /**
     * @param mixed $sColor
     */
    public function setSColor($sColor)
    {
        $this->sColor = $sColor;
    }

    /**
     * @param $x
     * @param $y
     */
    public function setOCoord($x, $y){
        $this->oCoords->moveTo($x,$y);
    }
    /**
     * @param mixed $fOpacity
     */
    public function setFOpacity($fOpacity)
    {
        $this->fOpacity = $fOpacity;
    }

}