import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favorite } from '../interfaces/favorite';
import { SearchForm } from '../interfaces/search-form';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeData: any;
  favorites: Favorite[] = [];
  showIndex: number = -1;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.favorites = this.recipeService.getFavorites();
    this.route.queryParamMap.subscribe((queryParams) => {
      const searchTerm = queryParams.get('term');
      const diet = queryParams.get('diet');
      const health = queryParams.getAll('health');
      if (searchTerm === null) {
        this.recipeData = null;
      } else {
        this.recipeService
          .getRecipes(searchTerm, diet, health)
          .subscribe((response: any) => {
            this.recipeData = response;

            this.setFavorites(this.favorites, this.recipeData);
            console.log(this.recipeData);
          });
      }
    });
  }

  // below are methods

  getFavorites = () => {
    this.favorites = this.recipeService.getFavorites();
  };

  editFavorites = (favorite: Favorite): void => {
    console.log(favorite);
    this.recipeService.editFavorites(favorite);
    this.getFavorites();
    this.setFavorites(this.favorites, this.recipeData);
  };

  setFavorites = (favorites: Favorite[], original: any) => {
    original.hits.forEach((item: any) => {
      let booleanValue = favorites.some((favorite) => {
        return favorite.url === item.recipe.url;
      });
      if (booleanValue) {
        item.recipe.isFavorite = true;
      }
    });
  };

  setShowIndex = (index: number) => {
    this.showIndex = index;
  };

  removeShowIndex = () => {
    this.showIndex = -1;
  };
}
