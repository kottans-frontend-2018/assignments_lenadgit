import {PIZZA_DATA} from './pizza-data';

export class PizzaComponent {
    constructor() {
              document.querySelector('.add-btn').addEventListener('click', this.onInit, false);
    }
    onInit() {
        const node = document.querySelector("#data-pizza")
        PIZZA_DATA.getIngredients().then(ingredients => console.log(ingredients))
    }

}


