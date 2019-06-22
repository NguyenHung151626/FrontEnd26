$(document).ready(function(){
	var plusMinus = $(".title > i");
	plusMinus.on("click", function(){
		$(this).parent().siblings('.content').toggleClass('noneContent blockContent');
		$(this).toggleClass('fa-minus fa-plus');
		$(this).siblings('p').toggleClass('whiteTitleColor greenTitleColor');
		// $(this).removeClass('');
	});
});