import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoFormWithvalidationsExplicitComponent } from './demo-form-withvalidations-explicit.component';

describe('DemoFormWithvalidationsExplicitComponent', () => {
  let component: DemoFormWithvalidationsExplicitComponent;
  let fixture: ComponentFixture<DemoFormWithvalidationsExplicitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ DemoFormWithvalidationsExplicitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithvalidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
