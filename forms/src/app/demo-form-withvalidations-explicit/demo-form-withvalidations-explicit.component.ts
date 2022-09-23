import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'demo-form-withvalidations-explicit',
  templateUrl: './demo-form-withvalidations-explicit.component.html',
  styleUrls: ['./demo-form-withvalidations-explicit.component.css']
})
export class DemoFormWithvalidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  // sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      // 'sku': ['', Validators.required]
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])]

    });
    // this.sku = this.myForm.controls['sku'];
   }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('you submitted value:', value);
  }
}

function skuValidator(control: FormControl):{[s: string] : boolean} {
  if(!control.value.match(/^Haci/)) {
    return {invalidSku: true};
  }

  return null;
}
