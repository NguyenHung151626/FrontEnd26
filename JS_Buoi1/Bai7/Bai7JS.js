
function ham0(x){
	var i,sl = 1;
	x.innerHTML = '';
	while(sl<=7){
		for (i=1;i<sl;i++){
			x.innerHTML += '*';
		}
		x.innerHTML += '*' + '<br>';
		sl++;
	}
}
function ham1(y){
	y.innerHTML = '';
	var i,sl = 1;
	for (j=1;j<=7;j++){
		for (i=1;i<7;i++){
			y.innerHTML += '*';
		}
		y.innerHTML += '*' + '<br>';
		sl++;
	}
}
function ham2(z){
	z.innerHTML = '';
	for (j=1;j<7;j++) {
		z.innerHTML += '*';
	}
	z.innerHTML += '*' + '<br>';	
	for (i=1;i<=5;i++){
		z.innerHTML += '*' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '*' + '<br>';
	}
	for (j=1;j<7;j++) {
		z.innerHTML += '*';
	}
	z.innerHTML += '*' + '<br>';
}
function ham3(m){
	m.innerHTML = '';
	var i,sl = 1;
	while(sl<=7){
		for (i=1;i<8-sl;i++){
			m.innerHTML += '*';
		}
		m.innerHTML += '*' + '<br>';
		sl++;
	}
}
function myFunction(){
	var a = document.getElementsByClassName('khoi');
	ham0(a[0]);
	ham1(a[1]);
	ham2(a[2]);
	ham3(a[3]);
	var t = document.getElementById('inputTag');
	t.value = 'Click Me To Come Back';
	t.style.width = '180px';
	t.onclick  = function() {comeBack()};
}
function comeBack(){
	var a = document.getElementsByClassName('khoi');
	a[0].innerHTML = 'Click The Button Below To See The Change';
	a[1].innerHTML = 'Click The Button Below To See The Change';
	a[2].innerHTML = 'Click The Button Below To See The Change';
	a[3].innerHTML = 'Click The Button Below To See The Change';
	var t = document.getElementById('inputTag');
	t.value = 'Click Me';
	t.style.width = '100px';
	t.onclick = function() {myFunction()};
}

