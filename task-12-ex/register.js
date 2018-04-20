import App from "./App";

import sData from './sdata.js';

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
	        <input type = 'text' value = 'login' class = 'input-login' id='username'>
	        <label class = 'label'>Email</lebel>
	        <input type = 'text' value = 'email' class = 'input-login' id = 'em'>
	        <label class = 'label'>Password</lebel>
			<input type = 'password' value = '' class = 'input-login' id = 'pass'>
			<label class = 'label'>Confirm password</label>
			<input type = 'password' value = '' class = 'input-login' id = 'pas-rep'>
			<input type = 'password' value = '' class = 'input-login' id = 'storepass'>

<br>
			<input type = 'submit' value = 'Register' class = 'login-sbm' id='btn-reg'>
			<p>Already have you an account?</p><div class = 'login-redirect'>Log in</div> 
	`;





	var el = document.getElementById('btn-reg');

	el.onclick = () => {
	let user = document.getElementById('username').value;
	let password = document.getElementById('pass').value;
	let password_repeat = document.getElementById('pas-rep').value;
	let email = document.getElementById('em').value;
	//let store_id = 13;
	let store_password = document.getElementById('storepass').value;
		
		let payload = {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				// 'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: user,
				password : password,
				password_repeat : password_repeat,
				email : email,
				store_id : 13,
				store_password : store_password
			})
		};
	console.log('Payload: ', payload);
	fetch('https://pizza-tele.ga/api/v1/user/create', payload).then(res => res.json())
		.then(res => console.log(res));
	}

}

	//console.log(username);
	console.log('register');
//}

var clkSignin = document.querySelector('#signup-btn');
clkSignin.addEventListener('click', showSignin, false);
	}
}

export default Signin;