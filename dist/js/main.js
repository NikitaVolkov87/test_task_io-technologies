function forms(item) {
	if ( item === 'standart' || item === undefined ) {
		return `
			<h2>Welcome back</h2>
			<p>Sign in to continue to IO Technologies.</p>
			<form class="login__form" action="">
				<input class="login__form_input" id="input_user-name" type="text" placeholder="Your email" oninput="onInput('name')" onblur="onInputBlur('name')">
				<div class="error-name hide">
					<div class="error-block_square">
						<p class="error-text">Oops! You entered an invalid email</p>
						<div class="error-block_arrow"></div>
					</div>
				</div>
				<input class="login__form_input" id="input_user-password" type="password" placeholder="Password" oninput="onInput('password')" onblur="onInputBlur('password')">
				<button class="login__form_submit" type="submit">Log in</button>
			</form>
			<p>Forgot your password? <span class="reset-password-link" onclick="goTo('resetPassword')">Reset</span></p>
		`;
	} else if ( item === 'resetPassword' ) {
		return `
			<h2>Forgot password?</h2>
			<form class="login__form" action="" onsubmit="goTo('standart')">
				<input class="login__form_input" id="input_user-name" type="text" placeholder="Enter your email" oninput="onInput('name')" onblur="onInputBlur('name')">
				<div class="error-name hide">
					<div class="error-block_square">
						<p class="error-text">Oops! You entered an invalid email</p>
						<div class="error-block_arrow"></div>
					</div>
				</div>
				<button class="login__form_submit" type="submit">Send me instructions</button>
			</form>
		`;
	}
}

let formError = false;

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
	let buttonEl = document.getElementsByClassName('login__form_submit')[0];
	if !(inputEl) {
		alert('error');
	}
	if ( item === 'name' ) {
		if ( !( inputEl.value.indexOf('@') != -1 && inputEl.value.indexOf('.') != -1 ) ) {
			errorEl.classList.remove('hide');
			inputEl.classList.add('input-has-error');
			buttonEl.classList.add('button-disabled');
			buttonEl.setAttribute('disabled', '');
			formError = true;
		} else {
			errorEl.classList.add('hide');
			inputEl.classList.remove('input-has-error');
			buttonEl.classList.remove('button-disabled');
			buttonEl.removeAttribute('disabled');
			formError = false;
		}
	}
}

function resetPassword() {
	let form = document.getElementsByClassName('col__login_form-item')[0];
	form.innerHTML = `
		<p>it's working</p>
	`;
}

function goTo(item) {
	onInputBlur('name');
	let form = document.getElementsByClassName('col__login_form-item')[0];
	if ( !formError ) {
		form.innerHTML = forms(item);
	}
}
