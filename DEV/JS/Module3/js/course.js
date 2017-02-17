'use strict';
var list;
var contenu;
var i;
var saisie;
saisie = window.prompt("Quel élément voulez-vous retirer de la liste ?", "");
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
        console.log("L'élement " + produit + " n'existe pas dans la liste");
    }
    else {
        list.splice(indexProd, 1);
    }
}

function afficherContenu() {
    for (i = 0; i < list.length; i++) {
        contenu += '<p>' + list[i] + '</p>';
    }
    document.write("<h1>Votre liste de courses contient " + list.length + " éléments: </h1>" + contenu);
}

function supprimerTout() {
    list = [];
}
supprimerProduit(saisie);
console.log(list);
afficherContenu();
supprimerTout();
console.log(list);