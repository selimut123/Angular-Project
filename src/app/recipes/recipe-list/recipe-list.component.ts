import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://www.eatingwell.com/thmb/aDKJbxTz7A6K6AFWDv3CkvegL1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-3x2-d05b7bfb639c42a89d7afb4065ff4635.jpg"),
    new Recipe("A Test Recipe", "This is simply a test", "https://www.eatingwell.com/thmb/aDKJbxTz7A6K6AFWDv3CkvegL1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-3x2-d05b7bfb639c42a89d7afb4065ff4635.jpg"),
  ];

  constructor(){ }

  ngOnInit(){

  }
}
