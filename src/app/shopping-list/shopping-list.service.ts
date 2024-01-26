import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('banana', 10),
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientFromRecipe(ingredients: Ingredient[]){
    // ingredients.map((ingredient: Ingredient) => this.addIngredient(ingredient));
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}