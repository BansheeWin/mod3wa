'use strict';

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eventListener(selecteur, type, action) {
    var objetDom;
    objetDom = document.querySelector(selecteur);
    objetDom.addEventListener(type, action);
}