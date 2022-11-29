// The OnChangeshook is called after one or more of our component properties 
// have been changed. The ngOnChanges method receives a parameter which tells 
// which properties have changed.

import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-on-changes',
    templateUrl: './on-changes.component.html'
})
export class OnChangesComponent implements OnChanges {
   @Input('name') name: string = '';
   @Input('comment') comment: string = '';
   
    ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
        console.log('Changes', changes)
    }

}