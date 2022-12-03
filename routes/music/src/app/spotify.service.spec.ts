import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { hasUncaughtExceptionCaptureCallback } from 'process';

import { SpotifyService } from './spotify.service';


function verifyRequest(server: HttpTestingController, url: string, response: any) {
    let request = server.expectOne(url);
    request.flush(response);
}

describe('SpotifyService', () => {
    let service: SpotifyService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SpotifyService]
        });
        service = TestBed.inject(SpotifyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have correct BASE URL', () => {
        expect(SpotifyService.BASE_URL).toEqual("https://api.spotify.com/v1");
    });

    it('creates and executes proper query',
        inject([SpotifyService, HttpTestingController],
            fakeAsync((spotifyService: SpotifyService,
                mockBackend: HttpTestingController) => {
                    const correctURL = 'https://api.spotify.com/v1/songs?Imagine';
                    const songName = 'John Lenon - Imagine';
                    
                    mockBackend.expectNone(correctURL);
                    spotifyService.query('/songs', ['Imagine']).subscribe((res) => {
                        console.log('response is ', res)
                        expect(res.name).toBe(songName)
                    })

                    verifyRequest(mockBackend, correctURL, {name: songName})
            }
        ))
    );

    describe('getTrack', () => {
        it('retrieves using the track ID', inject(
            [SpotifyService, HttpTestingController],
            fakeAsync((spotifyService: SpotifyService,
                mockBackend: HttpTestingController) => {
                    const TRACK_ID = 'HaciBaciTrack1223'
                    const correctURL = `https://api.spotify.com/v1/tracks/${TRACK_ID}`;
                    const trackName = 'Haci Baci';
                    let response;

                    spotifyService.getTrack(TRACK_ID).subscribe(res => {
                        console.log(res);
                        response = res;
                        expect(response.name).toBe(trackName);
                        
                    })
                    
                    tick();
                    // let request = mockBackend.expectOne(correctURL);
                    // request.flush({name:trackName});

                    verifyRequest(mockBackend, correctURL, {name: trackName})
                })
        ))
    });

    describe('searchTrack', () => {
        it('searches type and term', inject (
            [SpotifyService, HttpTestingController],
            fakeAsync((spotifyService: SpotifyService,
                mockBackend: HttpTestingController) => {
                    let correctURL = 'https://api.spotify.com/v1/search?q=TERM&type=track';
                    let trackName = 'HaciTrack';

                    spotifyService.searchTrack('TERM').subscribe(res => {
                        console.log('response is ', res);
                        expect(res.name).toBe(trackName);
                    })

                    tick();
                    // let request = mockBackend.expectOne(correctURL);
                    // request.flush({name: trackName});

                    verifyRequest(mockBackend,correctURL,{name: trackName});
                })
        ))
    })
});


// In essence, when testing services our goals should be:
// 1.Isolate all the dependencies by using stubs or mocks
// 2.In case of async calls, use fakeAsync and tick() to make sure they are fulfilled
// 3.Call the service method you’re testing
// 4.Assert that the returning value from the method matches what we expect