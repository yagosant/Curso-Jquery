$(document).ready(function(){
    //seletor de id
    var botaoSalvar = $('#botaoSalvar');
    var inputSenha = $('#senha');

    botaoSalvar.on('click', function(){
        botaoSalvar.html('Aguarde ...');
        botaoSalvar.prop('disabled', true);

        $.post('senha.php', {senha: $('#senha').val()}).done(function(data){
            $("#resultadoAtualizacao").html(data);

            botaoSalvar.html('Atualizar Senha');
            botaoSalvar.prop('disabled', false);
            inputSenha.val('');
        });

    });
});