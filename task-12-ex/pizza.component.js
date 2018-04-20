import {PIZZA_DATA} from './pizza-data';

export class PizzaComponent extends Component {
	onInit() {
		const node = document.querySelector("[data-pizza]")
		Promise.all([PIZZA_DATA.getIngredients(), PIZZA_DATA.getTags()])
		//.then(data => console.log(data[0], data[1]))
		.then(() => {
			PIZZA_DATA.ingredients
			PIZZA_DATA.tags

			let html = `
			<form>
			<input type = 'text' name = 'name'>
			</form>
			`
		}
	}
}