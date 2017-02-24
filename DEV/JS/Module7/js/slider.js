'use strict';
var slides;
const ESPACE = 32;
const GAUCHE = 37;
const DROITE = 39;
const HAUT = 38;
const BAS = 40;
var rotate = 0;
slides = [
    {
        image: 'images/1.jpg'
        , legend: 'Street Art'
    }
    , {
        image: 'images/2.jpg'
        , legend: 'Fast Lane'
    }
    , {
        image: 'images/3.jpg'
        , legend: 'Colorful Building'
    }
    , {
        image: 'images/4.jpg'
        , legend: 'Skyscrapers'
    }
    , {
        image: 'images/5.jpg'
        , legend: 'City by night'
    }
    , {
        image: 'images/6.jpg'
        , legend: 'Tour Eiffel la nuit'
    }
];
var etat;

function rotateSlider(event) {
    if (event.deltaY >= 0) {
        rotate += 10;
        this.style.transform = "rotate(" + rotate + "deg)";
        this.style.filter = "hue-rotate(" + rotate + "deg)";
    }
    else {
        rotate -= 10;
        this.style.transform = "rotate(" + rotate + "deg)";
        this.style.filter = "hue-rotate(" + rotate + "deg)";
    }
    console.log(event);
}

function onSliderNext() {
    etat.index++;
    if (etat.index == slides.length) {
        etat.index = 0;
    }
    refreshSlider();
}

function onSliderFirst() {
    etat.index = 0;
    refreshSlider();
}

function onSliderPrevious() {
    etat.index--;
    if (etat.index < 0) {
        etat.index = slides.length - 1;
    }
    refreshSlider();
}

function onSliderLast() {
    etat.index = 6;
    refreshSlider();
}

function onSliderRandom() {
    var index;
    do {
        index = getRandomInteger(0, slides.length - 1);
    }
    while (index == etat.index);
    etat.index = index;
    refreshSlider();
}

function onSliderKeyUp(event) {
    switch (event.keyCode) {
    case DROITE:
        onSliderNext();
        break;
    case ESPACE:
        onSliderToggle();
        break;
    case GAUCHE:
        onSliderPrevious();
        break;
    case BAS:
        onSliderPrevious();
        break;
    case HAUT:
        onSliderPrevious();
        break;
    }
}

function onSliderToggle() {
    var icon;
    icon = document.querySelector('#slider-toggle i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');
    if (etat.timer == null) {
        etat.timer = window.setInterval(onSliderNext, 2000);
        this.title = 'Arrêter le carrousel';
    }
    else {
        window.clearInterval(etat.timer);
        etat.timer = null;
        this.title = 'Démarrer le carrousel';
    }
}

function onToolbarToggle() {
    var icon;
    icon = document.querySelector('#toolbar-toggle i');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
    document.querySelector('.toolbar ul').classList.toggle('hide');
}

function refreshSlider() {
    var sliderImage;
    var sliderLegend;
    sliderImage = document.querySelector('#slider img');
    sliderLegend = document.querySelector('#slider figcaption');
    sliderImage.src = slides[etat.index].image;
    sliderLegend.textContent = slides[etat.index].legend;
}
etat = {};
etat.index = 0;
etat.timer = null;
eventListener('#slider-random', 'click', onSliderRandom);
eventListener('#slider-previous', 'click', onSliderPrevious);
eventListener('#slider-next', 'click', onSliderNext);
eventListener('#slider-toggle', 'click', onSliderToggle);
eventListener('#toolbar-toggle', 'click', onToolbarToggle);
eventListener('#slider', 'wheel', rotateSlider);
document.addEventListener('keyup', onSliderKeyUp);
refreshSlider();