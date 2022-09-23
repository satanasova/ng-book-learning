import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @Input() rating: number;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit(): void {
  }

}
