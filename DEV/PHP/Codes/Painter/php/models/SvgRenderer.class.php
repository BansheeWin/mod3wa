<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 29/03/17
 * Time: 16:56
 */
class SvgRenderer
{
    protected $aResults;
    protected $aShapes;

    /**
     * SvgRenderer constructor.
     * @param $result
     * @param $shape
     */
    public function __construct()
    {
        $this->aResults = array();
        $this->aShapes = array();
    }

    public function addShape(Shape $shape)
    {
        $this->aShapes.array_push($shape);
    }
}