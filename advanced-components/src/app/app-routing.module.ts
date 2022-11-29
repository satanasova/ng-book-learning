import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesDemoComponent } from './change-detection/observables-demo/observables-demo.component';
import { OnPushDemoComponent } from './change-detection/on-push-demo/on-push-demo.component';
import { ContentProjectionDemoComponent } from './content-projection/content-projection-demo/content-projection-demo.component,';
import { PopupDemoComponent } from './host/popup-demo/popup-demo.component';
import { PopupDemoComponent1 } from './host/popup-demo/steps/host-1';
import { PopupDemoComponent2 } from './host/popup-demo/steps/host-2';
import { PopupDemoComponent3 } from './host/popup-demo/steps/host-3';
import { PopupDemoComponent4 } from './host/popup-demo/steps/host-4';
import { AllHooksDemoComponent } from './lifecycle/all-hooks/all-hooks-demo.component';
import { DiffersDemoComponent } from './lifecycle/differs/differs-demo.component';
import { OnChangesDemoComponent } from './lifecycle/on-changes/on-changes-demo.component';
import { OnInitDemoComponent } from './lifecycle/on-init/on-init-demo.component';
import { ContentTabsDemoComponent } from './tabs/content-tabs-demo/content-tabs-demo.component';
import { NgBookForDemoComponent } from './templates/ng-book-for/ng-book-for-demo.component';
import { NgBookIfDemoComponent } from './templates/ng-book-if/ng-book-if-demo.component';

const routes: Routes = [
  // { path: '', component: IntroComponent, pathMatch: 'full' },
  // { path: 'styling', component: StylingDemoComponent, pathMatch: 'full' },
  { path: 'ng-book-if', component: NgBookIfDemoComponent, pathMatch: 'full' },
  { path: 'ng-book-for', component: NgBookForDemoComponent, pathMatch: 'full' },
  { path: 'change-detection-onpush', component: OnPushDemoComponent, pathMatch: 'full' },
  { path: 'change-detection-observ', component: ObservablesDemoComponent, pathMatch: 'full' },
  { path: 'content-projection', component: ContentProjectionDemoComponent, pathMatch: 'full' },
  { path: 'tabs', component: ContentTabsDemoComponent, pathMatch: 'full' },
  { path: 'host-final', component: PopupDemoComponent, pathMatch: 'full' },
  { path: 'host-step-1', component: PopupDemoComponent1, pathMatch: 'full' },
  { path: 'host-step-2', component: PopupDemoComponent2, pathMatch: 'full' },
  { path: 'host-step-3', component: PopupDemoComponent3, pathMatch: 'full' },
  { path: 'host-step-4', component: PopupDemoComponent4, pathMatch: 'full' },
  { path: 'lifecycle-hooks-1', component: OnInitDemoComponent, pathMatch: 'full' },
  { path: 'lifecycle-hooks-2', component: OnChangesDemoComponent, pathMatch: 'full' },
  { path: 'lifecycle-hooks-3', component: DiffersDemoComponent, pathMatch: 'full' },
  { path: 'lifecycle-hooks-4', component: AllHooksDemoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
