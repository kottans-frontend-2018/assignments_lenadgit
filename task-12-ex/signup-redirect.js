import App from "./App";

class RedirectRegister {
		constructor(){}
	render(){
var RedirectSignup = function() {
	document.querySelector('.input-login-wrapper').style.display = 'block';
	document.querySelector('.input-login-wrapper').innerHTML = `
	<div class = 'cross'>x</div>
	<h3 class = 'h3'>Log In</h3>
	        <input type = 'text' value = 'login' class = 'input-login'>
			<input type = 'password' value = '' class = 'input-login'>
			<input type = 'submit' value = 'Sign In' class = 'login-sbm'> 
			<p>Have not an account?</p><div class = 'signin-redirect'>Sign up</div>
	`;
	console.log('sign up redirect');
}

var clkLogin = document.querySelector('.signin-redirect');
clkLogin.addEventListener('click', RedirectSignup, false);
	}
}



export default RedirectRegister;