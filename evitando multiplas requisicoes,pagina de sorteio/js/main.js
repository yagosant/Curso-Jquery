$(document).ready(function(){

    //seletor de id
    var botaoSalvar = $('#botaoSalvar');

    //botaoSalvar.on('click',function(){
        botaoSalvar.click(function() {
        botaoSalvar.html('Aguarde...');
        botaoSalvar.prop('disabled',true);

        $.get('sorteio.php').done(function(resultado){
            $('#resultadoSorteio').html(resultado);

            botaoSalvar.html('Sortear Número');
            botaoSalvar.prop('disabled',false);
        });
    });
    
});