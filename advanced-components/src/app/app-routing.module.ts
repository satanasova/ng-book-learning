import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: IntroComponent, pathMatch: 'full' },
  // { path: 'styling', component: StylingDemoComponent, pathMatch: 'full' },
  // { path: 'ng-book-if', component: NgBookIfDemoComponent, pathMatch: 'full' },
  // { path: 'ng-book-for', component: NgBookForDemoComponent, pathMatch: 'full' },
  // { path: 'change-detection-onpush', component: OnPushDemoComponent, pathMatch: 'full' },
  // { path: 'change-detection-observ', component: ObservablesDemoComponent, pathMatch: 'full' },
  // { path: 'content-projection', component: ContentProjectionDemoComponent, pathMatch: 'full' },
  // { path: 'tabs', component: ContentTabsDemoComponent, pathMatch: 'full' },
  // { path: 'host-final', component: PopupDemoComponent, pathMatch: 'full' },
  // { path: 'host-step-1', component: PopupDemoComponent1, pathMatch: 'full' },
  // { path: 'host-step-2', component: PopupDemoComponent2, pathMatch: 'full' },
  // { path: 'host-step-3', component: PopupDemoComponent3, pathMatch: 'full' },
  // { path: 'host-step-4', component: PopupDemoComponent4, pathMatch: 'full' },
  // { path: 'lifecycle-hooks-1', component: OnInitDemoComponent, pathMatch: 'full' },
  // { path: 'lifecycle-hooks-2', component: OnChangesDemoComponent, pathMatch: 'full' },
  // { path: 'lifecycle-hooks-3', component: DiffersDemoComponent, pathMatch: 'full' },
  // { path: 'lifecycle-hooks-4', component: AllHooksDemoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
