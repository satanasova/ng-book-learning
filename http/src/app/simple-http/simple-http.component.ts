import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  posts: Object;
  gettingData: boolean;
  postingData: boolean;
  deletingData: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onGetRequest();
  }

  onGetRequest(): void {
    this.gettingData = true;
    this.http
      .get('https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts')
      .subscribe(data => {
        this.posts = data;
        this.gettingData = false;
        // console.log(this.posts)
      });
  }

  onPostRequest(titleInputEl: HTMLInputElement, contentInputEl: HTMLInputElement): void {
    if(!titleInputEl.value || !contentInputEl.value) {
      return;
    }
    this.postingData = true;

    const postData: object = {
      title: titleInputEl.value,
      content: contentInputEl.value
    }

    this.http.post('https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts', postData)
    .subscribe(
      () => this.postingData = false,
      (err) => console.log(err),
      () => this.onGetRequest()
    );

    titleInputEl.value = '';
    contentInputEl.value = '';
    
  }

  onDeleteRequest(): void {
    this.deletingData = true;
    for(let key in this.posts){
      if(this.posts.hasOwnProperty(key)){
        let postId = this.posts[key].id;
        this.http.delete(`https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts/${postId}`)
        .subscribe(
          () => this.deletingData = false,
          (err) => console.log(err),
          () => this.onGetRequest()
        );
      }
    }
    
  }
}
