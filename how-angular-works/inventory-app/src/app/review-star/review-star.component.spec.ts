import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStarComponent } from './review-star.component';

describe('ReviewStarComponent', () => {
  let component: ReviewStarComponent;
  let fixture: ComponentFixture<ReviewStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
