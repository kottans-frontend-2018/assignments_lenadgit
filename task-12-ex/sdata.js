import App from "./App";

class sData {
		render(){
var sendData = function() {
fetch('https://pizza-tele.ga/api/v1/user/create', {
method: 'post',
headers: {
'Accept': 'application/json, text/plain, /',
'Content-Type': 'application/json'
},
body: JSON.stringify(
{ username: user ,
password : password,
password_repeat : repeat_password,
email : email,
//store_id : 8,
store_password : store_password
}
)
}).then(res => res.json())
.then(res => console.log(res));
}

    var senddata = document.querySelector('.add-btn');
	senddata.addEventListener('click', sendData, false);
}
}

export default sData;