'use strict';
var voiture;
var monthNames;
var jour;
var mois;
var annee;

voiture={};

monthNames[0] = 'Janvier';
monthNames[1] = 'Février';
monthNames[2] = 'Mars';
monthNames[3] = 'Avril';
monthNames[4] = 'Mai';
monthNames[5] = 'Juin';
monthNames[6] = 'Juillet';
monthNames[7] = 'Août';
monthNames[8] = 'Septembre';
monthNames[9] = 'Octobre';
monthNames[10] = 'Novembre';
monthNames[11] = 'Décembre';

voiture.marque="Ford";
voiture.annee="1969";
voiture.datachat=new Date(2016,5,12);
voiture.passage=new Array("Toto","Titi");


jour = voiture.datachat.getDate();
mois = voiture.datachat.getMonth();
annee = voiture.datachat.getFullYear();


console.log(voiture.marque);
console.log(voiture.annee);
console.log(jour+" "+mois+" "+annee);
console.log(voiture.passage);
