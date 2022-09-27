import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToProduct(id: HTMLInputElement): void {
    if(!id.value) {
      return;
    }

    this.router.navigate(['./', id.value], {relativeTo: this.route});
    id.value = '';
  }

}
