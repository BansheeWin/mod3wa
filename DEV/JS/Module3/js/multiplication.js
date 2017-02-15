'use strict';
var column;
var row;
var color_td;
var multiplyTable;
var fin;
//saisie par l'utilisateur de la longueur des tables
fin = parseInt(window.prompt("Jusqu'a quelle table souhaitez vous aller ?", 0));
document.write("<h1>Table de multiplication</h1>");
document.write("<table border='1px'>");
//controle de la saisie de l'utilisateur (nombre strictement supérieur à 1);
/*for (row = 1; row <= fin; row++) {
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
document.write("</table>");*/

// Initialisation de la table des multiplications.
multiplyTable = new Array();


// Construction de la table des multiplications de 1 jusqu'Ã  la variable size.
for(row = 1; row <= fin; row++)
{
    // Pour chaque nouvelle ligne il faut crÃ©er un nouveau tableau.
    multiplyTable[row] = new Array();
    console.log(row,column);
    for(column = 1; column <= fin; column++)
    {
        console.log(row,column);
        // Stockage du rÃ©sultat du calcul dans la table des multiplications.
        multiplyTable[row][column] = row * column;
    }
}
for(row = 1; row <= fin; row++)
{
    document.write('<tr>');

    for(column = 1; column <= fin; column++)
    {
        // Si les deux nombres multipliÃ©s sont les mÃªmes...
        if(row == column)
        {
            // ...Alors on applique une classe CSS Ã  la cellule.
            color_td = "#ccc";
            document.write("<td style='background-color:" + color_td + "'>");
            
        }
        else
        {
            color_td = "#fff";
            document.write("<td style='background-color:" + color_td + "'>");
            
        }

        document.write(multiplyTable[row][column]);

        document.write('</td>');
    }

    document.write('</tr>');
}

document.write('</table>');