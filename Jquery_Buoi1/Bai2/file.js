$(document).ready(function(){
	$('#addButton').on("click", function(){
		var action = $('#actions').val();
		if(action == ''){
			alert('Bạn cần nhập nội dung muốn thêm');
		}
		else{
			$('#list').prepend("<li class='added'>"+"<p>" + action + "</p>"+"</li>");
			$('.added').append("<i class='fa fa-check hide' aria-hidden='true'></i>");
			$('.added').append("<i class='fa fa-times' aria-hidden='true'></i>");
			$('#actions').val('');
		}
	});
	$('#list').on("click", ".fa-times", function(){
		$(this).parent().remove();
	});
	$('#list').on("click", "li", function(){
		$(this).toggleClass('select');
		$(this).children('p').next().toggleClass('hide');
	});
});
// dung dau ` de xuong dong`