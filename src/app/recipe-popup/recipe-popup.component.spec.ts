import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePopupComponent } from './recipe-popup.component';

describe('RecipePopupComponent', () => {
  let component: RecipePopupComponent;
  let fixture: ComponentFixture<RecipePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
