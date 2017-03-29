<?php

abstract class Shape
{

    protected $sColor;
    protected $iOpacity;

    /**
     * @param mixed $sColor
     */
    public function setSColor($sColor)
    {
        $this->sColor = $sColor;
    }

    /**
     * @param mixed $iOpacity
     */
    public function setIOpacity($iOpacity)
    {
        $this->iOpacity = $iOpacity;
    }

}