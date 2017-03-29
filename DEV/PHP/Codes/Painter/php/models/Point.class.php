<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 29/03/17
 * Time: 15:34
 */
class Point
{
    private $iX;
    private $iY;

    /**
     * Point constructor.
     * @param $x
     * @param $y
     */
    public function __construct()
    {
        $this->iX=0;
        $this->iY=0;
    }

    /**
     * @return mixed
     */
    public function getIX()
    {
        return $this->iX;
    }

    /**
     * @return mixed
     */
    public function getIY()
    {
        return $this->iY;
    }

    /**
     * @param $dx
     * @param $dy
     */
    public function move($dx, $dy){
        $this->iX += $dx;
        $this->iY += $dy;
    }

    /**
     * @param $dx
     * @param $dy
     */
    public function moveTo($dx, $dy){
        $this->iX = $dx;
        $this->iY = $dy;
    }






}