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
        var penSize=20;
        program.pen.setSize(penSize);
        program.pen.setColor("white");
        program.pen.setShape("pen");
    });
    $('#tool-clear-canvas').on('click', function(){
        var width=program.slate.canvas.width;
        var height=program.slate.canvas.height;
        program.slate.context.clearRect(0,0,width,height);
        program.pen.setSize(2);
        program.pen.setColor("black");
        program.pen.setShape("pen");
    });
    $('#square').on('click', function(){
        program.pen.setShape("square");
    });
    $('#line').on('click', function(){
        program.pen.setShape("line");
    });
    $('#circle').on('click', function(){
        program.pen.setShape("circle");
    });
    $('#pen').on('click', function(){
        program.pen.setShape("pen");
    });
    $('#color').on('change',function(){
        program.pen.setColor($(this).val());
    });
    
    $('#tool-color-picker').on('click',function(){
        $('#color-palette').toggle('slow');
    })
    
   program.start();
});
