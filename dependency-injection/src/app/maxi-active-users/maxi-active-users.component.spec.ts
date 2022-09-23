import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxiActiveUsersComponent } from './maxi-active-users.component';

describe('MaxiActiveUsersComponent', () => {
  let component: MaxiActiveUsersComponent;
  let fixture: ComponentFixture<MaxiActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxiActiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxiActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
