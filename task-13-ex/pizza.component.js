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
			<br>
			<label>Ingredients</label>
			<div>
			${PIZZA_DATA.ingredietns.reduce((html, ingr) => {
				html +=
				<label>
				${ingr.name}
				<input type = 'checkbox'>
				</label>
				return html
			}, ''}
			</div>
			</form>
			`
		}
	}
}