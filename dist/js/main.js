function forms(item) {
	if ( item === 'standart' || item === undefined ) {
		return `
			<h2>Welcome back</h2>
			<p>Sign in to continue to IO Technologies.</p>
			<form class="login__form" action="" name="login">
				<input class="login__form_input" id="input_user-name" type="text" placeholder="Your email" oninput="onInput('name')" onkeypress="checkDirtyForm('name')" onblur="checkForm('name')">
				<div class="error-name hide">
					<div class="error-block_square">
						<p class="error-text">Oops! You entered an invalid email</p>
						<div class="error-block_arrow"></div>
					</div>
				</div>
				<input class="login__form_input" id="input_user-password" type="password" placeholder="Password" oninput="onInput('password')">
				<div class="error-password hide">
					<div class="error-block_square">
						<p class="error-text">Enter any 4 symbols</p>
						<div class="error-block_arrow"></div>
					</div>
				</div>
				<button class="login__form_submit" type="submit" onclick="return goTo('profile')">Log in</button>
			</form>
			<p>Forgot your password? <span class="reset-password-link" onclick="goTo('resetPassword', false)">Reset</span></p>
		`;
	} else if ( item === 'resetPassword' ) {
		return `
			<i class="fas fa-arrow-left" onclick="goTo('standart', false)"></i>
			<h2 class="login__form_title_forgot-pass">Forgot password?</h2>
			<form class="login__form" action="">
				<input class="login__form_input" id="input_user-name" type="text" placeholder="Enter your email" oninput="onInput('name')" onkeypress="checkDirtyForm('name')" onblur="checkForm('name')">
				<div class="error-name hide">
					<div class="error-block_square">
						<p class="error-text">Oops! You entered an invalid email</p>
						<div class="error-block_arrow"></div>
					</div>
				</div>
				<button class="login__form_submit" type="submit" onclick="goTo('standart')">Send me instructions</button>
			</form>
		`;
	} else if ( item === 'profile' ) {
		return `
			<div class="profile__container">
				<h2>Hello, ${email.split('@')[0][0].toUpperCase()+email.split('@')[0].slice(1).toLowerCase()}!</h2>
				<p>Please choose your project.</p>
				<div class="project_choice">
					<p>Flirchi</p>
					<p>io</p>
					<p>company name</p>
					<p>facenews.com</p>
				</div>
			</div>
		`
	}
}

let formError = false;
let formDirty = false;
let email = null;

function onInput(item) {
	let el = document.getElementById('input_user-'+item);
	if ( el.value ) {
		el.classList.add(`input-${item}-has-value`);
	} else {
		el.classList.remove(`input-${item}-has-value`);
	}
	if ( item === 'name' ) {
		email = el.value;
	}
}

function checkForm(item) {
	formDirty = true;
	let inputEl = document.getElementById('input_user-'+item);
	let errorEl = document.getElementsByClassName('error-'+item)[0];
	let buttonEl = document.getElementsByClassName('login__form_submit')[0];
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
	} else if ( item === 'password' ) {
		if ( inputEl.value.length !== 4 ) {
			alert('Incorrect password!');
			errorEl.classList.remove('hide');
			return false;
		} else {
			errorEl.classList.add('hide');
			return true;
		}
	}
}

function resetPassword() {
	let form = document.getElementsByClassName('col__login_form-item')[0];
	form.innerHTML = `
		<p>it's working</p>
	`;
}

function goTo(item, check = true) {
	checkForm('name');
	let form = document.getElementsByClassName('col__login_form-item')[0];
	if (check) {
		if ( !formError ) {
			if ( item === 'profile' ) {
				if ( checkForm('password') ) {
					form.innerHTML = forms(item);
				} else {
					return false;
				}
			} else {
				form.innerHTML = forms(item);
				if ( email ) {
					document.getElementById('input_user-name').value = email;
				}
				if ( item === 'standart' ) {
					alert(`Instructions have been sent to: \n${email}`);
				}
			}
		}
	} else {
		formDirty = false;
		form.innerHTML = forms(item);
		if ( email ) {
			document.getElementById('input_user-name').value = email;
		}
	}
}

function loadStartForm() {
	let form = document.getElementsByClassName('col__login_form-item')[0];
	form.innerHTML = forms();
	if ( email ) {
		document.getElementById('input_user-name').value = email;
	}
}

function test1(e) {
	alert("Event is cancelable = " + e.cancelable);
}

function checkDirtyForm(item) {
	if ( formDirty ) {
		checkForm('name');
	}
}
