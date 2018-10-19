function onInput(item) {
	let el = document.getElementById('input_user-'+item);
	if ( el.value ) {
		el.classList.add(`input-${item}-has-value`);
	} else {
		el.classList.remove(`input-${item}-has-value`);
	}
}

function onInputBlur(item) {
	let inputEl = document.getElementById('input_user-'+item);
	let errorEl = document.getElementsByClassName('error-'+item)[0];
	if ( item === 'name' ) {
		if ( !( inputEl.value.indexOf('@') != -1 && inputEl.value.indexOf('.') != -1 )) {
			errorEl.classList.remove('hide');
		} else {
			errorEl.classList.add('hide');
		}
	}
}

function resetPassword() {
	let form = document.getElementsByClassName('col__login_form-item')[0];
	form.innerHTML = `
		<p>it's working</p>
	`;
}
