import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: any;
  @Output() favoriteEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
