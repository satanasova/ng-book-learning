import { ApplicationRef, Component, ComponentRef, ElementRef, HostBinding, Input, OnInit } from "@angular/core";

@Component({
    selector: '[app-message]',
    template:`
    <div class="header"> {{ header }} </div>
    <div class="content">
        <ng-content></ng-content>
        <div (click)="deleteMessage($event)">X</div>
    </div>
    `
})
export class MessageComponent implements OnInit {
    @Input() header: string = '';
    @HostBinding('attr.class') cssClass = 'ui message green';

    constructor(private elRef: ElementRef){
        console.log(this.elRef)
    }
    
    ngOnInit(): void {
        console.log('header',this.header);
    }

    deleteMessage(e: MouseEvent) {
        this.elRef.nativeElement.remove();
    }
}
