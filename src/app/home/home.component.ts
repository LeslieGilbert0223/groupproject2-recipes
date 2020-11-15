import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeData: any;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((response) => {
    //   let queryParams = response;
    //   let searchTerm = queryParams.get('term');
    //   if (searchTerm === null) {
    //     this.recipeData = '';
    //   } else {
    //     this.recipeService.getRecipes(searchTerm).subscribe((response: any) => {
    //       this.recipeData = response;
    //       console.log(response);
    //     });
    //   }
    // });

    this.recipeService.getRecipes('chicken').subscribe((response: any) => {
      console.log(response);
    });
  }

  // below are methods

  search = (term: string) => {
    this.router.navigate(['/home'], {
      queryParams: {
        term: term,
      },
    });
  };
}
