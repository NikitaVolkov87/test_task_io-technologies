function onInput(item) {
	let el = document.getElementById('input_user-'+item);
	console.log(el.value);
	if ( el.value ) {
		el.classList.add(`input-${item}-has-value`);
	} else {
		el.classList.remove(`input-${item}-has-value`);
	}
}

function onInputBlur(item) {
	let inputEl = document.getElementById('input_user-'+item);
	let errorEl = document.getElementById('error-'+item);
	if ( !( inputEl.value.indexOf("@") != -1 && inputEl.value.indexOf(".") != -1 )) {
		alert(item);
	}
}
