import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchForm } from '../interfaces/search-form';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<SearchForm>();
  constructor() {}

  ngOnInit(): void {}

  submitForm = (form: NgForm): void => {
    this.submitEvent.emit({
      searchTerm: form.value.searchTerm,
      diet: form.value.diet,
    });
  };
}
