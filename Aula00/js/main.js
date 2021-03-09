 //definindo o scopo global
 $(document).ready(function(){

   
    //seletor de tag e evento de clique
    $("p").on("click", function(){
        alert("iniciando o curso JQuery");  
    });
    
    //seletor de id, muda a cor do botão
    $("#botao1").on("click",function(){
        $(this).css("color", "red")
    });

    $("#botao2").on("click",function(){
        $(this).css("background", "red")
    });


    //seletor de classe
    $(".icone").on("mouseover",function(){
        //set as img para a propriedade anterior
        $(".icone").css("opacity",0.3);
        $(this).css("opacity",1);
    });

  });