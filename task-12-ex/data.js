import App from "./App";


class Data {
		
	render(){
//var hideForm = function(hide) {
	
	//document.querySelector('.input-login-wrapper').style.display = 'none';
	//hide.stopPropagation();
//}
//var clkBodyLogin = document.querySelector('.input-login-wrapper');
//clkBodyLogin.addEventListener('click', hideForm, false);
//}
//}





var getData = function() {
let url = 'https://pizza-tele.ga/api/v1/store/list';
//console.log(url);
 let j = fetch(url, {method: 'get'})

	.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw('server error');
		}
})
	.then(data => {
		console.log(data);
		document.querySelector('.data-class').innerHTML = '';
		for(let i=0; i<=data.length; i++){
		document.querySelector('.data-class').innerHTML += "<option>" + data[i].name + "</option>";
	}

});
  
}
    var getstores = document.querySelector('.input-login-wrapper');
	getstores.addEventListener('click', getData, false);
}
}


export default Data;