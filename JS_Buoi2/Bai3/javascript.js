var tang = giam = 0;
getP = document.getElementsByTagName('p')[0];
getP.style.fontSize = 20 + 'px';
var s=20;
function veMd(){
	s = 20;
	getP.style.fontSize = s + 'px';
}
function hamTang(){
	s *= 1.4;
	getP.style.fontSize = s + 'px';
}
function hamGiam(){
	s *= 0.6;
	getP.style.fontSize = s + 'px';
}