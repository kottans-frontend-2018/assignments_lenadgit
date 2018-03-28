import App from "./App";

class Login {
		render(){
var showLogin = function() {
	document.querySelector('.input-login-wrapper').style.display = 'block';
	document.querySelector('.input-login-wrapper').innerHTML = `
	<div class = 'cross'>x</div>
	<h3 class = 'h3'>Log In</h3>
	        <input type = 'text' value = 'login' class = 'input-login'>
			<input type = 'password' value = '' class = 'input-login'>
			<input type = 'submit' value = 'Sign In' class = 'login-sbm'> 
			<p>Have not an account?</p><div class = 'register-redirect'>Register acc</div>
	`;
	console.log('login');
}
//...
//fetch('https://pizza-tele.ga/api/v1/store/list')

//let url = 'https://pizza-tele.ga/api/v1/store/list';
//console.log(url);
 //let j = fetch(url, {method: 'get'})

	//.then(response => {
		//if (response.ok) {
			//return response.json();
		//} else {
			//throw('server error');
		//}
	//})



//fetch('https://pizza-tele.ga/api/v1/user/create', {
//method: 'post',
//headers: {
//'Accept': 'application/json, text/plain, /',
//'Content-Type': 'application/json'
//},
//body: JSON.stringify(
//{ username: user ,
//password : password,
//password_repeat : repeat_password,
//email : email,
//store_id : 8,
//store_password : store_password
//}
//)
//}).then(res => res.json())
//.then(res => console.log(res));


var clkLogin = document.querySelector('#login-btn');
clkLogin.addEventListener('click', showLogin, false);
	}
}



export default Login;


