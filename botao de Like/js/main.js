$(document).ready(function(){

    var btn_thumb = $('#thumbs');
    var contador = $('#thumbs .contador span');

    btn_thumb.on('click',onclick);

    //funcao de clique
    function onclick(){
        //verifica se ela exite, caso sim n faz nada
        if(btn_thumb.hasClass('disabled')){
            return;
        }

        //pega o valor da variavel e converte para inteiro
        var contagem = parseInt(contador.text());

        //add +1 ao contador
        contador.text(contagem + 1);

        //impedede que o botão seja add novamente
        btn_thumb.addClass('disabled');
    };

});