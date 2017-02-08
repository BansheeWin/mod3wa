'use strict';
var voiture;
var jour;
var mois;
var annee;
voiture = new Object();
voiture = {
    "marque": "Ford"
    , "annee": 1969
    , "dateAchat": new Date('2016-5-12')
    , "passage": new Array("Toto", "Titi", "Tata")
};
/********************************************************************
        
            Récupération de la date et affectation aux variables
            
*********************************************************************/
jour = voiture.dateAchat.getDate();
mois = voiture.dateAchat.getMonth();
annee = voiture.dateAchat.getFullYear();
/********************************************************************
        
            Ecriture dans la page HTML
            
*********************************************************************/
document.write("<ul>" + "<li>Marque : " + voiture.marque + "</li>" + "<li>Année de fabrication : " + voiture.annee + "</li>" + "<li>Date d'achat : " + annee + "-" + mois + "-" + jour + "</li>" + "<li>Passagers : " + voiture.passage + "</li>" + "</ul>");