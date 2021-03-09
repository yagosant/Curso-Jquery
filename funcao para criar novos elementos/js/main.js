$(document).ready(function(){

   // $('#container a').live('click', function(){ ----- funcao depreciada 
    $("#container a").on("click", function () {
        //cria um novo elemento na tela
        console.log($(this).text());
    $("<a href='#'>Novo link</a><br/>").appendTo("#container");
    });
});