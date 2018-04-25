import {AUTH_HTTP} from "./auth.http";
import {BASE_URL, INGREDIENTS_URL, TAG_URL} from './constants';
import {PIZZA_DATA} from './pizza-data';
import PizzaComponent from "./pizza.component";
import pizzaDataComponent from "./init";





//const pizzadata = new PIZZA_DATA();
const component = new pizzaDataComponent();
const pizzacomp = new PizzaComponent();
//const PIZZA_DATA = new pizzaDataService();



pizzadata.render();
component.render();






