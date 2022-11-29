import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: 'app-observables-change-detection',
  templateUrl: './observables-change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesChangeDetectionComponent implements OnInit {
  @Input() items!: Observable<number>;
  counter: number = 0;

  constructor(private changeDetector: ChangeDetectorRef){}

  ngOnInit(): void {
    // this.items.subscribe((v) => {
    //   console.log('got value', v);
    //   this.counter++;
    //   if (this.counter % 5 === 0) {
    //     this.changeDetector.markForCheck();
    //   }
    // },
    // null,
    // () => {
    //   this.changeDetector.markForCheck();
    // });

    this.items.subscribe({
      next: (v) => {
        console.log('got value', v);
        this.counter++;
        if (this.counter % 5 === 0) {
          this.changeDetector.markForCheck();
        }
      },
      complete: () => {
        this.changeDetector.markForCheck();
      }
    })

  }


}