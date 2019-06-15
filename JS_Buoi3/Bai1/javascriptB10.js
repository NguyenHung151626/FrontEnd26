var flag1 = flag2 = flag3 = flag4 = flag5 = 0 ;
function checkClient(){
	//name
	var name = document.getElementsByTagName('input')[0];
	if(name.value.length <= 8 || !isNaN(name.value)){
		name.nextElementSibling.innerHTML = 'Yêu cầu' +
		' nhập đầy đủ họ tên';
		flag1 = 1;
	}else {name.nextElementSibling.innerHTML = '';
		flag1 = 0;
	}
	//email
	var email = document.getElementsByTagName('input')[3];
	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if(!re.test(email.value)){
		email.nextElementSibling.innerHTML = 'Yêu cầu' +
		' nhập email';
		flag2 = 1;
	}
	else {
		email.nextElementSibling.innerHTML = '';
		flag2 = 0;
	}
	//phone number
	var phoneNumber = document.getElementsByTagName('input')[4];
	var reNumber = /(0|84)+(9|3|8)+([0-9]{8})\b/g;
	if(!reNumber.test(phoneNumber.value)){
		 phoneNumber.nextElementSibling.innerHTML = 'Yêu cầu nhập số điện thoại';
		 flag3 = 1;
	}
	else {
		phoneNumber.nextElementSibling.innerHTML = '';
		flag3 = 0;
	}
	//password
	var cf_pw = document.getElementsByTagName('input')[6];
	var pw = document.getElementsByTagName('input')[5];
	if(pw.value == '' || pw.value.length < 6 || (pw.value!= cf_pw.value && (cf_pw.value.length > 0))){
		pw.nextElementSibling.innerHTML = 'Yêu cầu nhập mật khẩu';
		flag4 = 1;
	}
	else{
		pw.nextElementSibling.innerHTML = '';
		flag4 = 0;
	}
	if(cf_pw.value == pw.value){
		cf_pw.nextElementSibling.innerHTML = '';
		flag5 = 0;
	}
	else{
		cf_pw.nextElementSibling.innerHTML = 'Mật khẩu không chính xác';
		flag5 = 1;
	}
	//total
	var getSpan = document.getElementsByTagName('span');
	if(flag1 == 0 && flag2 ==0 && flag3 == 0 && flag4 == 0 && flag5 == 0){
		for(i=0;i<getSpan.length;i++){getSpan[i].innerHTML = '';}
		alert('thanh cong');
	}
}
function reset(){
	for(i=0;i<getSpan.length;i++){getSpan[i].innerHTML = '';}
}