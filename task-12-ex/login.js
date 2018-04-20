import App from "./App";

class Login {
		render(){
var showLogin = function() {
	document.querySelector('.input-login-wrapper').style.display = 'block';
	document.querySelector('.input-login-wrapper').innerHTML = `
	<div class = 'cross'>x</div>
	<h3 class = 'h3'>Log In</h3>
	        <input type = 'text' value = '' class = 'input-login' id = 'username'>
			<input type = 'password' value = '' class = 'input-login' id = 'pass'>
			<input type = 'submit' value = 'Sign In' class = 'login-sbm'> 
			<div class = "login-error"></div>
			<p>Have not an account?</p><div class = 'register-redirect'>Register acc</div>
	`;

	var logel = document.querySelector('.login-sbm');

	logel.onclick = () => {
	let user = document.getElementById('username').value;
	let password = document.getElementById('pass').value;
	//let password_repeat = document.getElementById('pas-rep').value;
	//let email = document.getElementById('em').value;
	//let store_id = 13;
	//let store_password = document.getElementById('storepass').value;
		
		let payload = {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				// 'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: user,
				password : password,
				//password_repeat : password_repeat,
				//email : email,
				store_id : 13,
				//store_password : store_password
			})
		};
	console.log('Payload: ', payload);
	fetch('https://pizza-tele.ga/api/v1/user/login', payload).then(res => res.json())
		.then(res => {
			console.log('Login result', res);
			if (res.success === true) {
				localStorage.setItem('token', res.token);
			//localStorage.getItem('token');
		} else {
			document.querySelector('.login-error').innerHTML = '<p>' + res.error + 
			(res.validations ? res.validations : '' ) + '</p>';
		}


			
		});

			
	}



	console.log('login');
}

var clkLogin = document.querySelector('#login-btn');
clkLogin.addEventListener('click', showLogin, false);
	}
}



export default Login;


