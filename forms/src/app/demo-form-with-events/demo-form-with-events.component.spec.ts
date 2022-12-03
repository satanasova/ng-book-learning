import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { nextTick } from 'process';
import { ConsoleSpy, dispatchEvent, touchInput } from '../utils';

import { DemoFormWithEventsComponent } from './demo-form-with-events.component';




describe('DemoFormWithEventsComponent', () => {
  let component: DemoFormWithEventsComponent;
  let fixture: ComponentFixture<DemoFormWithEventsComponent>;
  let originalConsole, fakeConsole;
  let el, input: HTMLInputElement, form;

  beforeEach(async () => {
    fakeConsole = new ConsoleSpy();
    originalConsole = window.console;
    (<any>window).console = fakeConsole;
    (<any>window)._console = originalConsole;

    //remember that configureTestingModules sets up the root NgModule for our tests.
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ DemoFormWithEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithEventsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    input = fixture.debugElement.query(By.css('input')).nativeElement;
    form = fixture.debugElement.query(By.css('form')).nativeElement;
    fixture.detectChanges();
  })

  
  afterAll(() => (<any>window).console = originalConsole);

  it('displays errors when sku has no value and it`s touched', fakeAsync(() => {
    input.value = '';
    touchInput(input);
    dispatchEvent(input, 'input');
    tick();
    fixture.detectChanges();

    const msgs = el.querySelectorAll('.ui.error.msg');
    expect(msgs[0].innerHTML).toContain('SKU is invalid');
    expect(msgs[1].innerHTML).toContain('SKU is required');
  }))

  it('displays no errors when sku has a value', fakeAsync(() => {
    input.value = 'Haci Baci';
    dispatchEvent(input,'input');
    fixture.detectChanges();

    const msgs = el.querySelectorAll('.ui.error.msg');
    expect(msgs.length).toEqual(0);
  }))

  it('handles sku value changes', fakeAsync(() => {
    input.value = 'Haci Hacev';
    dispatchEvent(input,'input');
    tick();

    expect(fakeConsole.logs).toContain('sku changed to: Haci Hacev');
  }))

  it('handles form changes', fakeAsync(() => {
    input.value = 'haci form';
    dispatchEvent(input,'input');
    tick();

    expect(fakeConsole.logs).toContain('form changed to: [object Object]')
  }))

  it('handles form submission', fakeAsync(() => {
    input.value = 'haci submit';
    dispatchEvent(input, 'input');
    tick();

    fixture.detectChanges();
    dispatchEvent(form, 'submit');
    tick();

    expect(fakeConsole.logs).toContain('you submitted value: haci submit');
  }))

});
