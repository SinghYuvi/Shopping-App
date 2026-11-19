import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingridients.model';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  styleUrl: './shopping-list.component.css',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Bananas', 15),
  ];

  onIngridientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
