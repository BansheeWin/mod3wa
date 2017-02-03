const TAUX_TVA = 20;
var montantHT;
var montantTTC;


montantHT = Math.round(window.prompt("Rentrer le montant hors taxe", 0));
montantTTC = (1 + TAUX_TVA / 100) * montantHT;

document.write("<h1> Calcul d'un prix TTC </h1>");
/********************************************
      Test de la valeur du prix HT

Affichage du prix HT et TTC si la valeur est supérieure à 0
Sinon affichage d'un message "d'erreur"
*********************************************/
if (montantHT > 0) {
    document.write("<p>Le montant HT est de : " + montantHT + " €</p>");
    document.write("<p>Le montant TTC est de : " + Math.round(montantTTC) + " €</p>");
} else if (isNaN(montantHT)) {
    document.write("<p>Saisissez un nombre </p>");

} else {
    document.write("<p>Saisissez un nombre positif</p>");
}
