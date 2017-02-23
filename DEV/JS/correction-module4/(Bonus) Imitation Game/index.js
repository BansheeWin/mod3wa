'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function letterA()
{
    return "A";
}

function letterB()
{
    return "B";
}

function letterC()
{
    return "C";
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

var index;
var result;

// Code pour la chaîne #1.
result = letterA();
console.log(result);


// Code pour la chaîne #2.
result = letterA() + letterC();
console.log(result);


// Code pour la chaîne #3.
result = letterA();
for(index = 0; index < 2; index++)
{
    result += letterB();
}
for(index = 0; index < 3; index++)
{
    result += letterC();
}
console.log(result);


// Code pour la chaîne #4.
result = '';
for(index = 0; index < 2; index++)
{
    result += letterC() + letterB();
}
result += letterA();
console.log(result);


// Code pour la chaîne #5.
function lettersCB()
{
    return letterC() + letterB() + '!';
}
result = lettersCB() + letterC() + ' ' + lettersCB() + letterB() + ' ' + lettersCB() + letterA();
console.log(result);