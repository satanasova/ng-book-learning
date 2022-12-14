import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SearchResult } from "./search-result.model";


export const YOUTUBE_API_KEY:string="AIzaSyAVYaS1bQA8xWtoQz2uc6EmEpi3XUIsM3U";
export const YOUTUBE_API_URL:string="https://www.googleapis.com/youtube/v3/search";


@Injectable()
export class YoutubeSearchService {
    constructor(
        private http: HttpClient,
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string
    ){}

    search(query: string): Observable<SearchResult[]> {
        const params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');

        const queryUrl = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl).pipe(
            map(response => {
                console.log('response', response);
                return <any>response['items']
                    .map(item => {
                        console.log('raw item',item);
                        return new SearchResult({
                            id: item.id.videoId,
                            title: item.snippet.title,
                            description: item.snippet.description,
                            thumbnailUrl: item.snippet.thumbnails.high.url
                        });
                    });
                }   
            )
        );
    }
}

