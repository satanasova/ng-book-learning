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

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location) {
    }

    isActive(): boolean {
        return `/${this.item.path}` === this.location.path();
    }
    
    ngOnInit(): void {
    }
}