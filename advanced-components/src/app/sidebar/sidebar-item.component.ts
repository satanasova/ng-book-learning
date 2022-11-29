import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ExampleDef } from "../example.model";
import { Location } from '@angular/common';

@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent implements OnInit {
    @Input('item') item!: ExampleDef;

    onlyGetOld?: boolean;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location) {
                    this.fetchItems();
    }

    isActive(): boolean {
        return `/${this.item.path}` === this.location.path();
    }
    
    ngOnInit(): void {
        this.onlyGetOld = false;
        
    }

    fetchItems() {
        if (this.onlyGetOld ===  undefined) {
            this.onlyGetOld = false;
        }

        itemsServiceFetch(this.onlyGetOld)
    }

    getOldInputChange(e: Event) {
        // this.onlyGetOld = e.target.checked;
        this.fetchItems();
    }

}

function itemsServiceFetch(onlyOld: boolean) {
    return [];
}


// .
// .
// .
// .
// creating class
// .
// .
// initialize property Clicked of type Boolean
// .
// .
// constructor
// .
// .
// --------
// class is usable
// 
//
//
// ngOninit
//
