function quicktest() {
	console.log('inside quicktest ' + document.body);
	var failures = 0;
	setTimeout(function() { // Give document a chance to complete
		console.log('inside settimeout ' + document.body);
    	if (window.document && document.body) {
        	document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
    }
}, 0);
}

