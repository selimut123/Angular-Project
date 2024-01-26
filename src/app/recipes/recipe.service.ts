import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.eatingwell.com/thmb/aDKJbxTz7A6K6AFWDv3CkvegL1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-3x2-d05b7bfb639c42a89d7afb4065ff4635.jpg',
      [new Ingredient("meat", 1), new Ingredient("French fries", 20)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.eatingwell.com/thmb/aDKJbxTz7A6K6AFWDv3CkvegL1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-3x2-d05b7bfb639c42a89d7afb4065ff4635.jpg',
      [new Ingredient("bun", 2), new Ingredient("meat", 1)]
    ),
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredientFromRecipe(ingredients);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
}