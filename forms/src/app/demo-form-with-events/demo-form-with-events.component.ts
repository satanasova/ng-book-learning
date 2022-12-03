import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styleUrls: ['./demo-form-with-events.component.css'],
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  skuValid = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: String) => {
      console.log('sku changed to:', value);
      (window as any)._console.log('sku changed to:', value);
      this.skuValid = this.sku.valid;
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
      (window as any)._console.log('form changed to:', form);
    });
   }

  ngOnInit(): void {
    this.skuValid = false;
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form.sku);
    console.log(this.sku.valid);
  }

}
