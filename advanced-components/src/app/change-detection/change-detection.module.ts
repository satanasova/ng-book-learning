import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ObservablesChangeDetectionComponent } from "./observables-demo/observables-change-detection.component";
import { ObservablesDemoComponent } from "./observables-demo/observables-demo.component";
import { DefaultChangeDetectionComponent } from "./on-push-demo/default-change-detection.component";
import { OnPushChangeDetectionComponent } from "./on-push-demo/on-push-change-detection.component";
import { OnPushDemoComponent } from "./on-push-demo/on-push-demo.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DefaultChangeDetectionComponent,
    OnPushChangeDetectionComponent,
    OnPushDemoComponent,
    ObservablesDemoComponent,
    ObservablesChangeDetectionComponent
  ]
})
export class ChangeDetectionModule {}