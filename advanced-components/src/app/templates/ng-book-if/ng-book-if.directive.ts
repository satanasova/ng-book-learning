import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[ngBookIf]'
})
export class NgBookIfDirective {


  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {
                console.log(viewContainer,template)
              }

  @Input() set ngBookIf(condition: any) {
    if(condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}