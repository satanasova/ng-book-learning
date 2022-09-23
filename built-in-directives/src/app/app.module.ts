import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleExampleComponent,
    NgForExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
