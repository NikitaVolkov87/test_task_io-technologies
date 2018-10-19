function onInputChange(item) {
	let el = document.getElementById('input_user-'+item);
	console.log(el.value);
	if ( el.value ) {
		el.setAttribute('style', 'border-bottom: 1px solid red');
	} else {
		el.setAttribute('style', 'border-bottom: 1px solid #56627e');
	}
}
