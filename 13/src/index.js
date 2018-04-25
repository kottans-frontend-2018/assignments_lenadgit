import {AUTH_HTTP} from "./auth.http";
import {BASE_URL, INGREDIENTS_URL, TAG_URL} from './constants';
import {PIZZA_DATA} from './pizza-data';
import PizzaComponent from "./pizza.component";






const pizzadata = new PIZZA_DATA();
const pizzacomp = new PizzaComponent();


pizzadata.render();
pizzacomp.render();





