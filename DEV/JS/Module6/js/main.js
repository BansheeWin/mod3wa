'use strict';
var photos;
var countSelect;
photos = document.querySelectorAll("#photo-list li");
countSelect = document.querySelector("#total small");

function onClickPhoto(event) {
    if (event.button == 0) {
        this.classList.toggle("selected");
        var selectedPhotos;
        selectedPhotos = document.querySelectorAll("#photo-list li.selected");
        countSelect.textContent = selectedPhotos.length;
        console.log(event.button);
    }
    if (event.button == 1) {
        this.style.transform = "rotate(0deg)";
    }
}

function rotatePhoto(event) {
    var toto = 0;
    if (event.deltaY >= 0) {
        this.style.transform += "rotate(10deg)";
    }
    else {
        this.style.transform += "rotate(-10deg)";
    }
    console.log(event);
}
for (var i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", onClickPhoto, false);
    photos[i].addEventListener("wheel", rotatePhoto, false);
}