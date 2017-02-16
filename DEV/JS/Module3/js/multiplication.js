'use strict';
var column;
var row;
var color_td;
var multiplyTable;
var fin;
var html;
fin = parseInt(window.prompt("Jusqu'a quelle table souhaitez vous aller ?", 0));
html = "<h1>Table de multiplication</h1>";
html += "<table>";
multiplyTable = new Array();
for (row = 1; row <= fin; row++) {
    multiplyTable[row] = new Array();
    for (column = 1; column <= fin; column++) {
        multiplyTable[row][column] = row * column;
    }
}
for (row = 1; row <= fin; row++) {
    html += '<tr>';
    for (column = 1; column <= fin; column++) {
        color_td = (row == column) ? "#447FB6" : "#BFA836";
        html += "<td style='background-color:" + color_td + "'>";
        html += multiplyTable[row][column];
        html += '</td>';
    }
    html += '</tr>';
}
html += '</table>';
document.write(html);