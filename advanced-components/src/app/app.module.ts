import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { ExampleDef } from './example.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { PopupDemoComponent } from './host/popup-demo/popup-demo.component';
import { HostModule } from './host/host.module';
import { PopupDemoComponent1 } from './host/popup-demo/steps/host-1';
import { PopupDemoComponent2 } from './host/popup-demo/steps/host-2';
import { PopupDemoComponent3 } from './host/popup-demo/steps/host-3';
import { PopupDemoComponent4 } from './host/popup-demo/steps/host-4';
import { ContentProjectionDemoComponent } from './content-projection/content-projection-demo/content-projection-demo.component,';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { TabsModule } from './tabs/tabs.module';
import { ContentTabsDemoComponent } from './tabs/content-tabs-demo/content-tabs-demo.component';
import { LifeCycleModule } from './lifecycle/lifecycle.module';
import { OnInitDemoComponent } from './lifecycle/on-init/on-init-demo.component';
import { OnChangesDemoComponent } from './lifecycle/on-changes/on-changes-demo.component';
import { DiffersDemoComponent } from './lifecycle/differs/differs-demo.component';
import { AllHooksDemoComponent } from './lifecycle/all-hooks/all-hooks-demo.component';
import { NgBookIfDemoComponent } from './templates/ng-book-if/ng-book-if-demo.component';
import { TemplatesModule } from './templates/templates.module';
import { NgBookForDemoComponent } from './templates/ng-book-for/ng-book-for-demo.component';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { OnPushDemoComponent } from './change-detection/on-push-demo/on-push-demo.component';
import { ObservablesDemoComponent } from './change-detection/observables-demo/observables-demo.component';

const examples: ExampleDef[] = [
  // {label: 'Intro',                            name: 'Root',                       path: '',                       component: IntroComponent},
  // {label: 'Styling',                          name: 'Styling',                    path: 'styling',                component: StylingDemoComponent },
  {label: 'Modifying the Host (Step 1)',      name: 'Host1',                      path: 'host-step-1',            component: PopupDemoComponent1, dev: true},
  {label: 'Modifying the Host (Step 2)',      name: 'Host2',                      path: 'host-step-2',            component: PopupDemoComponent2, dev: true},
  {label: 'Modifying the Host (Step 3)',      name: 'Host3',                      path: 'host-step-3',            component: PopupDemoComponent3, dev: true},
  {label: 'Modifying the Host (Step 4)',      name: 'Host4',                      path: 'host-step-4',            component: PopupDemoComponent4, dev: true},
  {label: 'Popup - Modifying the Host',       name: 'Host',                       path: 'host-final',             component: PopupDemoComponent},
  {label: 'Tabs - Component Querying',        name: 'Tabs',                       path: 'tabs',                   component: ContentTabsDemoComponent},
  {label: 'Lifecycle 1 - OnInit / OnDestroy', name: 'Lifecycle1',                 path: 'lifecycle-hooks-1',      component: OnInitDemoComponent },
  {label: 'Lifecycle 2 - OnChanges',          name: 'Lifecycle2',                 path: 'lifecycle-hooks-2',      component: OnChangesDemoComponent },
  {label: 'Lifecycle 3 - Differs',            name: 'Lifecycle3',                 path: 'lifecycle-hooks-3',      component: DiffersDemoComponent },
  {label: 'Lifecycle 4 - All Hooks',          name: 'Lifecycle4',                 path: 'lifecycle-hooks-4',      component: AllHooksDemoComponent },
  {label: 'ngBookFor',                        name: 'NgBookFor',                  path: 'ng-book-for',            component: NgBookForDemoComponent },
  {label: 'ngBookIf',                         name: 'NgBookIf',                   path: 'ng-book-if',             component: NgBookIfDemoComponent },
  {label: 'Content Projection',               name: 'ContentProjection',          path: 'content-projection',     component: ContentProjectionDemoComponent },
  {label: 'Change Detection - OnPush',        name: 'ChangeDetectionOnPush',      path: 'change-detection-onpush', component: OnPushDemoComponent },
  {label: 'Change Detection - Observables',   name: 'ChangeDetectionObservables', path: 'change-detection-observ', component: ObservablesDemoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HostModule,
    ContentProjectionModule,
    TabsModule,
    LifeCycleModule,
    TemplatesModule,
    ChangeDetectionModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
