import { Component, OnInit } from "@angular/core";
import { Observable, timer} from "rxjs";
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html'
})
export class ObservablesDemoComponent implements OnInit {
  itemObservable!: Observable<number>;

  constructor(){}

  ngOnInit(): void {
    this.itemObservable = timer(100,100).pipe(take(101));
  }

}