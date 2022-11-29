import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-all-hooks-demo',
  templateUrl: './all-hooks-demo.component.html'
})
export class AllHooksDemoComponent implements OnInit {
  displayAfters: boolean = true;

  constructor() {}

  ngOnInit(): void {
    
  }

  toggleAfters(): void {
    this.displayAfters = !this.displayAfters;
  }

}