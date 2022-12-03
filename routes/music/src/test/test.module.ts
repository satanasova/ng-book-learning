import { CommonModule } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Component, NgModule } from "@angular/core";
import { ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { ActivatedRoute, provideRoutes, Router, Routes } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AlbumComponent } from "src/app/album/album.component";
import { ArtistComponent } from "src/app/artist/artist.component";
import { SearchComponent } from "src/app/search/search.component";
import { SpotifyService } from "src/app/spotify.service";
import { TrackComponent } from "src/app/track/track.component";
import { MockSpotifyService } from "./spotify.service.mock";

@Component({
  selector: 'blank-cmp',
  template:``
})
export class BlankCmp{}

@Component({
  selector: 'root-cmp',
  template:`<router-outlet></router-outlet>`
})
export class RootCmp{}

export const routerConfig: Routes = [
  { path: '', component: BlankCmp },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent }
];

export function advance(fixture: ComponentFixture<any>): void {
  tick();
  fixture.detectChanges();
}

export function createRoot(router: Router, componentType: any): ComponentFixture<any> {
  const f = TestBed.createComponent(componentType);
  advance(f);
  router.initialNavigation();
  //
  advance(f);
  return f;
}

export function configureMusicTests() {
  const mockSpotifyService: MockSpotifyService = new MockSpotifyService();

  TestBed.configureTestingModule({
    imports: [
      {
        ngModule: RouterTestingModule,
        providers: [provideRoutes(routerConfig)]
      },
      TestModule,
    ],
    providers: [
      [{provide: SpotifyService, useValue: new MockSpotifyService()}]
    ]
  });
}

@NgModule({
  imports: [RouterTestingModule, CommonModule],
  entryComponents: [
    BlankCmp,
    RootCmp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  exports: [
    BlankCmp,
    RootCmp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  declarations: [
    BlankCmp,
    RootCmp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ]
})
class TestModule {}