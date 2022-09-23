import { Component, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable, fromEvent } from "rxjs";
import { debounceTime, filter, map, subscribeOn, switchAll, tap } from 'rxjs/operators';
import { SearchResult } from "./search-result.model";
import { YoutubeSearchService } from "./youtube-search.service";

@Component({
    selector: 'app-search-box',
    template: `
        <input type="text" class="form-control" placeholder="Search" autofocus>
    `
})

export class SearchBoxComponent implements OnInit {
    //the events will be emitted from this component
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(private youtube: YoutubeSearchService, private el: ElementRef){}

    ngOnInit(): void {

        const obs = fromEvent(this.el.nativeElement, 'keyup')
            .pipe(
                map((e: any) => e.target.value), //extarct the value of the input
                filter((text: string) => text.length > 1), // ignore short searches
                debounceTime(250), // will throttle requests that come in faster than 250ms
                tap(() => this.loading.emit(true)), //enable loading
                map((query: string) => this.youtube.search(query)),
                switchAll()              
            );

            obs.subscribe(
                (results: SearchResult[]) => {  //on success
                    this.loading.emit(false);
                    this.results.emit(results);
                },
                (err:any) => {   //on error
                    console.log(err);
                    this.loading.emit(false);
                },
                () => {   //on completion
                    this.loading.emit(false);
                }
            );
        
    }
    
    
}