import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Input() recipe: Recipe;

  onSelected(){
    this.recipeSelected.emit();
  }
}
