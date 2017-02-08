// Déclaration de quatre variables.
var age;
var isThirtyYearsOld;
var isAdult;
var isNotCentennial;


// Affectation de la saisie de l'utilisateur à une variable.
age = window.prompt('Quel est votre âge ?');

/*
 * Création de variables booléennes comparant l'âge saisi par l'utilisateur avec une valeur
 * spécifique. Le résultat aura pour valeur 'true' ou 'false'.
 */
isThirtyYearsOld = (age == 30);         // Est-ce que l'âge est égal à 30 ans ?
isAdult          = (age >= 18);         // Est-ce que l'âge est de 18 ans ou plus ?
isNotCentennial  = (age != 100);        // Est-ce que l'âge est différent de 100 ans ?


// Affichage des variables booléennes dans la page HTML.
document.write('<p>Vous avez trente ans : ' + isThirtyYearsOld + '.</p>');
document.write('<p>Vous êtes majeur : ' + isAdult + '.</p>');
document.write("<p>Vous n'êtes pas centenaire : " + isNotCentennial + '.</p>');