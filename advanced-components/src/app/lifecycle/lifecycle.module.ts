import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AllHooksDemoComponent } from "./all-hooks/all-hooks-demo.component";
import { AllHooksComponent } from "./all-hooks/all-hooks.component";
import { CommentListComponent } from "./differs/comment-list.component";
import { CommentComponent } from "./differs/comment.component";
import { DiffersDemoComponent } from "./differs/differs-demo.component";
import { OnChangesDemoComponent } from "./on-changes/on-changes-demo.component";
import { OnChangesComponent } from "./on-changes/on-changes.component";
import { OnInitDemoComponent } from "./on-init/on-init-demo.component";
import { OnInitComponent } from "./on-init/on-init.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations:[
        OnInitComponent,
        OnInitDemoComponent,
        OnChangesComponent,
        OnChangesDemoComponent,
        CommentComponent,
        CommentListComponent,
        DiffersDemoComponent,
        AllHooksComponent,
        AllHooksDemoComponent
    ]
})
export class LifeCycleModule {}