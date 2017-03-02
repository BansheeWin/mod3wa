'use strict';
var price;
var btn;
var cart;
var product;
btn = document.querySelector('.btn');
price = document.querySelector('.price h4');
cart = document.querySelector('#cart strong');
console.log(cart);
console.log(price);
//var turnObjToArray = function (obj) {
//    return [].map.call(obj, function (element) {
//        return element;
//    })
//};
function addCart() {
    var panier = Number(cart.dataset.prix);
    var total = panier + Number(price.dataset.prix);
    cart.innerHTML = formatPrice(total);
    cart.dataset.prix = total;
}

function formatPrice(nb) {
    return nb.toFixed(2).replace('.', ',') + ' €';
}
btn.addEventListener("click", addCart, false);