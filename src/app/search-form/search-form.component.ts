import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchForm } from '../interfaces/search-form';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<SearchForm>();
  restrictions: string[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitForm = (form: NgForm): void => {
    this.router.navigate(['/home'], {
      queryParams: {
        term: form.value.searchTerm,
        diet: form.value.diet,
        health: this.restrictions,
      },
    });
  };

  toggleHealth = (restriction: string) => {
    let index = this.restrictions.findIndex((item) => {
      return item === restriction;
    });
    if (index === -1) {
      this.restrictions.push(restriction);
    } else {
      this.restrictions.splice(index, 1);
    }
    console.log(this.restrictions);
  };
} // End of export
