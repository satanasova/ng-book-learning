import { Component, Input, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'review-star',
  templateUrl: './review-star.component.html',
  styleUrls: ['./review-star.component.css']
})
export class ReviewStarComponent implements OnInit {
  @Input() starFullness: number;

  constructor() { }

  ngOnInit(): void {
  }

  getStarWidth() {
    if (!this.starFullness) {
      return 0;
    }

    return this.starFullness * 20;
  }
}
