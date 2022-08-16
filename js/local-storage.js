'use strict'

//Recuperar elemento
var tema = localStorage.getItem("theme");

if (tema != null) {

    // Cargar Tema Automaticamente
    var theme = $('#theme');
    
    if (tema == "to-red") {
        theme.attr("href", "css/red.css");
    }

    if (tema == "to-blue") {
        theme.attr("href", "css/blue.css");
    }

    if (tema == "to-green") {
        theme.attr("href", "css/green.css");
    }

}