//import App from "./App";
import Login from "./login";
import Signin from "./register";
import Data from "./data";
import sData from "./sdata";
import Hideauthorization from "./hideform";
import Redirectlogin from "./signin-redirect";
import Redirectregister from "./signup-redirect";






// const app = new App();
const log = new Login();
const sign = new Signin();
const data = new Data();
const sdata = new sData();
const ha = new Hideauthorization();
const redlogin = new Redirectlogin();
const redreg = new Redirectregister();







// app.render();
log.render();
sign.render();
data.render();
sdata.render();
ha.render();
redlogin.render();
redreg.render();





