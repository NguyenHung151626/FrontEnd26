var n = prompt('Mời bạn nhập số N ( nhập N<=M):');
var k = prompt('Mời bạn nhập số K:');
n = parseInt(n);
do{
	var m = prompt('Mời bạn nhập số M:');
}while(n > m);

var tg = i = 0;
while(i<m){
	if(i<n) i++;
	else {
		if(i%k ==0) tg = tg + i;
		i++;
	}
}
function printSum(){
	document.write(tg);
}