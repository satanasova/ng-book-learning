import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-ng-book-for-demo',
  templateUrl: './ng-book-for-demo.component.html'
})
export class NgBookForDemoComponent implements OnInit {
  people: any[] = [];

  constructor(){}

  ngOnInit(): void {
    this.people = [
      {name: 'Haci', age: 28},
      {name: 'Pecka', age: 28},
      {name: 'Taki', age: 29},
      {name: 'Kenny', age: 9}
    ]
  }

  remove(p: Object) {
    const idx: number = this.people.indexOf(p);
    this.people.splice(idx,1);
    return false;
  }

  add(name: HTMLInputElement, age: HTMLInputElement) {
    this.people.push({name: name.value, age: age.value});
    name.value = '';
    age.value = '';
  }

}