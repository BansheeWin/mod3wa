'use strict';

function sayHello(messagesup) {
    return "Bonjour j'utilise un return et aussi " + messagesup + "!";
}
var message;
message = sayHello("toto");
document.write('<h1>' + message + '</h1>');
message = sayHello("Blablablabla");
document.write('<h2>' + message + '</h1>');