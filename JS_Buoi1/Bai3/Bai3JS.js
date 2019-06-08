do{
	var n = prompt('Mời bạn nhập số:');
}while(n < 0);

var k = 0,j=1;
for (i=1;i<=n;i++){
	j = j*i;
	k= k + i/j;
}
function sum(){
	if(n == 0) document.write('1');
	else document.write(k);
}
