'use strict'; // Mode strict du JavaScript
var indexPlusLong;
var phrase;
var debut;
var fin;
indexPlusLong = 0;
var phrases = [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    , "Aenean commodo ligula eget dolor. Aenean massa."
    , "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    , "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    , "Nulla consequat massa quis enim."
    , "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    , "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
    , "Nullam dictum felis eu pede mollis pretium."
    , "Integer tincidunt. Cras dapibus."
    , "Vivamus elementum semper nisi."
    , "Aenean vulputate eleifend tellus."
    , "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
    , "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
    , "Phasellus viverra nulla ut metus varius laoreet."
    , "Quisque rutrum. Aenean imperdiet."
    , "Etiam ultricies nisi vel augue."
    , "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."
    , "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    , "Aenean commodo ligula eget dolor. Aenean massa."
    , "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
    , "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    , "Nulla consequat massa quis enim."
    , "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    , "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
    , "Nullam dictum felis eu pede mollis pretium."
    , "Integer tincidunt. Cras dapibus."
    , "Vivamus elementum semper nisi."
    , "Aenean vulputate eleifend tellus."
    , "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
    , "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
    , "Phasellus viverra nulla ut metus varius laoreet."
    , "Quisque rutrum. Aenean imperdiet."
    , "Etiam ultricies nisi vel augue."
    , "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."
    , "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max."
    , "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."
    , "Maecenas nec odio et ante tincidunt tempus."
    , "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante."
    , "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
    , "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna."
    , "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
];
//Saisie des valeurs de départ et de fin pour la recherche par l'utilisateur
debut = parseInt(window.prompt("Où souhaitez vous démarrer ? (en 0 et " + phrases.length+" )", 0));
fin = parseInt(window.prompt("Où souhaitez vous finir ? (en 0 et " + phrases.length+" )", 0));
//Verification des valeurs rentrées par l'utilisateur
if (debut < phrases.length && fin <= phrases.length && debut < fin) {
    //Parcours du tableau pour rechercher la phrase la plus longue
    for (debut; debut < fin; debut++) {
        if (phrases[debut].length > phrases[indexPlusLong].length) {
            indexPlusLong = debut;
        }
    }
    phrase = phrases[indexPlusLong];
    document.write("<p>La longueur de la phrase la plus longue est de : " + phrase.length + "  " + "<p>La phrase la plus longue est : " + phrase + "</p>");
}
else {
    document.write("<p>Vous avez saisi un nombre trop élevé. Veuillez réessayer </p>");
}