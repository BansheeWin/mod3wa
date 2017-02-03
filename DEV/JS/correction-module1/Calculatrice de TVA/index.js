'use strict';   // Mode strict du JavaScript

// Déclaration d'une constante.
const TAUX_DE_TVA = 20.0;

// Déclaration de trois variables.
var montantHT;
var montantTTC;
var montantTVA;


// Demande le montant HT à l'utilisateur.
montantHT = window.prompt('Quel est le montant HT ?');
montantHT = parseFloat(montantHT);

/*
 * Les deux lignes du dessus peuvent être réduites également en une seule :
 * montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
 *
 * Le code se lit et s'exécute de l'intérieur des parenthèses vers l'extérieur.
 */


// Calcul du montant de TVA et du montant TTC final.
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

// Affichage du résultat directement dans la page HTML.
document.write
(
    '<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>'
);
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');



//
// Bonus : demander également le taux de TVA à l'utilisateur (ce n'est plus une constante).
//