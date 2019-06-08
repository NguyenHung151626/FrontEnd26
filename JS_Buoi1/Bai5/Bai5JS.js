var n = prompt('Mời bạn nhập số:');

var k = 0;
for(i=1;i<=n;i++){
	k = k + 1/i;
}
function sum(){
	if (n == 0) alert('Bạn cần nhập số khác 0 do có mẫu số');
	else document.write(k);
}