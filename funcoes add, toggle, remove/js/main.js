$(document).ready(function(){

    //seletor pela classe
    $('.item1').on('click',function(){
        $('.item1').addClass('blue');
    });

    $('.item2').on('click',function(){
        $(this).removeClass('blue');
    });

    $('.item3').on('click',function(){
        $(this).toggleClass('blue');
    });
});