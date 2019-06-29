$(document).ready(function(){
	for(i=0;i<$('.image--w').length;i++){
		$('.image--w p').eq(i).html($('.image--w img').eq(i).attr('alt'));
	}
	$('.image--w').hide();
	$('.image--s').on("click", function(){
		$('.image--w').hide();
		$('.image--s').css("opacity", "0.6");
		var tg = $(this).next();
		tg.show();
		$('.image--w .fa-times').on("click", function(){
			$(this).parent().hide();
			$('.image--s').css("opacity", "1");
		});
	});
	$('.fa-chevron-left').on("click", function(){
		$(this).parent().hide();
		for(i=0;i<$('.image--w').length;i++){
			if($(this).parent().children('img').attr('alt') == $('.image--w').eq(i).children('img').attr('alt')){
				if(i>0) $(this).parent().prev().prev().show();
				else $('.image--w').last().show();
				break;
			}
		}
	});
	$('.fa-chevron-right').on("click", function(){
		$(this).parent().hide();
		for(i=0;i<$('.image--w').length;i++){
			if($(this).parent().children('img').attr('alt') == $('.image--w').eq(i).children('img').attr('alt')){
				if(i<$('.image--w').length - 1) $(this).parent().next().next().show();
				else $('.image--w').first().show();
				break;
			}
		}
	});
});