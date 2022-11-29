import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'tab',
    templateUrl: './content-tab.component.html'
})
export class ContentTabComponent  {
    @Input() title: string = '';
    @Input() timeLoad: number = 0;
    active: boolean = false;
    name: string = '';
    dataLoaded = false;

    constructor() {

    }
    
    tabInit(): void {
        setTimeout(() => {
            this.dataLoaded = true;
        }, this.timeLoad)
    }

    nothing() {
        console.log('do nothing', this.active)
    }
}