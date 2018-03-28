import App from "./App";

class Signin {
	render(){
var showSignin = function() {
	document.querySelector('.input-login-wrapper').style.display = 'block';
	document.querySelector('.input-login-wrapper').innerHTML = `
	<div class = 'cross'>x</div>
	<h3 class = 'h3'>Sign Up</h3>
	        <label class = 'label'>Select Store</lebel>
	        <select class = 'data-class'>
	        <option></option>
	        </select>
	        <label class = 'label'>Name</lebel>
	        <input type = 'text' value = 'login' class = 'input-login'>
	        <label class = 'label'>Email</lebel>
	        <input type = 'text' value = 'email' class = 'input-login'>
	        <label class = 'label'>Password</lebel>
			<input type = 'password' value = '' class = 'input-login'>
			<label class = 'label'>Confirm password</label>
			<input type = 'password' value = '' class = 'input-login'>
			<input type = 'submit' value = 'Register' class = 'login-sbm'>
			<p>Already have you an account?</p><div class = 'login-redirect'>Log in</div> 
	`;
	console.log('register');
}

var clkSignin = document.querySelector('#signup-btn');
clkSignin.addEventListener('click', showSignin, false);
	}
}

export default Signin;