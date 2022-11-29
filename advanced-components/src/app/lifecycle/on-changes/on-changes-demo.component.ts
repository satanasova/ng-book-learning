import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-on-changes-demo',
    templateUrl:'./on-changes-demo.component.html'
})
export class OnChangesDemoComponent implements OnInit {
    display: boolean = false;
    name: string = '';
    comment: string = '';

    constructor(){}
    
    ngOnInit(): void {
        this.display = true;
        this.name = 'Pecka';
        this.comment = 'I love Haci';
    }

    setValues(namefld: HTMLInputElement, commenfld: HTMLTextAreaElement): void {
        this.name = namefld.value;
        this.comment = commenfld.value;
    }

    toggle(): void {
        this.display = !this.display;
    }

}