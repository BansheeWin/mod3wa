'use strict';
var photos;
var countSelect;
photos = document.querySelectorAll("#photo-list li");
countSelect = document.querySelector("#total small");

function onClickPhoto() {
    this.classList.toggle("selected");
    var selectedPhotos;
    selectedPhotos = document.querySelectorAll("#photo-list li.selected");
    countSelect.textContent = selectedPhotos.length;
}
for (var i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", onClickPhoto, false);
}