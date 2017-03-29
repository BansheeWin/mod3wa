<?php


class Rectangle
{
    private $sColor="blue";

    /**
     * @return string
     */
    public function getSColor()
    {
        var_dump($this->getMyColor());
    }

    /**
     * @param string $color
     */
    public function setSColor($color)
    {
        $this->sColor = $color;
    }
}