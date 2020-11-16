import { Component, OnInit } from '@angular/core';
import { Favorite } from '../interfaces/favorite';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.favorites = this.recipeService.getFavorites();
    console.log(this.favorites);
  }

  getFavorites = () => {
    this.favorites = this.recipeService.getFavorites();
  };

  removeFavorite = (recipe: Favorite): void => {
    this.recipeService.editFavorites(recipe);
    this.getFavorites();
  };
}
