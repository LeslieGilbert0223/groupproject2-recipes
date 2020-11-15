import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  getSearchTerm = (form: NgForm): void => {
    console.log(form);
    this.submitEvent.emit(form.value.searchTerm);
  };
}
