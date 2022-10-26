
import { Component, OnInit, Inject } from '@angular/core';
import { AppState } from '../app.reducer';
import { AppStore } from '../app.store';
import * as Redux from 'redux';
import { getUnreadMessagesCount } from '../thread/thread.reducer';


@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.scss']
})

export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number = 0;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  ngOnInit(): void {
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
  }

}
