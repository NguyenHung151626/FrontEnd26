var buttons = document.getElementsByTagName('button');
var getImages = document.getElementsByTagName('img');
var t = setInterval(forwardOne, 5000);
//
var alignControlRight = 10;
for(i=0;i<buttons.length;i++){
	buttons[buttons.length-1-i].style.right = alignControlRight + 'px';
	alignControlRight += 30;
}
for(i=0;i<getImages.length;i++){
	getImages[i].style.display = 'none';
}
getImages[0].style.display = 'block';
for(j=0;j<buttons.length;j++){
	buttons[j].addEventListener('click', function(){
		for(i=0;i<getImages.length;i++){
			getImages[i].style.display = 'none';
		}
		this.nextElementSibling.style.display = 'block';
	});
}

function backOne(){
	for(i=0;i<getImages.length;i++){
		if(getImages[i].style.display == 'block'){
			if(i >= 1){
				for(j=0;j<getImages.length;j++) getImages[j].style.display = 'none';
				getImages[i-1].style.display = 'block';
			break;
			}
			else{
				for(j=0;j<getImages.length;j++) getImages[j].style.display = 'none';
				getImages[getImages.length-1].style.display = 'block';
			break;
			}	
		}
	}
	clearInterval(t);
}
function forwardOne(){
	for(i=0;i<getImages.length;i++){
		if(getImages[i].style.display == 'block'){
			if(i <= (getImages.length-2)){
				for(j=0;j<getImages.length;j++) getImages[j].style.display = 'none';
				getImages[i+1].style.display = 'block';
			break;
			}
			if(i == (getImages.length-1)){
				for(j=0;j<getImages.length;j++) getImages[j].style.display = 'none';
				getImages[0].style.display = 'block';
			break;
			} 	
		}
	}
}
function startTime(){
	setInterval(forwardOne, 5000);
}