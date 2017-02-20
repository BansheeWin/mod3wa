'use strict'; // Mode strict du JavaScript
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function letterA() {
    return "A";
}

function letterB() {
    return "B";
}

function letterC() {
    return "C";
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
var result;

function cb() {
    var tempo = letterC() + letterB();
    return tempo;
}

function chaine() {
    result = letterA();
    console.log(result);
    result = letterA() + letterC();
    console.log(result);
    result = letterA() + letterB() + letterB() + letterC() + letterC() + letterC();
    console.log(result);
    result = cb() + cb() + letterA();
    console.log(result);
    result = cb() + "!" + letterC() + " " + cb() + "!" + letterB() + " " + cb() + "!" + letterA();
    console.log(result);
}
chaine();