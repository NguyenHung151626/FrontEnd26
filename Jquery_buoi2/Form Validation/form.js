$(document).ready(function(){
	$('#account').validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 6
			},
			cf_password: {
				required: true,
				equalTo: "#password"
			}
		},
		messages: {
			username: {
				minlength: "Please write your user name at least 2 characters"
			},
			password: {
				minlength: "Please write your password at least 6 characters"
			},
			cf_password: {
				equalTo: "The passwords need to be matched"
			},
		}
	});
	$('#profile').validate({
		rules: {
			fname: {
				required: true,
				minlength: 2
			},
			lname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			address: {
				minlength: 4
			},
			age: "required"
		},
		messages: {
			fname: {
				minlength: "Please write your first name at least 2 characters"
			},
			lname: {
				minlength: "Please write your last name at least 2 characters"
			},
			address: {
				minlength: "Please write your address at least 4 characters"
			},
		}
	});
	$('#term').validate();
	//initial
	$('form').hide();
	$('form').eq(1).show();
	$('#tieude p').eq(1).addClass('blue');
	//next
	$('#next').on("click", function(){
		//tieude p
		var tg = $(this).parents('#controls').prev().prev().children();
		//cho phep next
		for(i=0;i<$('#tieude p').length;i++){
			if(tg.eq(i).hasClass('blue')){
				if($('form').eq(i).valid()){
					if (i == ($('#tieude p').length-1)) {
						alert('Thanh cong');
					}
					else {
						if(i == 0) {
							$('#prev').removeClass('mo');
						}
						if(i == ($('#tieude p').length-2)) {
							$('#next').html('Finish');
						}
						$('form').hide();
						$('form').eq(i+1).show();
						$('#tieude p').removeClass('blue');
						$('#tieude p').eq(i+1).addClass('blue');
					}
					break;
				}
				break;
			}
		}
	});
	//prev
	$('#prev').on("click", function(){
		//tieude p
		var tg = $(this).parents('#controls').prev().prev().children();
		//cho phep next
		for(i=0;i<$('#tieude p').length;i++){
			if(tg.eq(i).hasClass('blue')){
				if(i>0) {
					if(i == ($('#tieude p').length-1)) {
						$('#next').html('next');
					}
					if(i == 1) {
						$(this).addClass('mo');
					}
					$('form').hide();
					$('form').eq(i-1).show();
					$('#tieude p').removeClass('blue');
					$('#tieude p').eq(i-1).addClass('blue');
					break;
				}
			}
		}
	});
	//click tieu de
	$('#tieude p').on("click", function(){
		for(i=0;i<$('#tieude p').length;i++) {
			if($('#tieude p').eq(i).hasClass('blue')) {
				for(j=0;j<$('#tieude p').length;j++) {
					if ($(this).html() == $('#tieude p').eq(j).html()) {
						if (j<i) {
							if(j == ($('#tieude p').length-2)) {
								$('#next').html('next');
							}
							if(j == 0) {
								$('#prev').addClass('mo');
							}
							$('form').hide();
							$('form').eq(j).show();
							$('#tieude p').removeClass('blue');
							$('#tieude p').eq(j).addClass('blue');
							break;
						}
						if (j>i) {
							var a = 1;
							for (k=i;k<j;k++) {
								a = a && $('form').eq(k).valid();
								console.log(a);
							}
							if (a!=0) {
								if(j == 1) {
									$('#prev').removeClass('mo');
								}
								if(j == ($('#tieude p').length-1)) {
									$('#next').html('Finish');
								}
								$('form').hide();
								$('form').eq(j).show();
								$('#tieude p').removeClass('blue');
								$('#tieude p').eq(j).addClass('blue');
							}
							break;
						}
					}
				}
				break;
			}
		}
	});
});
