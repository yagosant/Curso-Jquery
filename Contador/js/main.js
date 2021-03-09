$(document).ready(function(){

    //seletor de classe,tag e id
    var contador = $('#quantidade .contador span');
    var btn_quantidade_mais = $('#quantidade-mais');

    btn_quantidade_mais.on('click', funcao_incrementa);

    var btn_quantidade_menos = $('#quantidade-menos');

    btn_quantidade_menos.on('click', funcao_decrementa);

    //funcao para add +1
    function funcao_incrementa(){
        var contagem  = parseInt(contador.text());
        contador.text(contagem + 1);
    };

    //funcao para diminuir 1
    function funcao_decrementa(){
        var contagem  = parseInt(contador.text());

        //verifica se é positivo
        if(contagem <= 0){
            return;
        }
        contador.text(contagem - 1);
    }
});