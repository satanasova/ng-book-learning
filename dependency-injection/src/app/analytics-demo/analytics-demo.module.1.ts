import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AnalyticsService } from "../services/analytics.service";
import { AnalyticsImplementation, Metric } from "./analytics-demo.interface";
import { HttpClient, HttpClientModule } from '@angular/common/http'

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [ //providers: [{ provide: AnalyticsService, useFactory: ()=>{...} }]
        { provide: 'API_URL', useValue: 'http://devserver.com'},
        {
            provide: AnalyticsService, //token, just used as an identifier
            deps: [HttpClient, 'API_URL'], // specify the factory dependencies
            useFactory(http: HttpClient, apiUrl: string) {             //whatever is returned from this fn will be injected
                
                // create an implementation that will log the event
                const logginImplementation: AnalyticsImplementation = {
                    recordEvent: (metric: Metric): void => {
                        console.log('The metric is:', metric);
                        console.log('Sending to:', apiUrl);
                    }
                };

                // create our new `AnalyticsService` with the implementation
                return new AnalyticsService(logginImplementation);
            }
        }
    ],
    declarations: []
})

export class AnalyticsDemoModule {}