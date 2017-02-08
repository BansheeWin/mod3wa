var age;
var isAdult;
var isThirtyYearsOld;
var isNotCentennial;
var test;
age = parseInt(window.prompt("Quel âge avez vous ?", 0));
if (!isNaN(age)) {
    if (age >= 18) {
        var isAdult = true;
    }
    else {
        var isAdult = false;
    }
    if (age == 30) {
        var isThirtyYearsOld = true;
    }
    else {
        var isThirtyYearsOld = false;
    }
    if (age != 100) {
        var isNotCentennial = true;
    }
    else {
        var isNotCentennial = false;
    }
    if (isAdult) {
        document.write("<p>Felicitations vous êtes majeur</p>");
    }
    else {
        document.write("<p>Désolé vous n'êtes pas majeur</p>");
    }
    if (isThirtyYearsOld) {
        document.write("<p>Vous avez 30 ans</p>");
    }
    if (isNotCentennial) {
        document.write("<p>Vous n'avez pas vécu un 1 siècle</p>");
    }
}
else {
    document.write("<p>Saisissez un nombre </p>");
}