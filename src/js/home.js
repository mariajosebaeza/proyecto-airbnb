//js seccionExperiencias
var posicion = 0;
	var imagenes = new Array();
	$(document).ready(function() {
		//alert(jQuery('.texto').html());
		var numeroImg = 6;
		if(numeroImg<=4){
			$('.flechaDer').css('display','none');
			$('.flechaIzq').css('display','none');
		}

		$('.flechaIzq').live('click',function(){
			if(posicion>0){
				posicion = posicion-1;
			}else{
				posicion = numeroImg-4;
			}
			$(".carruselExperiencias").animate({"left": -($('#tarjeta'+posicion).position().left)}, 600);
			return false;
	});

	$('.flechaIzq').hover(function(){
		$(this).css('opacity','0.5');
		},function(){
		$(this).css('opacity','1');
	});

	$('.flechaDer').hover(function(){
		$(this).css('opacity','0.5');
		},function(){
		$(this).css('opacity','1');
	});

	$('.flechaDer').live('click',function(){
		if(numeroImg>posicion+4){
			posicion = posicion+1;
		}else{
			posicion = 0;
		}
		$(".carruselExperiencias").animate({"left": -($('#tarjeta'+posicion).position().left)}, 600);
		return false;
	});

});