import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormWithvalidationsExplicitComponent } from './demo-form-withvalidations-explicit/demo-form-withvalidations-explicit.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormWithvalidationsExplicitComponent,
    DemoFormWithEventsComponent,
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
