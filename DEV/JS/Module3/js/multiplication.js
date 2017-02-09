'use strict';
var column;
var row;
var color_td;
var result;
var fin;
//saisie par l'utilisateur de la longueur des tables
fin = parseInt(window.prompt("Jusqu'a quelle table souhaitez vous aller ?", 0));
document.write("<h1>Table de multiplication</h1>");
document.write("<table border='1px'>");
//controle de la saisie de l'utilisateur (nombre strictement supérieur à 1);
for (row = 1; row <= fin; row++) {
    document.write("<tr>");
    for (column = 1; column <= fin; column++) {
        result = column * row;
        if (row == column) {
            color_td = "#ccc";
        }
        else {
            color_td = "#fff";
        }
        document.write("<td style='background-color:" + color_td + "'>" + result + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");