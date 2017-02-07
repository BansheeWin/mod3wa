'use strict';
var voiture;
var jour;
var mois;
var annee;
voiture = new Object();
voiture.marque = "Ford";
voiture.annee = "1969";
voiture.datachat = new Date('2016-5-12');
voiture.passage = new Array("Toto", "Titi");
/********************************************************************
        
            Récupération de la date et affectation aux variables
            
*********************************************************************/
jour = voiture.datachat.getDate();
mois = voiture.datachat.getMonth();
annee = voiture.datachat.getFullYear();
/********************************************************************
        
            Ecriture dans la page HTML
            
*********************************************************************/
document.write("<p>Marque : " + voiture.marque + "</p>");
document.write("<p>Année de fabrication : " + voiture.annee + "</p>");
document.write("<p>Date d'achat : " + annee + "-" + mois + "-" + jour + "</p>");
document.write("<p>Passagers : " + voiture.passage + "</p>");