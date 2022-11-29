import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-content-tabs-demo',
    templateUrl: './content-tabs-demo.component.html'
})
export class ContentTabsDemoComponent implements OnInit {
    tabs: any;

    constructor(){}
    
    ngOnInit(): void {
        this.tabs = [
            {title: 'About', content: 'This is the About tab', loadTime: 100},
            {title: 'Haci', content: 'I am Haci tab', loadTime: 300},
            {title: 'Taki', content: 'I am Taki tab', loadTime: 600},
            {title: 'Kenny', content: 'Meso', loadTime: 1000},
        ]
    }
}
