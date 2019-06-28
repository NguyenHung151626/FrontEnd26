var prevButton = document.getElementsByClassName('prev');
var nextButton = document.getElementsByClassName('next');
var owlStage = document.getElementsByClassName('owl-stage');
var images = document.getElementsByClassName('image');
var owlStageOuter = document.getElementsByClassName('owl-stage-outer');
var computedStyle = [getComputedStyle(owlStage[0]), getComputedStyle(owlStage[1])];
var t = [1700, 1280];
var z = [450, 720];
for(i=0;i<owlStageOuter.length;i++){
	owlStageOuter[i].style.width = t[i] + 'px';
	// owlStageOuter[i].style.height = z[i] + 'px';
	owlStage[i].style.width = t[i]*owlStage[i].childElementCount + 'px';
}
for(j=0;j<owlStage.length;j++){
	for(i=0;i<owlStage[j].childElementCount;i++){
		owlStage[j].children[i].style.width = t[j] + 'px';
	}
}
function next(){
	for(m=0;m<nextButton.length;m++){
		owlStage[m].style.transition = 'all 0.25s';
		for(i=0;i<owlStage[m].childElementCount;i++){
			var j = -i*t[m];
			var k = 'matrix(1, 0, 0, 1, ' + j + ', 0)';
			if(computedStyle[m].transform == k){
				if(i < owlStage[m].childElementCount-1){
					j -= t[m];
					owlStage[m].style.transform = 'translate3d(' + j + 'px, 0px, 0px)';
				}
				else{
					owlStage[m].style.transform = 'translate3d(0px, 0px, 0px)';
					owlStage[m].style.transition = 'all ' + 0.25*(owlStage[m].childElementCount-1) + 's';
				}
				break;
			}
			
		}
	}
}
function prev(){
	for(m=0;m<prevButton.length;m++){
		owlStage[m].style.transition = 'all 0.25s';
		for(i=0;i<owlStage[m].childElementCount;i++){
			var j = -i*t[m];
			var k = 'matrix(1, 0, 0, 1, ' + j + ', 0)';
			if(computedStyle[m].transform == k){
				if(i > 0){
					j += t[m];
					owlStage[m].style.transform = 'translate3d(' + j + 'px, 0px, 0px)';
				}
				else{
					j = -(owlStage[m].childElementCount-1)*t[m];
					owlStage[m].style.transform = 'translate3d(' + j + 'px, 0px, 0px)';
					owlStage[m].style.transition = 'all ' + 0.25*(owlStage[m].childElementCount-1) + 's';
				}
				break;
			}
			
		}
	}
}
