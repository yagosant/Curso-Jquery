$(document).ready(function(){

    //seletor de id e tag
    $('#container a').bind('click', function(){
        //adiciona um texto no console do navegador
        console.log($(this).text());
    });

});