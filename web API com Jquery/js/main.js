


function exibeNota(data){

    //verifica se o retorno é um array
    if($.isArray(data)){
        //limpa o retorno
        $('#retorno').empty();
        //faz o loop dentro do array de dados, como tem array vai retornar pelo value, o preprend exibe sempre antes do resto do conteudo
        $.each(data, function(index,value){
            $('#retorno').prepend("ID: " +value.id+"<br>Titulo: "+ value.title+"<br>Conteudo: "+value.body+"<br><br>");
        })
    }else{
        $('#retorno').html("ID: " +data.id+"<br>Titulo: "+ data.title+"<br>Conteudo: "+data.body+"<br><br>");
    }
    $("#loading").empty();
    
}

function aguardaNota(){
    $("#loading").html("<img style='width: 15px; margin-left: 10px;' src='http://www.devmedia.com.br/cursos/img/loading.gif' alt='loading'>");
}

function exibeErroNota(){
    
    $("#retorno").html("Ops, algo de errado aconteceu.");
    $("#loading").empty();
}


function cliqueBotao(event){
   //pega o valor do id e imprime
   event.preventDefault();
    var id = $('#id_nota').val();
    

    //chamando a função AJAX
    jQuery.ajax({
        type: "GET", //como vai listar, se usa o GET
        dataType: "json",
        url: "http://www.deveup.com.br/notas/api/notes/"+id, //URL da API usada
        success: exibeNota,
        beforeSend: aguardaNota,
        error: exibeErroNota 
    });
}

$(document).ready(function(){

    $('#enviar').on('click', cliqueBotao);

});