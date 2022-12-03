import { Location } from "@angular/common";
import { fakeAsync, inject, waitForAsync } from "@angular/core/testing";
import { Router } from "@angular/router";
import { async } from "rxjs";
import { MockSpotifyService } from "src/test/spotify.service.mock";
import { advance, configureMusicTests, createRoot, RootCmp } from "src/test/test.module";
import { SpotifyService } from "../spotify.service";

describe('ArtistComponent', () => {
  beforeEach(waitForAsync(() => {
    configureMusicTests();
  }));

  describe('initialization', () => {
    it('retrieves the artist', fakeAsync(
      inject([Router, SpotifyService],  //classes the INJECT uses are the provediers of TestBed.configureTestingModule
        (router: Router,
        mockSpotifyService: MockSpotifyService) => {
          const fixture = createRoot(router, RootCmp);
          router.navigateByUrl('/artists/2');
          advance(fixture);

          expect(mockSpotifyService.getArtistSpy).toHaveBeenCalledWith('2');
        }
    )));
  })

  describe('back', () => {
    it('returns to the previous location', fakeAsync(
      inject([Router, Location],
        (router: Router, location: Location) => {
          const fixture = createRoot(router, RootCmp);
          expect(location.path()).toEqual('/');

          router.navigateByUrl('/artists/2');
          advance(fixture);
          expect(location.path()).toEqual('/artists/2');

          //We get a reference to our ArtistComponent instance:
          const artist = fixture.debugElement.children[1].componentInstance;
          artist.back();
          advance(fixture);

          expect(location.path()).toEqual('/');
        })
    ))
  })

  describe('renderArtist', () => {
    it('renders album info', fakeAsync(
      inject([Router, SpotifyService],
        (router: Router, mockSpotifyService: MockSpotifyService) => {
          const fixture = createRoot(router, RootCmp);
          const artistName = 'Haci Hacev';
          const imgUrl = 'haci_jpg';

          const artist = {name: artistName, images: [{url: imgUrl}]};
          mockSpotifyService.setResponse(artist);

          router.navigateByUrl('/artists/2');
          advance(fixture);

          const compiled = fixture.debugElement.nativeElement;
          // console.log(compiled.querySelector('h1'));

          expect(compiled.querySelector('h1').innerHTML).toContain(artistName);
          expect(compiled.querySelector('img').src).toContain(imgUrl);
        })
    ))
  })
})