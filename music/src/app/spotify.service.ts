import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }

  searchTrack(query: string) {
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;

    const apiKey = 'BQCrvtM-xxNg51ge12PMKgXhY0SMm3OlNgs8gskZ6arB7EIYrT8RClVeQwtzhp6F2XGGwCkH2tdrwuHp4ZbKkoPnvSz7kaFm6jrt4y6g02D5e6WBW8GNaPcNe1Nu6Qv7L8O2OxwgJtnHVL07SNplWJ_WR3sPmqY_72YWoImO04iI96WHtRZ1UClQ2LR67JKifLtw2ZDVixENFJgDccrKlicPKIfYEaxaZpfF_mL4jz8ZAltM';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`
    });
    const options = {
      headers: headers
    };

    return this.http.request("GET", queryURL, options);
    // return this.http.get(queryURL)
  }
}
 