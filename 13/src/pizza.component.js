import {PIZZA_DATA} from './pizza-data';

export class PizzaComponent { 
	onInit() {
		const node = document.querySelector("#data-pizza")
		PIZZA_DATA.getIngredients().then(ingredients => console.log(ingredients))
	}
	document.querySelector('.add-btn').addEventListener('click', onInit, false);
}



