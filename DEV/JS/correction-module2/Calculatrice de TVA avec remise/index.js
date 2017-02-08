'use strict';   // Mode strict du JavaScript

// Déclaration d'une constante.
const TAUX_DE_TVA = 20.0;

// Déclaration de cinq variables.
var demandeRemise;
var montantHT;
var montantTTC;
var montantTVA;
var pourcentageRemise;


// Demande le montant HT à l'utilisateur.
montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));

// Demande s'il y a une remise l'utilisateur.
demandeRemise = window.prompt('Souhaitez-vous une remise ?');

// Est-ce que l'utilisateur souhaite une remise ?
if(demandeRemise == 'oui' || demandeRemise == 'yes')
{
    // Demande le pourcentage de remise à l'utilisateur.
    pourcentageRemise = parseFloat(window.prompt('Montant de la remise en % :'));

    // Mise à jour du montant HT en appliquant une remise.
    montantHT = montantHT - (montantHT * pourcentageRemise / 100);

    /*
     * La ligne de code ci-dessus peut également s'écrire comme ceci :
     *
     * montantHT -= montantHT * pourcentageRemise / 100;
     */
}


// Calcul du montant de TVA et du montant TTC final.
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

// Affichage du résultat directement dans la page HTML.
document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

if(demandeRemise == 'oui' || demandeRemise == 'yes')
{
    document.write('<p>Une remise de ' + pourcentageRemise + '% a été appliquée sur le montant HT.</p>');
}
else
{
    document.write("<p>Aucune remise n'a été appliquée.</p>");
}