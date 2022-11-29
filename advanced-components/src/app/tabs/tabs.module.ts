import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentTabComponent } from "./content-tabs-demo/content-tab.component";
import { ContentTabsDemoComponent } from "./content-tabs-demo/content-tabs-demo.component";
import { ContentTabsetComponent } from "./content-tabs-demo/content-tabset.component";

@NgModule({
    imports: [ 
        CommonModule
    ],
    declarations: [
        ContentTabComponent,
        ContentTabsDemoComponent,
        ContentTabsetComponent
    ]
})
export class TabsModule {}