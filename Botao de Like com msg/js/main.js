$(document).ready(function(){

    //criando as variaveis, seletor de id
    var btn_thumb = $('#thumbs');

    //seletor de classe
    var contador = $('#thumbs .contador span');

    btn_thumb.on('click',onclick);

    //funcao onclick
    function onclick(){
        //verifica se existe
        if(btn_thumb.hasClass('disabled')){
            //se existir n faz nada
            return;
        }
        //pega o valor do contador
        var contagem = parseInt(contador.text());

        //add +1 ao contador
        contador.text(contagem +1);

        btn_thumb.addClass('disabled');

        //adicionando a mensagem de obrigado!
        var msg = $('<p>', {text : 'Obrigado pelo Like!'});
        btn_thumb.after(msg);
    }

});