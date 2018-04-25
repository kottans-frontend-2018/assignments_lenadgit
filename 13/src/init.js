import {AUTH_HTTP} from './auth.http'
import {INGREDIENTS_URL} from './constants'
import {PizzaComponent} from './pizza.component'


	class pizzaDataComponent() {
		constructor() { 
			onInit() {
		const node = document.querySelector("#data-pizza")
		PIZZA_DATA.getIngredients().then(ingredients => console.log(ingredients))
		}
	document.querySelector('.add-btn').addEventListener('click', onInit, false);
	}
}

export default pizzaDataComponent;