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
      if (searchTerm === null) {
        this.recipeData = null;
      } else {
        this.recipeService
          .getRecipes(searchTerm, diet)
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

  search = (searchForm: SearchForm) => {
    this.router.navigate(['/home'], {
      queryParams: {
        term: searchForm.searchTerm,
        diet: searchForm.diet,
      },
    });
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
}
