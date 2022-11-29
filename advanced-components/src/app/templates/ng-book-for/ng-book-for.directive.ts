import { Directive, DoCheck, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef, ViewRef } from "@angular/core";

@Directive({
  selector: '[ngBookFor]'
})
export class NgBookForDirective implements DoCheck {
  public items: any;
  private differ?: IterableDiffer<any>;
  private views: Map<any, ViewRef> = new Map<any,ViewRef>();

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>,
              private differs: IterableDiffers){}

  @Input('ngBookForOf')
  set ngBookForOf(items: any) {
    this.items = items;
    console.log('setting items', items)
    if(this.items && !this.differ) {
      this.differ = this.differs.find(items).create();
    }
  }

  ngDoCheck(): void {
    console.log('nd do check')
    if (this.differ) {   //make sure we already instantiated the differ
      const changes = this.differ.diff(this.items);

      if (changes) {
        changes.forEachAddedItem(change => {
          const view = this.viewContainer.createEmbeddedView(
            this.template,
            {$implicit: change.item}
          );
          this.views.set(change.item, view);
        });

        changes.forEachRemovedItem(change => {
          const view = this.views.get(change.item);
          if(view){ // !
            const idx = this.viewContainer.indexOf(view);
            this.viewContainer.remove(idx);
          }
          this.views.delete(change.item);
        })
      }
    }
  }

}