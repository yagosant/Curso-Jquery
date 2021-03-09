function loadBlocks(){
    $.each($('.lazy-block'),function() { 
         var block = $(this);
         var info = block.find('.info');
         
         if(isOnScreen(block)){
             if(!block.hasClass('loaded') && !block.hasClass('loading')){
                 
                block.addClass('loading');

                info.load('request.php',function(){
                    block.addClass('loaded');
                    block.removeClass('loading');
                });
             }
         }
    });
}

function isOnScreen(element){
    var win = $(window);
    var screenTop = win.scrollTop();
    var screenBottom = screenTop + win.height();

    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();

    return elementBottom > screenTop && elementTop < screenBottom;
}

$(document).ready(function(){
    
    $(document).on('scroll', function(){
        loadBlocks();
    });

    loadBlocks();
});