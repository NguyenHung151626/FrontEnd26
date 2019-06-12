function checkAll(){
	var getInput = document.querySelectorAll('.container input');
	for (i=0;i<getInput.length;i++){
		getInput[i].checked = true;
	}
}
function unCheckAll(){
	var getInput = document.querySelectorAll('.container input');
	for (i=0;i<getInput.length;i++){
		getInput[i].checked = false;
	}
}