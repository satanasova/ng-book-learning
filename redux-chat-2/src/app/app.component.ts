import { Component, Inject, OnInit } from '@angular/core';
import { AppState } from './app.reducer';
import { AppStore } from './app.store';
import { ChatExampleData } from './data/chat-example-data';
import * as Redux from 'redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    ChatExampleData(store)
  }

  ngOnInit() {
    console.log('app component loaded')
  }
}
