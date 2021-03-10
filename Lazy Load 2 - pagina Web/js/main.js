
var loadImages;


$(document).ready(function(){

    //funcao de load
    $(".lazy-img img").on("load", function(){
        $(this).addClass("loaded");
    });

    //verifica se houve o scroll pelo user
    $(document).on("scroll",function(){
        console.log("Você deu scroll na página"); //imprime noconsole validadndo o comando
       loadImages();
});

    //a variavel vai receber uma funcao, indicando que a loadimagem assim q for atribuida já vai executar, usando a definicao da função
    (loadImages = function loadImages(){
        //fazendo uma varrida no lazy-img
        $.each($('.lazy-img'),function(){

            var block = $(this);
            var image = block.find("img");

            //verifica se a url é igual ao src
            if(isOnScreen(block)){
                var url = image.data("url");

                if(image.attr("src") != url){
                    image.attr("src",url);
                }; 
            }
        });
    })();
});

function isOnScreen(element){
    //caprtua o elemento
    var win = $(window);

    //verifica onde é o top e o fim
    var screenTop = win.scrollTop();
    var screenBottom = screenTop + win.height();

    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();

    return elementBottom > screenTop && elementTop < screenBottom;
}
