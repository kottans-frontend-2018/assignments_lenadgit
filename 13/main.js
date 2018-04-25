//require('./main.sass');
require('./css/style.css');
//require('./img/');

import {App} from './app.js';
let baseNode = document.querySelector('#pizza-app');

const app = new App(baseNode);
console.log(app, "APPPPP");
app.run();
// app.run();