var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var imageSlide = document.getElementsByClassName('owl-stage')[0];
var images = document.getElementsByClassName('image');
var computedStyle = getComputedStyle(imageSlide);
function next(){
	imageSlide.style.transition = 'all 0.25s';
	for(i=0;i<images.length;i++){
		var j = -i*1700;
		var k = 'matrix(1, 0, 0, 1, ' + j + ', 0)';
		if(computedStyle.transform == k){
			if(i < images.length-1){
				j -= 1700;
				imageSlide.style.transform = 'translate3d(' + j + 'px, 0px, 0px)';
			}
			else{
				imageSlide.style.transform = 'translate3d(0px, 0px, 0px)';
				imageSlide.style.transition = 'all ' + 0.25*(images.length-1) + 's';
			}
			break;
		}
		
	}
}
function prev(){
	imageSlide.style.transition = 'all 0.25s';
	for(i=0;i<images.length;i++){
		var j = -i*1700;
		var k = 'matrix(1, 0, 0, 1, ' + j + ', 0)';
		if(computedStyle.transform == k){
			if(i > 0){
				j += 1700;
				imageSlide.style.transform = 'translate3d(' + j + 'px, 0px, 0px)';
			}
			else{
				j = -(images.length-1)*1700;
				imageSlide.style.transform = 'translate3d(' + j + 'px, 0px, 0px)';
				imageSlide.style.transition = 'all ' + 0.25*(images.length-1) + 's';
			}
			break;
		}
		
	}
}
