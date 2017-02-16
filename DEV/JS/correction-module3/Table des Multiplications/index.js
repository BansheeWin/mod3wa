'use strict';   // Mode strict du JavaScript

// Déclaration de quatre variables.
var column;
var multiplyTable;
var row;
var size;


// Demande la taille maximum de la table des multiplications.
size = parseInt(window.prompt('Taille de la table de multiplications ?'));

// Initialisation de la table des multiplications.
multiplyTable = new Array();


// Construction de la table des multiplications de 1 jusqu'à la variable size.
for(row = 1; row <= size; row++)
{
    // Pour chaque nouvelle ligne il faut créer un nouveau tableau.
    multiplyTable[row] = new Array();

    for(column = 1; column <= size; column++)
    {
        // Stockage du résultat du calcul dans la table des multiplications.
        multiplyTable[row][column] = row * column;
    }
}



// Construction en HTML de la table des multiplications.
document.write('<table>');

for(row = 1; row <= size; row++)
{
    document.write('<tr>');

    for(column = 1; column <= size; column++)
    {
        // Si les deux nombres multipliés sont les mêmes...
        if(row == column)
        {
            // ...Alors on applique une classe CSS à la cellule.
            document.write('<td class="same-number">');
        }
        else
        {
            document.write('<td>');
        }

        document.write(multiplyTable[row][column]);

        document.write('</td>');
    }

    document.write('</tr>');
}

document.write('</table>');