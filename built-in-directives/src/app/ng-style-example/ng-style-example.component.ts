import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {
  color:string;
  fontSize: number;

  constructor() { }

  ngOnInit(): void {
  }

  apply(color: string, font:number): void {
    this.color = color;
    this.fontSize = font;
  }
}
