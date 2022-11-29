import { Component, Directive, ElementRef, HostBinding, HostListener, Input, NgModule } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Directive({
    selector: '[popup]',
    exportAs: 'popupVar'
})
export class PopupDirective {
    @Input() message!: String;

    constructor(private _elementRef: ElementRef){
        console.log(_elementRef);
    }

    @HostListener('click')
    displayMessage(): void {
        alert(this.message);
        this._elementRef.nativeElement.style.color = 'red';
    }

    // @HostBinding('attr.class') cssClass = 'host-binding-bg' // --> this will overwrite all classes
}

@Component({
    selector: 'app-demo-popup',
    template: `
    <div class="ui message" popup #popup1="popupVar" message="Clicked the message">
        <div class="header">Learning Directives</div>
        <p>This should use our Popup diretive</p>
    </div>
    <i class="alarm icon" popup #popup2="popupVar" message="Clicked the alarm icon"></i>

    <div style="margin-top: 20px;">
        <button (click)="popup1.displayMessage()" class="ui button">
            Display popup for message element
        </button>
        <button (click)="popup2.displayMessage()" class="ui button">
            Display popup for alarm icon
        </button>
    </div>
    `
})
export class PopupDemoComponent4 {}

@NgModule({
    declarations: [
        PopupDemoComponent4,
        PopupDirective
    ],
    exports: [ PopupDemoComponent4 ]
})
export class PopupDemoComponent4Module {}