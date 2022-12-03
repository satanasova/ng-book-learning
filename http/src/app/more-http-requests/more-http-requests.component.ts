import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html'
})
export class MoreHttpRequestsComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makePost(): void {
    this.loading = true;
    this.http
      .post(
        'https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts',
        {
          title: 'Test',
          content: 'testing'
        }
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      })
  }

  makeDelete(): void {
    this.loading = true;
    this.http
      .delete('https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      })
  }

  makeHeaders(): void {
    const headers: HttpHeaders = new HttpHeaders({
      'X-HACI-TOKEN': 'haci'
    });

    const req = new HttpRequest(
      'GET',
      'https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts/1',
      {
        headers: headers
      }
    );

    this.http.request(req).subscribe(data => {
      console.log(data);
      this.data = data['body'];
    })
  }
}
