const TAUX_TVA = 20;
var montantHT;
var montantTTC;
var isRemise;
var remise;
var percentRemise;
isRemise = window.prompt("Possédez vous une remise ?", "non");
montantHT = Math.round(window.prompt("Rentrer le montant hors taxe", 0));
document.write("<h1> Calcul d'un prix TTC avec remise </h1>");
/********************************************
      Test de la valeur du prix HT

Affichage du prix HT et TTC si la valeur est supérieure à 0
Sinon affichage d'un message "d'erreur"
*********************************************/
if (montantHT > 0) {
    if (isRemise.toLowerCase() == "oui" || isRemise.toLowerCase() == "yes") {
        remise = parseFloat(window.prompt("Saisir le pourcentage de remise", 0));
        percentRemise = remise / 100;
        montantHT -= montantHT * percentRemise;
    }
    montantTTC = (1 + TAUX_TVA / 100) * montantHT;
    document.write("<p>Le montant HT est de : " + montantHT + " €</p>");
    if (isRemise.toLowerCase() == "oui" || isRemise.toLowerCase() == "yes") {
        document.write("<p>Le taux de remise est de : " + remise + " %</p>");
    }
    else {
        document.write("<p>Aucune remise n'a été appliqué");
    }
    document.write("<p>Le montant TTC est de : " + Math.round(montantTTC) + " €</p>");
}
else if (isNaN(montantHT)) {
    document.write("<p>Saisissez un nombre </p>");
}
else {
    document.write("<p>Saisissez un nombre positif</p>");
}