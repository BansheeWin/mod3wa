'use strict';
var list;
var contenu;
var i;
var saisie;
//saisie = window.prompt("Quel élément voulez-vous retirer de la liste ?", "");
contenu = "";
list = new Array();
list = ["Tomate", "Ketchup", "Je sais pas", "Je sais vraiment pas"];
console.log(list);

function ajoutProduit(produit) {
    list.push(produit);
}

function supprimerProduit(produit) {
    var indexProd = list.indexOf(produit);
    if (indexProd === -1) {
        console.log("L'élement n'existe pas");
    }
    else {
        list.splice(indexProd, 1);
    }
}

function afficherContenu() {
    for (i = 0; i < list.length; i++) {
        contenu += '<p>' + list[i] + '</p>';
    }
    document.write(contenu);
}

function supprimerTout() {
    list.splice(0, list.length);
}
supprimerProduit(saisie);
console.log(list);