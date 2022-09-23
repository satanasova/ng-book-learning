import { newArray } from '@angular/compiler/src/util';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating-display',
  templateUrl: './rating-display.component.html',
  styleUrls: ['./rating-display.component.css']
})
export class RatingDisplayComponent implements OnInit {
  @Input() rating: number;
  ratingPoints: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getRatingPoints() {
    let int = this.rating | 0;
    let remainder = +(this.rating % 1).toFixed(1);
    this.ratingPoints = new Array(int).fill(1);
    if (remainder > 0) {
      this.ratingPoints.push(remainder);
    }

    if (this.ratingPoints.length < 5) {
      this.ratingPoints.length = 5;
    }

    return this.ratingPoints;
  }

}
