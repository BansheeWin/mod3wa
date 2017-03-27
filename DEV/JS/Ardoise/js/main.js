'use strict';
$(function () {
    var program = new Program();
    $('.pen-size').on('click', function(){
        var penSize=$(this).data('size');
        program.pen.setSize(penSize);
    });
    $('.pen-color').on('click', function(){
        var penColor=$(this).data('color');
        program.pen.setColor(penColor)
    });
    $('#tool-eraser').on('click', function(){
        var penColor="white";
        var penSize=20;
        program.pen.setSize(penSize);
        program.pen.setColor(penColor)
    });
    $('#tool-clear-canvas').on('click', function(){
        var width=program.slate.canvas.width;
        var height=program.slate.canvas.height;
        program.slate.context.clearRect(0,0,width,height);
    });
   
        


})
