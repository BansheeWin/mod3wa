'use strict';
var button;
var rectangle;
button = document.getElementById('toggle-rectangle');
console.log(button);
rectangle = document.querySelector('.rectangle');
console.log(rectangle);
/*Affiche ou masque le rectangle au click sur le bouton*/
function toggleRectangle() {
    rectangle.classList.toggle('hide');
}
/*Change la couleur du rectangle au passage de la souris*/
function onMouseInRectangle() {
    rectangle.classList.toggle('important');
}
/*Quand la souris n'est plus sur le rectangle il reprend son style de base*/
function onMouseOutRectangle() {
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
}
/*Change la couleur du rectangle au double click de la souris dessus*/
function onDoubleClickRectangle() {
    rectangle.classList.toggle('good');
}
button.addEventListener("click", toggleRectangle, false);
rectangle.addEventListener("mouseover", onMouseInRectangle, false);
rectangle.addEventListener("mouseout", onMouseOutRectangle, false);
rectangle.addEventListener("dblclick", onDoubleClickRectangle, false);