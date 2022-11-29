import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgBookForDemoComponent } from "./ng-book-for/ng-book-for-demo.component";
import { NgBookForDirective } from "./ng-book-for/ng-book-for.directive";
import { NgBookIfDemoComponent } from "./ng-book-if/ng-book-if-demo.component";
import { NgBookIfDirective } from "./ng-book-if/ng-book-if.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgBookIfDirective,
    NgBookIfDemoComponent,
    NgBookForDirective,
    NgBookForDemoComponent
  ]
})
export class TemplatesModule {}