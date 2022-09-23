import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxiInactiveUsersComponent } from './maxi-inactive-users.component';

describe('MaxiInactiveUsersComponent', () => {
  let component: MaxiInactiveUsersComponent;
  let fixture: ComponentFixture<MaxiInactiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxiInactiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxiInactiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
