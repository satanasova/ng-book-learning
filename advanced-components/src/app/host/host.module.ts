import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PopupDemoComponent } from "./popup-demo/popup-demo.component";
import { PopupDirective } from "./popup-demo/popup.directive";
import { ProfileCardComponent } from "./popup-demo/profile-card.component";
import { PopupDemoComponent1, PopupDemoComponent1Module } from "./popup-demo/steps/host-1";
import { PopupDemoComponent2, PopupDemoComponent2Module } from "./popup-demo/steps/host-2";
import { PopupDemoComponent3, PopupDemoComponent3Module } from "./popup-demo/steps/host-3";
import { PopupDemoComponent4, PopupDemoComponent4Module } from "./popup-demo/steps/host-4";

@NgModule({
    imports:[
        CommonModule,
        PopupDemoComponent1Module,
        PopupDemoComponent2Module,
        PopupDemoComponent3Module,
        PopupDemoComponent4Module
    ],
    declarations:[
        PopupDemoComponent,
        ProfileCardComponent,
        PopupDirective
    ],
    exports: [
        PopupDemoComponent,
        PopupDemoComponent1,
        PopupDemoComponent2,
        PopupDemoComponent3,
        PopupDemoComponent4
    ]
})
export class HostModule {}