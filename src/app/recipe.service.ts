import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from './interfaces/favorite';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeBaseUrl: string = 'https://api.edamam.com/search';
  key: string = '41259a47bdb8c697e9e9a60c0f6596f9';
  id: string = '5992111c';
  favorites: Favorite[] = [];
  constructor(private http: HttpClient) {}
  //heavy lifting goes on here

  getRecipes = (searchTerm: string, diet: string | null): any => {
    const params = Object.assign(
      {
        app_key: this.key,
        app_id: this.id,
        q: searchTerm,
      },
      !diet ? undefined : { diet }
    );
    return this.http.get(this.recipeBaseUrl, {
      params,
    });
  };

  editFavorites = (favorite: Favorite): void => {
    let index = this.favorites.findIndex((item) => {
      return item.url === favorite.url;
    });
    if (index === -1) {
      this.favorites.push(favorite);
    } else {
      this.favorites.splice(index, 1);
    }
    console.log(this.favorites);
  };

  getFavorites = () => {
    return this.favorites;
  };
}
