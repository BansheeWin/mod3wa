'use strict';
var weekDays;
var monthNames;
var dayToday;
var date;
var jourSem
var jour;
var mois;
var annee;
var heure;
var minute;
var autreDate;
var diffh;
var diffm;
var heured;
var minuted;

// Affectation de deux tableaux vides à deux variables.
weekDays = new Array();
monthNames = new Array();
date = new Date();
autreDate = new Date(2017, 2, 3, 17, 30, 0);
// Affectation de valeurs au tableau.
weekDays[0] = 'Dimanche';
weekDays[1] = 'Lundi';
weekDays[2] = 'Mardi';
weekDays[3] = 'Mercredi';
weekDays[4] = 'Jeudi';
weekDays[5] = 'Vendredi';
weekDays[6] = 'Samedi';


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

//Récupération des valeurs du jour actuel
jourSem = date.getDay();
jour = date.getDate();
mois = date.getMonth();
annee = date.getFullYear();
heure = date.getHours();
minute = date.getMinutes();

//Test de la valeur des minutes si inférieur à 10 ajout d'un 0 devant la valeur récupérée
if (minute < 10) {
    minute = "0" + minute;
}

//Récupération de l'heure/minute de la date préalablement remplie
heured = autreDate.getHours();
minuted = autreDate.getMinutes();

//Calcul de la différence de temps entre les deux dates
diffh = heure - heured;
diffm = minuted - minute;

//Concaténation de la date en francais et affichage
dayToday = "Nous sommes le " +
    weekDays[jourSem] + " " + jour + " " + monthNames[mois] + " " + annee + " et il est " + heure + "h" + minute + ".";

document.write("<p>" + dayToday + "</p>");

document.write("<p> Il reste " + diffh + " heures et " + diffm + " minutes avant la fin des cours.");
// “Nous sommes le Vendredi 3 Février 2017”.
