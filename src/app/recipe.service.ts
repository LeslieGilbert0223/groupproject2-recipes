import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeBaseUrl: string = 'https://api.edamam.com/search';
  key: string = '41259a47bdb8c697e9e9a60c0f6596f9';
  id: string = '5992111c';
  constructor(private http: HttpClient) {}
  //heavy lifiting goes on here

  getRecipes = (searchTerm: string): any => {
    return this.http.get(this.recipeBaseUrl, {
      params: {
        app_key: this.key,
        app_id: this.id,
        q: searchTerm,
      },
    });
  };
}
