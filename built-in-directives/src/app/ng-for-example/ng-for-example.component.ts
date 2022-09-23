import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {
  people: object[];
  peopleByCity: object[];

  constructor() {
    this.people = [
      {name: 'Pecka', age: 27, city:'Varna'},
      {name: 'Taki', age: 28, city:'Dulovo'},
      {name: 'Haci', age: 27, city:'Sofia'}
    ];

    this.peopleByCity = [
      {
        city: 'Sofia',
        people: [
          {name: 'Haci', age: 27},
          {name: 'Keni', age: 8}
        ]
      },
      {
        city: 'Dulovo',
        people: [
          {name: 'Taki', age: 28},
          {name: 'Bojko', age: 13},
          {name: 'Byki', age: 0.5}
        ]
      },
      {
        city: 'Varna',
        people: [
          {name: 'Pecka', age: 27},
          {name: 'Zombi', age: 10},
          {name: 'Emocia', age: 12}
        ]
      }
    ]
   }

  ngOnInit(): void {
  }

}
