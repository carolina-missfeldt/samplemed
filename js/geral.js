		$(document).ready(function() {
				event.preventDefault();
			//bg input
			 $(".lista-prop_form-input").on("keyup", function(event) {
			 	
					var el = $(this);
				  
					if ("" !== el.val()) {
				  	el.addClass("input-focus");
				  } else {
				  	el.removeClass("input-focus");
				  }
				});
			 //bg select

			 $(".lista-prop_form-select").on("change", function(event){
			 	$(this).addClass("input-focus");

			 });
			 	


			 	// tabs
				$('.lista-prop_menu-lista li').click( function (){
					
					$(this).addClass('lista-prop_menu-lista-focus').siblings('.lista-prop_menu-lista-focus').removeClass();
					$('.lista-prop_lista:nth-child('+ ($(this).index()+1) +')').show().siblings('.lista-prop_lista').hide();
					
					});

				// menu opções

				$('.lista-prop_lista-opcoes').click( function (){
					$(this).toggleClass('ativo').toggleClass('inativo');
					$('.lista-prop-opcoes', this).toggle();

					});

					$(document).mouseup(function (e) {
							var container = $(".lista-prop_lista-opcoes");

					    if (!container.is(e.target) // if the target of the click isn't the container...
					        && container.has(e.target).length === 0) // ... nor a descendant of the container
					    {
					    	container.removeClass('ativo').addClass('inativo');
					    	$('.lista-prop-opcoes', this).hide();
							

					    }
					});	

					//etiquetas- dashboard

					$('.excluir').click(function(){
						$(this).closest('.etiqueta').remove();
        			return false;

				});

					//abas home
					$('.abas-menu li').click( function (){
						console.log($(this).index()+1);
					
					$(this).addClass('aba-menu-ativa').siblings('.aba-menu-ativa').removeClass('aba-menu-ativa');
					$('.abas-content:nth-child('+ ($(this).index()+1) +')').show().siblings('.abas-content').hide();
					
					});

 					$('.action-buttons button').click( function (){
 						event.preventDefault();
 						$(this).toggleClass('button-focus');

 					});
					

			});