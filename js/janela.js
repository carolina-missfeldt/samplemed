$(document).ready(function(){
    
        $("a[rel=modal]").click( function(ev){
            if (window.matchMedia('(min-width: 800px)').matches){
                ev.preventDefault();
         
                var id = $(this).attr("href");
         
                var alturaTela = $(document).height();
                var larguraTela = $(window).width();
             
                //colocando o fundo preto
                $('#mascara').css({'width':larguraTela,'height':alturaTela});
                $('#mascara').fadeIn(1000); 
                $('#mascara').fadeTo("slow",1);
         
                var left = ($(window).width() /2) - ( $(id).width() / 2 );
                var top = ($(window).height() / 2) - ( $(id).height() / 2 );
             
                $(id).css({'top':top,'left':left});
                $(id).show(); 
            }  
        });
     
        $("#mascara").click( function(){
            $(this).hide();
            $(".janela").hide();
        });
     
        $('.fechar').click(function(ev){
            ev.preventDefault();
            $("#mascara").hide();
            $(".janela").hide();
        });
    
});