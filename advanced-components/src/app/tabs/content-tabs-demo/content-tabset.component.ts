import { Component, ContentChildren, OnInit, QueryList } from "@angular/core";
import { first } from "rxjs";
import { ContentTabComponent } from "./content-tab.component";

@Component({
    selector: 'tabset',
    templateUrl: './content-tabset.component.html'
})
export class ContentTabsetComponent implements OnInit {
    @ContentChildren(ContentTabComponent) tabs!: QueryList<ContentTabComponent>; 

    ngOnInit() {
        setTimeout(() => {
            this.tabs.toArray()[0].active = true;
            this.tabs.toArray()[0].tabInit();
        }, 0);
    }

    setActive(tab: ContentTabComponent): void {
        this.tabs.toArray().forEach((t) => { t.active = false; t.dataLoaded = false;});
        tab.active = true;
        tab.tabInit();
    }



}