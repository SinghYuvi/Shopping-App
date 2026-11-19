import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingridients.model';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  styleUrl: './shopping-edit.component.css',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingridientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngridient = new Ingredient(ingredientName, ingredientAmount);

    this.ingridientAdded.emit(newIngridient);
  }
}
