import { Component } from "@angular/core";

@Component({
    selector:'app-content-projection-demo',
    template: `
    <div app-message header="Banner Title">
        This is the content of the message 
        (the host element's children)
        <span>test</span>
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    </div>

    <ul>
        <li app-message header="Title 1">1</li>
        <li app-message header="Title 2">2</li>
        <li app-message header="Title 3">3</li>
    </ul>
    `
})
export class ContentProjectionDemoComponent {}