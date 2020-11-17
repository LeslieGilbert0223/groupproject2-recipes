import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Favorite } from '../interfaces/favorite';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipeRef: any;
  @Output() popupEvent = new EventEmitter<void>();
  @Output() favoriteEvent = new EventEmitter<Favorite>();
  constructor() {}

  // isShow = false;

  ngOnInit(): void {}

  toggleFavorite = (recipe: any) => {
    let favorite: Favorite = {
      image: recipe.image,
      label: recipe.label,
      url: recipe.url,
      isFavorite: false,
    };
    this.favoriteEvent.emit(favorite);
  };

  showPopup = () => {
    this.popupEvent.emit();
  };
} // End of export
