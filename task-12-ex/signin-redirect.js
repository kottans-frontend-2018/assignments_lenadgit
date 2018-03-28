import App from "./App";

class Redirectlogin {
	render() {
	var RedirectSignin = function() {
	document.querySelector('.input-login-wrapper').style.display = 'block';
	document.querySelector('.input-login-wrapper').innerHTML = `
	<div class = 'cross'>x</div>
	<h3 class = 'h3'>Log In</h3>
	        <input type = 'text' value = 'login' class = 'input-login'>
			<input type = 'password' value = '' class = 'input-login'>
			<input type = 'submit' value = 'Sign In' class = 'login-sbm'> 
			<p>Have not an account?</p><div class = 'register-redirect'>Register</div>
	`;
	console.log('login redirect');

	//const html = `
		//<div class = 'cross'>x</div>
	//<h3 class = 'h3'>Log In</h3>
	        //<input type = 'text' value = 'login' class = 'input-login'>
			//<input type = 'password' value = '' class = 'input-login'>
			//<input type = 'submit' value = 'Sign In' class = 'login-sbm'> 
			//<p>Have not an account?</p><div class = 'register-redirect'>Register</div>
	//`;

	//const fragment = document.querySelector('.input-login-wrapper').parseHTML(html);       
        //return fragment;


var clkLogin = document.querySelector('.register-redirect');
clkLogin.addEventListener('click', RedirectSignin, false);
	}
}
}	





export default Redirectlogin;