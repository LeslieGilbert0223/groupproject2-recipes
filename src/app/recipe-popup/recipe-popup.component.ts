import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-popup',
  templateUrl: './recipe-popup.component.html',
  styleUrls: ['./recipe-popup.component.css'],
})
export class RecipePopupComponent implements OnInit {
  @Input() hit: any;
  constructor() {}

  ngOnInit(): void {}
}
