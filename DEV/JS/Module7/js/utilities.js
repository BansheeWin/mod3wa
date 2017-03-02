'use strict';
var rotate = 0;
/*Retourne un entier aléatoire entre le minimum et le maximum donné dans l'appel de la fonction */
/** min = int // max= int **/
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* Regroupe la recherche de l'element du DOM ainsi que l'ajout de l'ecouteur d'evenement qui lui est destiné */
/** selecteur= id/class d'un element du DOM
    type = evenement à controler
    action = fonction à exectuer **/
function eventListener(selecteur, type, action) {
    var objetDom;
    objetDom = document.querySelector(selecteur);
    objetDom.addEventListener(type, action);
}
/* Rotation de l'element et de sa couleur sur le cercle chromatique en fonction du scroll (sens des aiguilles d'une montre pour un scroll vers le bas et sens inverse pour un scroll vers le haut)*/
/** event = evenement **/
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
}