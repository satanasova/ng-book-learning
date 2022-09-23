import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css']
})
export class DemoFormNgModelComponent implements OnInit {
  productName: string;

  constructor() {
    this.productName = "ng-book"
   }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('you submitted value:', value);
  }
}
