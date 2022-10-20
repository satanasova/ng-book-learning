import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  track: Object;
  id: string;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) { 
    this.route.params.subscribe(params => { this.id = params['id'];});
  }

  ngOnInit(): void {
    this.spotify
      .getTrack(this.id)
      .subscribe((res:any) => this.renderTrack(res));
  }

  renderTrack(res: any) {
    this.track = res;
  }


  back() {
    this.location.back();
  }
}
