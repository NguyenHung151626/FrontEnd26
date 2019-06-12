var getContent = document.getElementsByClassName('tabContent');
var getLi = document.getElementsByClassName('menuLi');
//khoi tao xoa ca 3 hien thi 1
for(i=0;i<getContent.length;i++){
	getContent[i].style.display = 'none';
}
getContent[0].style.display = 'block';
for(j=0;j<getLi.length;j++){
	getLi[j].addEventListener('click', function(){
		//khoi tao goi ham xoa ca 3 phan content, sua 3 tab ve mau~
		for(i=0;i<getContent.length;i++){
		getContent[i].style.display = 'none';
		getLi[i].style.backgroundColor = 'rgba(70, 69, 69, 0.9)';
		getLi[i].style.color = 'white';
		}
		for(i=0;i<getLi.length;i++){
			if(getLi[i].innerHTML == this.innerHTML){
				getContent[i].style.display = 'block';
				getLi[i].style.backgroundColor = 'white';
				getLi[i].style.color = 'black';
			}
		}
	});
}
