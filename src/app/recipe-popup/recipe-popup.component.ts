import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-popup',
  templateUrl: './recipe-popup.component.html',
  styleUrls: ['./recipe-popup.component.css'],
})
export class RecipePopupComponent implements OnInit {
  @Input() hit: any;
  @Output() closeEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  closePopup = () => {
    this.closeEvent.emit();
  };
}
