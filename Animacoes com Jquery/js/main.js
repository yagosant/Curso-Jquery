$(document).ready(function(){

    //efeito de fade 
    $('#btn-fadeout').click(function () { 
        $('#div-azul').fadeOut(1000,function(){
            console.log("Olha sumiu");
        });
        
    });

    $('#btn-fadein').click(function () { 
        $('#div-azul').fadeIn(2000);
        
    });

    $('#btn-fadetoggle').click(function () { 
        $('#div-azul').fadeToggle(2000);
        
    });

    $('#btn-fadeto').click(function () { 
        $('#div-azul').fadeTo(1000, 0.5);
        
    });

    //efeitos de slide
    $('#btn-slideup').click(function () { 
        $('#div-amarelo').slideUp();
        
    });

    $('#btn-slidedown').click(function () { 
        $('#div-amarelo').slideDown(1000);
        
    });

    $('#btn-slidetoggle').click(function () { 
        $('#div-amarelo').slideToggle();
        
    });

    //efeitos de animação
    $('#btn-hide').click(function () { 
      $('#div-red').hide();
        
    });

    $('#btn-show').click(function () { 
        $('#div-red').show();
          
      });

      $('#btn-animate').click(function () { 
        $('#div-red').animate({
            height:"+-100",
            width:"500px",
            marginLeft: "50px",
            marginTop: "50px"
        });
          
      });

});